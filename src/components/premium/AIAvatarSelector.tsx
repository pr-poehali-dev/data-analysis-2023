import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface AIAvatar {
  id: string;
  name: string;
  preview: string;
  description: string;
  premium: boolean;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (avatarId: string) => void;
}

export function AIAvatarSelector({ isOpen, onClose, onSelect }: Props) {
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);

  const avatars: AIAvatar[] = [
    {
      id: "professional",
      name: "Профессионал",
      preview: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      description: "Деловой стиль для корпоративных встреч",
      premium: false,
    },
    {
      id: "casual",
      name: "Casual Style",
      preview: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      description: "Непринуждённый образ для дружеских встреч",
      premium: false,
    },
    {
      id: "anime",
      name: "Anime Avatar",
      preview: "https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b?w=400&q=80",
      description: "Аниме-стиль для творческих встреч",
      premium: true,
    },
    {
      id: "hologram",
      name: "Голограмма",
      preview: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&q=80",
      description: "Футуристичный голографический эффект",
      premium: true,
    },
    {
      id: "vintage",
      name: "Винтаж",
      preview: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
      description: "Ретро-эффект как из старого кино",
      premium: true,
    },
    {
      id: "cyborg",
      name: "Киборг",
      preview: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=400&q=80",
      description: "Кибер-панк стиль с неоновыми акцентами",
      premium: true,
    },
  ];

  const handleSelect = (avatarId: string) => {
    setSelectedAvatar(avatarId);
    onSelect(avatarId);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-purple-50 via-pink-50 to-amber-50 border-purple-200">
        <DialogHeader>
          <DialogTitle className="font-sentient text-3xl text-purple-900 flex items-center gap-3">
            <Icon name="Sparkles" className="text-purple-600" size={32} />
            AI-Аватары нового поколения
          </DialogTitle>
          <p className="font-mono text-sm text-purple-700/80 mt-2">
            Появляйтесь на встречах в любом образе — от делового до футуристичного
          </p>
        </DialogHeader>

        <div className="mt-6">
          {/* Уникальная фишка */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl p-6 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
            <div className="relative z-10">
              <Icon name="Zap" className="text-yellow-300 mb-3" size={32} />
              <h3 className="text-xl font-sentient mb-2">
                WOW! Технология нейронных сетей
              </h3>
              <p className="font-mono text-sm text-white/90">
                Ваши мимика и движения в реальном времени переносятся на аватара. 
                Используем MediaPipe и TensorFlow.js для распознавания лица.
              </p>
            </div>
          </div>

          {/* Сетка аватаров */}
          <div className="grid md:grid-cols-3 gap-6">
            {avatars.map((avatar) => (
              <div
                key={avatar.id}
                className={`group relative bg-white/80 backdrop-blur-sm border-2 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${
                  selectedAvatar === avatar.id
                    ? "border-purple-500 shadow-xl scale-105"
                    : "border-purple-200 hover:border-purple-400 hover:shadow-lg"
                }`}
                onClick={() => !avatar.premium && handleSelect(avatar.id)}
              >
                {/* Premium Badge */}
                {avatar.premium && (
                  <div className="absolute top-3 right-3 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <Icon name="Crown" size={14} />
                    <span className="font-mono text-xs font-bold">PRO</span>
                  </div>
                )}

                {/* Превью аватара */}
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={avatar.preview}
                    alt={avatar.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/20 to-transparent" />
                  
                  {/* Голографический эффект при наведении */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                </div>

                <div className="p-4">
                  <h4 className="font-sentient text-lg text-purple-900 mb-1">
                    {avatar.name}
                  </h4>
                  <p className="font-mono text-xs text-purple-700/70">
                    {avatar.description}
                  </p>

                  {avatar.premium ? (
                    <Button
                      className="w-full mt-3 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white border-0"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        // TODO: Открыть модалку оплаты
                      }}
                    >
                      <Icon name="Lock" size={14} className="mr-2" />
                      Разблокировать
                    </Button>
                  ) : (
                    <Button
                      className="w-full mt-3 bg-purple-500 hover:bg-purple-600 text-white"
                      size="sm"
                    >
                      <Icon name="Check" size={14} className="mr-2" />
                      Выбрать
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Голосовые модификаторы */}
          <div className="mt-10 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="Mic" className="text-blue-600" size={28} />
              <div>
                <h3 className="font-sentient text-xl text-blue-900">
                  Голосовые эффекты
                </h3>
                <p className="font-mono text-xs text-blue-700/80">
                  Измените голос в реальном времени
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-3">
              {[
                { name: "Оригинал", icon: "User" },
                { name: "Радио", icon: "Radio" },
                { name: "Робот", icon: "Bot" },
                { name: "Эхо", icon: "Volume2" },
              ].map((effect) => (
                <Button
                  key={effect.name}
                  variant="outline"
                  className="border-blue-300 hover:bg-blue-100 hover:border-blue-400"
                >
                  <Icon name={effect.icon} size={16} className="mr-2" />
                  {effect.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
