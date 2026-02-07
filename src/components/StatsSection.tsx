export function StatsSection() {
  const stats = [
    { value: "100", label: "Одновременных комнат", suffix: "" },
    { value: "10", label: "Дизайнов интерьеров", suffix: "" },
    { value: "100", label: "Участников в комнате", suffix: "до" },
    { value: "99.9", label: "Uptime платформы", suffix: "%" },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mb-3">
                <span className="text-4xl md:text-5xl font-sentient text-primary">
                  {stat.suffix && stat.suffix !== "%" && (
                    <span className="text-2xl md:text-3xl mr-1">
                      {stat.suffix}{" "}
                    </span>
                  )}
                  {stat.value}
                  {stat.suffix === "%" && (
                    <span className="text-2xl md:text-3xl">{stat.suffix}</span>
                  )}
                </span>
              </div>
              <p className="font-mono text-xs text-foreground/60 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
