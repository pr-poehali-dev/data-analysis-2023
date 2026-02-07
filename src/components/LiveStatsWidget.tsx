import { useEffect, useState } from "react";
import Icon from "./ui/icon";

export function LiveStatsWidget() {
  const [stats, setStats] = useState({
    activeRooms: 0,
    totalParticipants: 0,
    recordingNow: 0,
  });

  useEffect(() => {
    // Симуляция обновления статистики в реальном времени
    const interval = setInterval(() => {
      setStats({
        activeRooms: Math.floor(Math.random() * 15) + 5, // 5-20
        totalParticipants: Math.floor(Math.random() * 200) + 100, // 100-300
        recordingNow: Math.floor(Math.random() * 10) + 3, // 3-13
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 bg-background/95 backdrop-blur-sm border border-primary/30 rounded-lg p-4 shadow-lg max-w-xs">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="font-mono text-xs text-foreground/80 uppercase">
          Сейчас на платформе
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Video" size={14} className="text-primary" />
            <span className="font-mono text-xs text-foreground/60">
              Активных комнат
            </span>
          </div>
          <span className="font-mono text-sm font-bold text-primary">
            {stats.activeRooms}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Users" size={14} className="text-primary" />
            <span className="font-mono text-xs text-foreground/60">
              Участников
            </span>
          </div>
          <span className="font-mono text-sm font-bold text-primary">
            {stats.totalParticipants}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Circle" size={14} className="text-red-500" />
            <span className="font-mono text-xs text-foreground/60">
              Идёт запись
            </span>
          </div>
          <span className="font-mono text-sm font-bold text-primary">
            {stats.recordingNow}
          </span>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-border">
        <p className="font-mono text-xs text-foreground/40 text-center">
          Обновляется каждые 3 сек
        </p>
      </div>
    </div>
  );
}
