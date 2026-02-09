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

  const getRoomPreviewImage = (design: string) => {
    switch (design) {
      case "minimal":
        return "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&h=1080&q=95&fit=crop&auto=format";
      case "corporate":
        return "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&q=95&fit=crop&auto=format";
      case "creative":
        return "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&q=95&fit=crop&auto=format";
      default:
        return "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&h=1080&q=95&fit=crop&auto=format";
    }
  };

  const getRoomDesignName = (design: string) => {
    switch (design) {
      case "minimal":
        return "Минималистичная гостиная";
      case "corporate":
        return "Премиум офис";
      case "creative":
        return "Творческая студия";
      default:
        return "Уютная комната";
    }
  };

  if (!joined) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-4">
        {/* Уютный декоративный фон */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a574' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        <div className="max-w-2xl w-full bg-white/80 backdrop-blur-sm border border-amber-200 rounded-2xl overflow-hidden shadow-xl relative z-10">
          {/* Превью дизайна комнаты */}
          <div className="relative h-64 overflow-hidden">
            <img 
              src={getRoomPreviewImage(design)} 
              alt={getRoomDesignName(design)}
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
              style={{ imageRendering: 'crisp-edges' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-amber-900/30 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Sparkles" className="text-amber-200" size={20} />
                <span className="font-mono text-xs text-amber-200 uppercase">Дизайн комнаты</span>
              </div>
              <h2 className="text-2xl font-sentient text-white mb-1">
                {getRoomDesignName(design)}
              </h2>
              <p className="font-mono text-xs text-amber-100">
                Качество видео: Full HD 1080p • 30fps
              </p>
            </div>
          </div>

          <div className="p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-sentient mb-2 text-amber-900">
              Добро пожаловать домой
            </h1>
            <p className="font-mono text-sm text-amber-700/80">
              Уютная комната: <span className="text-amber-900 font-medium">{roomId}</span>
            </p>
            <p className="font-mono text-xs text-amber-600/70 mt-1">
              {role === "host" ? "🏡 Хозяин встречи" : "☕ Гость"}
            </p>
            
            {/* Пояснение про виртуальный фон */}
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="font-mono text-xs text-blue-800 mb-1">
                💡 <strong>Как увидеть дизайн комнаты:</strong>
              </p>
              <p className="font-mono text-xs text-blue-700">
                После входа откройте меню Jitsi → "Виртуальные фоны" → 
                выберите загруженный фон. Ваши собеседники увидят вас на фоне уютной комнаты!
              </p>
              <a 
                href="/video-quality" 
                target="_blank"
                className="inline-flex items-center gap-1 font-mono text-xs text-blue-600 hover:text-blue-800 mt-2 underline"
              >
                Подробнее о качестве <Icon name="ExternalLink" size={12} />
              </a>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <Label className="font-mono text-xs mb-2 text-amber-800 flex items-center gap-2">
                <Icon name="User" size={12} className="text-amber-600" />
                Как к вам обращаться?
              </Label>
              <Input
                placeholder="Анна, Иван, Мария..."
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleJoin()}
                className="border-amber-300 focus:border-amber-500 bg-white shadow-sm text-amber-900 placeholder:text-amber-400 font-medium text-base px-4 py-3"
              />
            </div>

            <div className="bg-amber-50/50 border border-amber-200/50 rounded-xl p-5 shadow-sm">
              <h3 className="font-mono text-xs font-medium mb-4 uppercase text-amber-800 flex items-center gap-2">
                <Icon name="Coffee" size={14} className="text-amber-600" />
                Домашний комфорт
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 font-mono text-xs text-amber-700/80">
                  <Icon
                    name="Heart"
                    className="text-amber-500 mt-0.5 flex-shrink-0"
                    size={14}
                  />
                  <span>Тёплая атмосфера встречи</span>
                </li>
                <li className="flex items-start gap-2 font-mono text-xs text-amber-700/80">
                  <Icon
                    name="Volume2"
                    className="text-amber-500 mt-0.5 flex-shrink-0"
                    size={14}
                  />
                  <span>Качественный звук без шума</span>
                </li>
                <li className="flex items-start gap-2 font-mono text-xs text-amber-700/80">
                  <Icon
                    name="Video"
                    className="text-amber-500 mt-0.5 flex-shrink-0"
                    size={14}
                  />
                  <span>Камера как из гостиной</span>
                </li>
                <li className="flex items-start gap-2 font-mono text-xs text-amber-700/80">
                  <Icon
                    name="MessageCircle"
                    className="text-amber-500 mt-0.5 flex-shrink-0"
                    size={14}
                  />
                  <span>Душевные разговоры</span>
                </li>
              </ul>
            </div>
          </div>

          <Button 
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md" 
            size="lg" 
            onClick={handleJoin}
          >
            <Icon name="Home" size={16} className="mr-2" />
            Зайти в гости
          </Button>

          <Button
            className="w-full mt-3 border-amber-300 text-amber-700 hover:bg-amber-50"
            variant="outline"
            onClick={() => navigate("/")}
          >
            Может, потом
          </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="flex-1 p-4">
        <VideoConferenceRoom
          roomName={roomId}
          displayName={userName}
          design={design}
          onClose={handleLeave}
        />
      </div>

      <div className="border-t border-amber-200/50 bg-white/60 backdrop-blur-sm p-4 shadow-lg">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
              <Icon name="Home" className="text-amber-600" size={20} />
            </div>
            <div>
              <p className="font-mono text-xs text-amber-700/80">
                🏡 Комната: <span className="text-amber-900 font-medium">{roomId}</span>
              </p>
              <p className="font-mono text-xs text-amber-600/70">
                ☕ {userName}
              </p>
            </div>
          </div>
          <Button 
            variant="destructive" 
            onClick={handleLeave}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
          >
            <Icon name="LogOut" size={16} className="mr-2" />
            Попрощаться
          </Button>
        </div>
      </div>
    </div>
  );
}