import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Выберите дизайн",
      description:
        "Из 10 уникальных стилей выберите тот, который лучше всего отражает ваш бренд — от минимализма до премиум-класса",
      icon: "Palette",
    },
    {
      number: "02",
      title: "Забронируйте комнату",
      description:
        "Укажите дату, время и количество участников. Мы мгновенно создадим виртуальное пространство для вашей конференции",
      icon: "Calendar",
    },
    {
      number: "03",
      title: "Получите ссылки",
      description:
        "Получите две уникальные ссылки: для организатора с расширенными правами и для участников встречи",
      icon: "Link",
    },
    {
      number: "04",
      title: "Проведите встречу",
      description:
        "Запустите конференцию в HD/4K качестве с автоматической записью и облачным хранением",
      icon: "Video",
    },
  ];

  const features = [
    {
      title: "Мгновенное создание",
      description: "Комната готова за 30 секунд после бронирования",
      icon: "Zap",
    },
    {
      title: "Без установки ПО",
      description: "Работает в браузере на любом устройстве",
      icon: "Globe",
    },
    {
      title: "Автозапись",
      description: "Все конференции записываются автоматически",
      icon: "Circle",
    },
    {
      title: "Безопасность",
      description: "Сквозное шифрование всех данных",
      icon: "Shield",
    },
    {
      title: "Облачное хранилище",
      description: "30 дней бесплатного хранения записей",
      icon: "Cloud",
    },
    {
      title: "API интеграция",
      description: "Встраивайте в свои системы через REST API",
      icon: "Code",
    },
  ];

  const integrationExample = `// Пример интеграции через API
import { videoConferenceService } from '@/services/videoConferenceService';

// Создание комнаты
const room = await videoConferenceService.createRoom({
  name: "Планерка команды",
  design: "minimal",
  maxParticipants: 20,
  scheduledDate: new Date("2026-02-10T10:00:00"),
  duration: 60,
  hostEmail: "admin@company.ru"
});

// Получение ссылок
console.log("Для организатора:", room.hostUrl);
console.log("Для участников:", room.participantUrl);

// Получение списка активных комнат
const activeRooms = await videoConferenceService.getActiveRooms();

// Завершение конференции
await videoConferenceService.endConference(room.roomId);`;

  return (
    <>
      <Header />
      <div className="min-h-screen pt-32 pb-20">
        <div className="container max-w-6xl">
          {/* Hero */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-sentient mb-6">
              Как это <i className="font-light">работает</i>
            </h1>
            <p className="font-mono text-base text-foreground/60 max-w-2xl mx-auto">
              Простой процесс от выбора дизайна до проведения конференции
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 gap-8 mb-32">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative bg-secondary/30 border border-border rounded-lg p-8 hover:border-primary/50 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={step.icon} className="text-primary" size={28} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-mono text-xs text-primary mb-2">
                      ШАГ {step.number}
                    </div>
                    <h3 className="text-2xl font-sentient mb-3">{step.title}</h3>
                    <p className="font-mono text-sm text-foreground/60">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2">
                    <Icon
                      name="ArrowRight"
                      className="text-primary/30"
                      size={24}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="mb-32">
            <h2 className="text-3xl md:text-4xl font-sentient text-center mb-12">
              Возможности <i className="font-light">платформы</i>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 bg-secondary/20 border border-border rounded-lg hover:bg-secondary/40 transition-all"
                >
                  <Icon
                    name={feature.icon}
                    className="text-primary mb-4"
                    size={32}
                  />
                  <h3 className="text-lg font-sentient mb-2">{feature.title}</h3>
                  <p className="font-mono text-sm text-foreground/60">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* API Integration */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-sentient text-center mb-6">
              API <i className="font-light">интеграция</i>
            </h2>
            <p className="font-mono text-sm text-foreground/60 text-center mb-12 max-w-2xl mx-auto">
              Встройте платформу в свои системы с помощью простого REST API
            </p>
            <div className="bg-black border border-border rounded-lg p-6 overflow-x-auto">
              <pre className="font-mono text-xs text-green-400">
                <code>{integrationExample}</code>
              </pre>
            </div>
            <div className="flex justify-center mt-6 gap-4">
              <Button variant="outline">
                <Icon name="FileText" size={16} className="mr-2" />
                Документация API
              </Button>
              <Button>
                <Icon name="Code" size={16} className="mr-2" />
                Примеры кода
              </Button>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-lg p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-sentient mb-4">
              Готовы начать?
            </h2>
            <p className="font-mono text-sm text-foreground/60 mb-8 max-w-xl mx-auto">
              Создайте первую комнату прямо сейчас и оцените преимущества
              премиальных видеоконференций
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => (window.location.href = "/book")}>
                Забронировать комнату
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => (window.location.href = "#contact")}
              >
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
