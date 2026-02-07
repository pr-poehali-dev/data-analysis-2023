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
          className="shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          <Icon name="Zap" size={18} className="mr-2" />
          Демо-комната
        </Button>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-sentient text-2xl">
              Быстрый запуск демо-комнаты
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
              <p className="font-mono text-xs text-foreground/80">
                Создайте тестовую комнату прямо сейчас — без регистрации и бронирования. 
                Попробуйте все возможности платформы!
              </p>
            </div>

            <div>
              <Label className="font-mono text-xs mb-2">Ваше имя</Label>
              <Input
                placeholder="Иван Иванов"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleJoinDemo()}
              />
            </div>

            <div className="bg-secondary/30 rounded-lg p-4">
              <h4 className="font-mono text-xs font-medium mb-3 uppercase">
                В демо-комнате:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 font-mono text-xs text-foreground/60">
                  <Icon name="Check" className="text-primary" size={14} />
                  HD видео и аудио связь
                </li>
                <li className="flex items-center gap-2 font-mono text-xs text-foreground/60">
                  <Icon name="Check" className="text-primary" size={14} />
                  Демонстрация экрана
                </li>
                <li className="flex items-center gap-2 font-mono text-xs text-foreground/60">
                  <Icon name="Check" className="text-primary" size={14} />
                  Чат и реакции
                </li>
                <li className="flex items-center gap-2 font-mono text-xs text-foreground/60">
                  <Icon name="Check" className="text-primary" size={14} />
                  Запись конференции
                </li>
              </ul>
            </div>

            <Button
              className="w-full"
              size="lg"
              onClick={handleJoinDemo}
              disabled={!userName.trim()}
            >
              <Icon name="Video" size={16} className="mr-2" />
              Запустить демо
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
