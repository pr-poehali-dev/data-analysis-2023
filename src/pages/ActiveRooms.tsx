import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { videoConferenceService, ConferenceRoom } from "@/services/videoConferenceService";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export default function ActiveRooms() {
  const [rooms, setRooms] = useState<ConferenceRoom[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadActiveRooms();
  }, []);

  const loadActiveRooms = async () => {
    setIsLoading(true);
    try {
      const activeRooms = await videoConferenceService.getActiveRooms();
      setRooms(activeRooms);
    } catch (error) {
      toast.error("Ошибка загрузки активных комнат");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEndConference = async (roomId: string) => {
    const success = await videoConferenceService.endConference(roomId);
    if (success) {
      toast.success("Конференция завершена");
      loadActiveRooms();
    } else {
      toast.error("Не удалось завершить конференцию");
    }
  };

  const getStatusColor = (status: ConferenceRoom["status"]) => {
    switch (status) {
      case "active":
        return "bg-green-500";
      case "scheduled":
        return "bg-yellow-500";
      case "ended":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status: ConferenceRoom["status"]) => {
    switch (status) {
      case "active":
        return "Активна";
      case "scheduled":
        return "Запланирована";
      case "ended":
        return "Завершена";
      default:
        return "Неизвестно";
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen pt-32 pb-20">
        <div className="container max-w-6xl">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-sentient mb-4">
                Активные <i className="font-light">комнаты</i>
              </h1>
              <p className="font-mono text-sm text-foreground/60">
                Управление всеми видеоконференциями в реальном времени
              </p>
            </div>
            <Button onClick={loadActiveRooms} variant="outline">
              <Icon name="RefreshCw" size={16} className="mr-2" />
              Обновить
            </Button>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <Icon
                  name="Loader2"
                  className="animate-spin text-primary mx-auto mb-4"
                  size={32}
                />
                <p className="font-mono text-sm text-foreground/60">
                  Загрузка комнат...
                </p>
              </div>
            </div>
          ) : rooms.length === 0 ? (
            <div className="text-center py-20 bg-secondary/30 rounded-lg border border-border">
              <Icon name="Video" className="text-foreground/40 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-sentient mb-2">Нет активных комнат</h3>
              <p className="font-mono text-sm text-foreground/60 mb-6">
                Создайте первую видеоконференцию
              </p>
              <Button onClick={() => (window.location.href = "/book")}>
                Создать комнату
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {rooms.map((room) => (
                <div
                  key={room.id}
                  className="bg-secondary/30 border border-border rounded-lg p-6 hover:border-primary/50 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-sentient">{room.name}</h3>
                        <Badge className={getStatusColor(room.status)}>
                          {getStatusText(room.status)}
                        </Badge>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2 font-mono text-sm text-foreground/60">
                          <Icon name="Users" size={16} />
                          <span>До {room.maxParticipants} участников</span>
                        </div>
                        <div className="flex items-center gap-2 font-mono text-sm text-foreground/60">
                          <Icon name="Palette" size={16} />
                          <span className="capitalize">{room.design}</span>
                        </div>
                        <div className="flex items-center gap-2 font-mono text-sm text-foreground/60">
                          <Icon name="Calendar" size={16} />
                          <span>
                            {new Date(room.createdAt).toLocaleDateString("ru-RU")}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 font-mono text-sm text-foreground/60">
                          <Icon name="Clock" size={16} />
                          <span>
                            До {new Date(room.expiresAt).toLocaleTimeString("ru-RU")}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            navigator.clipboard.writeText(room.hostUrl);
                            toast.success("Ссылка скопирована");
                          }}
                        >
                          <Icon name="Link" size={14} className="mr-1" />
                          Ссылка организатора
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            navigator.clipboard.writeText(room.participantUrl);
                            toast.success("Ссылка скопирована");
                          }}
                        >
                          <Icon name="Link" size={14} className="mr-1" />
                          Ссылка участника
                        </Button>
                        {room.status === "active" && (
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleEndConference(room.id)}
                          >
                            <Icon name="X" size={14} className="mr-1" />
                            Завершить
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-12 p-6 bg-primary/10 border border-primary/30 rounded-lg">
            <div className="flex items-start gap-4">
              <Icon name="Info" className="text-primary mt-1" size={20} />
              <div>
                <h4 className="font-mono text-sm font-medium mb-2">
                  Информация о лимитах
                </h4>
                <p className="font-mono text-xs text-foreground/60">
                  Платформа поддерживает до 100 одновременных комнат. Каждая комната
                  может вмещать до 100 участников. Записи конференций хранятся в
                  облаке 30 дней.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
