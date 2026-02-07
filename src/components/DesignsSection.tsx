export function DesignsSection() {
  const designs = [
    { id: 1, name: "Минималистичный", color: "bg-zinc-900" },
    { id: 2, name: "Корпоративный", color: "bg-blue-950" },
    { id: 3, name: "Креативный", color: "bg-purple-950" },
    { id: 4, name: "Природный", color: "bg-green-950" },
    { id: 5, name: "Технологичный", color: "bg-slate-900" },
    { id: 6, name: "Уютный", color: "bg-amber-950" },
    { id: 7, name: "Современный", color: "bg-gray-900" },
    { id: 8, name: "Классический", color: "bg-stone-900" },
    { id: 9, name: "Футуристичный", color: "bg-indigo-950" },
    { id: 10, name: "Элегантный", color: "bg-rose-950" },
  ];

  return (
    <section id="designs" className="py-20 md:py-32 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sentient mb-4">
            10 уникальных <i className="font-light">дизайнов</i>
          </h2>
          <p className="font-mono text-sm text-foreground/60 max-w-2xl mx-auto">
            От минимализма до премиум-стиля — подберите атмосферу под ваш бренд
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {designs.map((design) => (
            <div
              key={design.id}
              className="group relative aspect-square rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div className={`w-full h-full ${design.color}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-mono text-xs text-center text-foreground/80 group-hover:text-foreground">
                  {design.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
