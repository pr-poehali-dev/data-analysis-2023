import Icon from "./ui/icon";

export function FeaturesSection() {
  const features = [
    {
      icon: "Video",
      title: "HD/4K качество",
      description: "Кристально чистое изображение для профессиональных встреч",
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Сквозное шифрование и защита конфиденциальных данных",
    },
    {
      icon: "Zap",
      title: "Мгновенный старт",
      description: "Запуск комнаты за 30 секунд без установки приложений",
    },
    {
      icon: "Users",
      title: "До 100 участников",
      description: "Масштабируемость для конференций любого размера",
    },
    {
      icon: "Palette",
      title: "10 дизайнов",
      description: "Подберите стиль комнаты под корпоративный бренд",
    },
    {
      icon: "HardDrive",
      title: "Облачное хранилище",
      description: "Автоматическая запись и хранение всех конференций",
    },
  ];

  return (
    <section className="py-20 md:py-32 container">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-sentient mb-4">
          Преимущества <i className="font-light">платформы</i>
        </h2>
        <p className="font-mono text-sm text-foreground/60 max-w-2xl mx-auto">
          Всё необходимое для эффективных видеоконференций в одном месте
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group p-6 rounded-lg border border-border bg-secondary/20 hover:bg-secondary/40 hover:border-primary/50 transition-all duration-300"
          >
            <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
              <Icon
                name={feature.icon}
                className="text-primary"
                size={24}
              />
            </div>
            <h3 className="text-xl font-sentient mb-2">{feature.title}</h3>
            <p className="font-mono text-sm text-foreground/60">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}