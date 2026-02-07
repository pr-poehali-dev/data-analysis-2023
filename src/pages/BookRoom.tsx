import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { videoConferenceService } from "@/services/videoConferenceService";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BookRoom() {
  const [selectedDesign, setSelectedDesign] = useState("");
  const [conferenceData, setConferenceData] = useState({
    name: "",
    company: "",
    date: "",
    time: "",
    participants: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setConferenceData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDesign) {
      toast.error("Выберите дизайн комнаты");
      return;
    }

    setIsLoading(true);

    try {
      const scheduledDate = new Date(`${conferenceData.date}T${conferenceData.time}`);
      
      const credentials = await videoConferenceService.createRoom({
        name: conferenceData.name,
        design: selectedDesign,
        maxParticipants: parseInt(conferenceData.participants) || 20,
        scheduledDate,
        duration: 60, // 1 час по умолчанию
        hostEmail: conferenceData.email,
        companyName: conferenceData.company,
      });

      toast.success("Комната успешно забронирована!");
      
      // Показываем ссылки
      toast.info(
        `Ссылка для организатора: ${credentials.hostUrl}`,
        { duration: 10000 }
      );
      
      // Очищаем форму
      setConferenceData({
        name: "",
        company: "",
        date: "",
        time: "",
        participants: "",
        email: "",
      });
      setSelectedDesign("");
    } catch (error) {
      toast.error("Ошибка при создании комнаты. Попробуйте позже.");
    } finally {
      setIsLoading(false);
    }
  };

  const designs = [
    { id: "minimal", name: "Минималистичный" },
    { id: "corporate", name: "Корпоративный" },
    { id: "creative", name: "Креативный" },
    { id: "nature", name: "Природный" },
    { id: "tech", name: "Технологичный" },
    { id: "cozy", name: "Уютный" },
    { id: "modern", name: "Современный" },
    { id: "classic", name: "Классический" },
    { id: "futuristic", name: "Футуристичный" },
    { id: "elegant", name: "Элегантный" },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-32 pb-20">
        <div className="container max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-sentient mb-4">
              Забронировать <i className="font-light">комнату</i>
            </h1>
            <p className="font-mono text-sm text-foreground/60">
              Заполните форму, и мы подготовим виртуальное пространство для
              вашей конференции
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-secondary/30 border border-border rounded-lg p-6">
                <h2 className="text-2xl font-sentient mb-6">
                  Данные конференции
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label className="font-mono text-xs mb-2">
                      Название конференции
                    </Label>
                    <Input 
                      placeholder="Еженедельная планерка" 
                      value={conferenceData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label className="font-mono text-xs mb-2">
                      Компания/Организация
                    </Label>
                    <Input 
                      placeholder="ООО «Компания»" 
                      value={conferenceData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="font-mono text-xs mb-2">Дата</Label>
                      <Input 
                        type="date" 
                        value={conferenceData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label className="font-mono text-xs mb-2">Время</Label>
                      <Input 
                        type="time" 
                        value={conferenceData.time}
                        onChange={(e) => handleInputChange("time", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="font-mono text-xs mb-2">
                      Количество участников
                    </Label>
                    <Input 
                      type="number" 
                      placeholder="20" 
                      min="1" 
                      max="100"
                      value={conferenceData.participants}
                      onChange={(e) => handleInputChange("participants", e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label className="font-mono text-xs mb-2">
                      Дизайн комнаты
                    </Label>
                    <Select
                      value={selectedDesign}
                      onValueChange={setSelectedDesign}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите дизайн" />
                      </SelectTrigger>
                      <SelectContent>
                        {designs.map((design) => (
                          <SelectItem key={design.id} value={design.id}>
                            {design.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="font-mono text-xs mb-2">
                      Email для уведомлений
                    </Label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com"
                      value={conferenceData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? "Загрузка..." : "Забронировать комнату"}
                  </Button>
                </form>
              </div>
            </div>

            <div>
              <div className="bg-secondary/30 border border-border rounded-lg p-6 sticky top-32">
                <h3 className="text-xl font-sentient mb-6">
                  Что вы получите
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Icon
                      name="CheckCircle2"
                      className="text-primary mt-0.5 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <p className="font-mono text-sm font-medium mb-1">
                        Персональная ссылка
                      </p>
                      <p className="font-mono text-xs text-foreground/60">
                        Уникальная ссылка для доступа к вашей комнате
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon
                      name="CheckCircle2"
                      className="text-primary mt-0.5 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <p className="font-mono text-sm font-medium mb-1">
                        HD качество
                      </p>
                      <p className="font-mono text-xs text-foreground/60">
                        Видео в высоком разрешении для всех участников
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon
                      name="CheckCircle2"
                      className="text-primary mt-0.5 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <p className="font-mono text-sm font-medium mb-1">
                        Запись конференции
                      </p>
                      <p className="font-mono text-xs text-foreground/60">
                        Автоматическая запись с облачным хранением
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon
                      name="CheckCircle2"
                      className="text-primary mt-0.5 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <p className="font-mono text-sm font-medium mb-1">
                        Техподдержка 24/7
                      </p>
                      <p className="font-mono text-xs text-foreground/60">
                        Помощь специалистов в любое время
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon
                      name="CheckCircle2"
                      className="text-primary mt-0.5 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <p className="font-mono text-sm font-medium mb-1">
                        Безопасность данных
                      </p>
                      <p className="font-mono text-xs text-foreground/60">
                        Сквозное шифрование всех коммуникаций
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs text-foreground/60">
                      Стоимость (1 час):
                    </span>
                    <span className="text-2xl font-sentient text-primary">
                      2 990 ₽
                    </span>
                  </div>
                  <p className="font-mono text-xs text-foreground/60">
                    * Цена может меняться в зависимости от выбранного тарифа
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}