import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Icon from "@/components/ui/icon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BookRoom() {
  const [selectedDesign, setSelectedDesign] = useState("");

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

                <div className="space-y-4">
                  <div>
                    <Label className="font-mono text-xs mb-2">
                      Название конференции
                    </Label>
                    <Input placeholder="Еженедельная планерка" />
                  </div>

                  <div>
                    <Label className="font-mono text-xs mb-2">
                      Компания/Организация
                    </Label>
                    <Input placeholder="ООО «Компания»" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="font-mono text-xs mb-2">Дата</Label>
                      <Input type="date" />
                    </div>
                    <div>
                      <Label className="font-mono text-xs mb-2">Время</Label>
                      <Input type="time" />
                    </div>
                  </div>

                  <div>
                    <Label className="font-mono text-xs mb-2">
                      Количество участников
                    </Label>
                    <Input type="number" placeholder="20" min="1" max="100" />
                  </div>

                  <div>
                    <Label className="font-mono text-xs mb-2">
                      Дизайн комнаты
                    </Label>
                    <Select
                      value={selectedDesign}
                      onValueChange={setSelectedDesign}
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
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Забронировать комнату
              </Button>
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
