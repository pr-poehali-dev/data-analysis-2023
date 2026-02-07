import { useState } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Icon from "./ui/icon";
import { useNavigate } from "react-router-dom";

export function QuickStartDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleJoinDemo = () => {
    if (!userName.trim()) {
      return;
    }

    const demoRoomId = `demo-${Date.now()}`;
    localStorage.setItem("userName", userName);
    navigate(`/conference/${demoRoomId}?role=host&design=minimal`);
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-6 left-6 z-40">
        <Button
          size="lg"
          className="shadow-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0"
          onClick={() => setIsOpen(true)}
        >
          <Icon name="Home" size={18} className="mr-2" />
          Зайти в гости
        </Button>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200">
          <DialogHeader>
            <DialogTitle className="font-sentient text-2xl text-amber-900 flex items-center gap-2">
              <Icon name="Coffee" className="text-amber-600" size={28} />
              Заходите на чай!
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="bg-white/60 backdrop-blur-sm border border-amber-200/50 rounded-xl p-4">
              <p className="font-mono text-xs text-amber-800 leading-relaxed">
                Устраивайтесь поудобнее! Создайте уютную комнату прямо сейчас — 
                без регистрации. Как дома, только онлайн ☕
              </p>
            </div>

            <div>
              <Label className="font-mono text-xs mb-2 text-amber-800 flex items-center gap-2">
                <Icon name="User" size={12} className="text-amber-600" />
                Как вас представить?
              </Label>
              <Input
                placeholder="Ваше имя..."
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleJoinDemo()}
                className="border-amber-300 focus:border-amber-500 bg-white shadow-sm text-amber-900 placeholder:text-amber-400 font-medium text-base px-4 py-3"
              />
            </div>

            <div className="bg-amber-50/50 border border-amber-200/50 rounded-xl p-4">
              <h4 className="font-mono text-xs font-medium mb-3 uppercase text-amber-800 flex items-center gap-2">
                <Icon name="Sparkles" size={14} className="text-amber-600" />
                Что внутри:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 font-mono text-xs text-amber-700/80">
                  <Icon name="Heart" className="text-amber-500" size={14} />
                  Тёплая домашняя атмосфера
                </li>
                <li className="flex items-center gap-2 font-mono text-xs text-amber-700/80">
                  <Icon name="Video" className="text-amber-500" size={14} />
                  Видео и аудио как вживую
                </li>
                <li className="flex items-center gap-2 font-mono text-xs text-amber-700/80">
                  <Icon name="Monitor" className="text-amber-500" size={14} />
                  Можно показать экран
                </li>
                <li className="flex items-center gap-2 font-mono text-xs text-amber-700/80">
                  <Icon name="MessageCircle" className="text-amber-500" size={14} />
                  Душевный чат
                </li>
              </ul>
            </div>

            <Button
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md"
              size="lg"
              onClick={handleJoinDemo}
              disabled={!userName.trim()}
            >
              <Icon name="Home" size={16} className="mr-2" />
              Войти в уютную комнату
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}