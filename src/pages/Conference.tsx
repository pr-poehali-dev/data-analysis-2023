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
        
        <div className="max-w-md w-full bg-white/80 backdrop-blur-sm border border-amber-200 rounded-2xl p-8 shadow-xl relative z-10">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
              <Icon name="Home" className="text-amber-600" size={36} />
            </div>
            <h1 className="text-2xl font-sentient mb-2 text-amber-900">
              Добро пожаловать домой
            </h1>
            <p className="font-mono text-sm text-amber-700/80">
              Уютная комната: <span className="text-amber-900 font-medium">{roomId}</span>
            </p>
            <p className="font-mono text-xs text-amber-600/70 mt-1">
              {role === "host" ? "🏡 Хозяин встречи" : "☕ Гость"}
            </p>
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
                className="border-amber-200 focus:border-amber-400 bg-white/50"
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