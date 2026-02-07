import { useEffect, useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { VideoConferenceRoom } from "@/components/VideoConferenceRoom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

export default function Conference() {
  const { roomId } = useParams<{ roomId: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [joined, setJoined] = useState(false);
  const [userName, setUserName] = useState("");
  const role = searchParams.get("role") || "participant";
  const design = (searchParams.get("design") || "minimal") as
    | "minimal"
    | "corporate"
    | "creative";

  useEffect(() => {
    // Проверяем, есть ли сохранённое имя пользователя
    const savedName = localStorage.getItem("userName");
    if (savedName) {
      setUserName(savedName);
    }
  }, []);

  const handleJoin = () => {
    if (!userName.trim()) {
      toast.error("Введите ваше имя");
      return;
    }

    localStorage.setItem("userName", userName);
    setJoined(true);
  };

  const handleLeave = () => {
    setJoined(false);
    navigate("/");
  };

  if (!roomId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <Icon name="AlertCircle" className="text-destructive mx-auto mb-4" size={48} />
          <h1 className="text-2xl font-sentient mb-2">Комната не найдена</h1>
          <p className="font-mono text-sm text-foreground/60 mb-6">
            Неверная ссылка или комната была удалена
          </p>
          <Button onClick={() => navigate("/")}>На главную</Button>
        </div>
      </div>
    );
  }

  if (!joined) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="max-w-md w-full bg-secondary/30 border border-border rounded-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Video" className="text-primary" size={32} />
            </div>
            <h1 className="text-2xl font-sentient mb-2">
              Присоединиться к конференции
            </h1>
            <p className="font-mono text-sm text-foreground/60">
              Комната: <span className="text-primary">{roomId}</span>
            </p>
            <p className="font-mono text-xs text-foreground/60 mt-1">
              Роль: {role === "host" ? "Организатор" : "Участник"}
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <Label className="font-mono text-xs mb-2">Ваше имя</Label>
              <Input
                placeholder="Иван Иванов"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleJoin()}
              />
            </div>

            <div className="bg-background/50 border border-border rounded-lg p-4">
              <h3 className="font-mono text-xs font-medium mb-3 uppercase text-foreground/80">
                Что вас ждёт
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 font-mono text-xs text-foreground/60">
                  <Icon
                    name="Check"
                    className="text-primary mt-0.5 flex-shrink-0"
                    size={14}
                  />
                  <span>HD видео и аудио</span>
                </li>
                <li className="flex items-start gap-2 font-mono text-xs text-foreground/60">
                  <Icon
                    name="Check"
                    className="text-primary mt-0.5 flex-shrink-0"
                    size={14}
                  />
                  <span>Демонстрация экрана</span>
                </li>
                <li className="flex items-start gap-2 font-mono text-xs text-foreground/60">
                  <Icon
                    name="Check"
                    className="text-primary mt-0.5 flex-shrink-0"
                    size={14}
                  />
                  <span>Автоматическая запись</span>
                </li>
                <li className="flex items-start gap-2 font-mono text-xs text-foreground/60">
                  <Icon
                    name="Check"
                    className="text-primary mt-0.5 flex-shrink-0"
                    size={14}
                  />
                  <span>Чат и реакции</span>
                </li>
              </ul>
            </div>
          </div>

          <Button className="w-full" size="lg" onClick={handleJoin}>
            <Icon name="Video" size={16} className="mr-2" />
            Войти в комнату
          </Button>

          <Button
            className="w-full mt-3"
            variant="outline"
            onClick={() => navigate("/")}
          >
            Отмена
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-background">
      <div className="flex-1 p-4">
        <VideoConferenceRoom
          roomName={roomId}
          displayName={userName}
          design={design}
          onClose={handleLeave}
        />
      </div>

      <div className="border-t border-border bg-secondary/30 p-4">
        <div className="container flex items-center justify-between">
          <div>
            <p className="font-mono text-xs text-foreground/60">
              Комната: <span className="text-primary">{roomId}</span>
            </p>
            <p className="font-mono text-xs text-foreground/60">
              Участник: <span className="text-foreground">{userName}</span>
            </p>
          </div>
          <Button variant="destructive" onClick={handleLeave}>
            <Icon name="PhoneOff" size={16} className="mr-2" />
            Покинуть
          </Button>
        </div>
      </div>
    </div>
  );
}
