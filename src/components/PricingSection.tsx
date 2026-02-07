import { Button } from "./ui/button";
import Icon from "./ui/icon";

export function PricingSection() {
  const plans = [
    {
      name: "Старт",
      price: "2 990",
      period: "час",
      description: "Для разовых встреч и небольших команд",
      features: [
        "До 20 участников",
        "Базовые дизайны (3 на выбор)",
        "HD качество видео",
        "Запись конференции",
        "Техподдержка в чате",
      ],
      highlighted: false,
    },
    {
      name: "Бизнес",
      price: "9 990",
      period: "мес",
      description: "Для регулярных видеоконференций компаний",
      features: [
        "До 50 участников",
        "Все 10 дизайнов",
        "Full HD качество",
        "Запись + облачное хранение",
        "Приоритетная поддержка 24/7",
        "Брендирование комнаты",
        "До 50 часов в месяц",
      ],
      highlighted: true,
    },
    {
      name: "Корпоративный",
      price: "По запросу",
      period: "",
      description: "Для крупного бизнеса с особыми требованиями",
      features: [
        "До 100 участников",
        "Кастомные дизайны",
        "4K качество видео",
        "Безлимитное хранилище",
        "Персональный менеджер",
        "Интеграция с вашими системами",
        "Безлимитные часы",
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 container">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-sentient mb-4">
          Прозрачные <i className="font-light">тарифы</i>
        </h2>
        <p className="font-mono text-sm text-foreground/60 max-w-2xl mx-auto">
          Выберите план, который идеально подходит вашему бизнесу
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-lg p-8 border transition-all duration-300 ${
              plan.highlighted
                ? "border-primary bg-primary/5 scale-105"
                : "border-border bg-secondary/30 hover:border-primary/50"
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-background font-mono text-xs rounded-full">
                ПОПУЛЯРНЫЙ
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-2xl font-sentient mb-2">{plan.name}</h3>
              <p className="font-mono text-xs text-foreground/60">
                {plan.description}
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-sentient">{plan.price}</span>
                {plan.period && (
                  <span className="font-mono text-sm text-foreground/60">
                    ₽ / {plan.period}
                  </span>
                )}
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 font-mono text-sm"
                >
                  <Icon
                    name="Check"
                    className="text-primary mt-0.5 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-foreground/80">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className="w-full"
              variant={plan.highlighted ? "default" : "outline"}
            >
              {plan.name === "Корпоративный"
                ? "Связаться с нами"
                : "Выбрать план"}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
