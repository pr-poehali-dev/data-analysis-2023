import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export function RoomsSection() {
  const navigate = useNavigate();
  const rooms = [
    {
      id: 1,
      name: "Минималистичный офис",
      description: "Чистый и профессиональный дизайн для деловых встреч",
      capacity: "До 50 участников",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    },
    {
      id: 2,
      name: "Творческая студия",
      description: "Яркое пространство для креативных сессий и брейнштормов",
      capacity: "До 30 участников",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    },
    {
      id: 3,
      name: "Переговорная премиум",
      description: "Элитный дизайн для переговоров высокого уровня",
      capacity: "До 20 участников",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    },
  ];

  return (
    <section id="rooms" className="py-20 md:py-32 container">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-sentient mb-4">
          Доступные <i className="font-light">комнаты</i>
        </h2>
        <p className="font-mono text-sm text-foreground/60 max-w-2xl mx-auto">
          Выберите идеальное виртуальное пространство для ваших видеоконференций
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="group relative overflow-hidden bg-secondary/50 border border-border rounded-lg transition-all duration-300 hover:border-primary/50"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-sentient mb-2">{room.name}</h3>
              <p className="font-mono text-sm text-foreground/60 mb-4">
                {room.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-primary">
                  {room.capacity}
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => navigate("/book")}
                >
                  Забронировать
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}