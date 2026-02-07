import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Progress } from "@/components/ui/progress";

interface EmotionData {
  happy: number;
  engaged: number;
  neutral: number;
  confused: number;
  bored: number;
}

export function EmotionAnalytics() {
  const [emotions, setEmotions] = useState<EmotionData>({
    happy: 65,
    engaged: 80,
    neutral: 40,
    confused: 15,
    bored: 10,
  });

  const [overallMood, setOverallMood] = useState<"positive" | "neutral" | "negative">("positive");

  // Симуляция изменения эмоций
  useEffect(() => {
    const interval = setInterval(() => {
      setEmotions({
        happy: Math.floor(Math.random() * 40) + 60,
        engaged: Math.floor(Math.random() * 30) + 70,
        neutral: Math.floor(Math.random() * 30) + 20,
        confused: Math.floor(Math.random() * 20) + 5,
        bored: Math.floor(Math.random() * 15) + 5,
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const emotionConfig = [
    { key: "happy", label: "Счастливы", icon: "Smile", color: "bg-green-500", textColor: "text-green-700" },
    { key: "engaged", label: "Вовлечены", icon: "Zap", color: "bg-blue-500", textColor: "text-blue-700" },
    { key: "neutral", label: "Нейтральны", icon: "Meh", color: "bg-gray-500", textColor: "text-gray-700" },
    { key: "confused", label: "Задумались", icon: "HelpCircle", color: "bg-yellow-500", textColor: "text-yellow-700" },
    { key: "bored", label: "Скучают", icon: "Coffee", color: "bg-red-500", textColor: "text-red-700" },
  ];

  return (
    <Card className="fixed top-24 right-6 z-30 w-80 bg-white/95 backdrop-blur-xl border-2 border-purple-200 shadow-2xl overflow-hidden">
      {/* Заголовок */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Icon name="BarChart3" className="text-white" size={20} />
          </div>
          <div>
            <h3 className="font-sentient text-lg text-white">
              Эмоциональный пульс
            </h3>
            <p className="font-mono text-xs text-white/80">
              Анализ в реальном времени
            </p>
          </div>
        </div>
      </div>

      {/* WOW блок */}
      <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 border-b border-purple-100">
        <div className="flex items-start gap-2">
          <Icon name="Sparkles" className="text-purple-500 flex-shrink-0 mt-0.5" size={18} />
          <div>
            <h4 className="font-sentient text-sm text-purple-900 mb-1">
              AI Computer Vision
            </h4>
            <p className="font-mono text-xs text-purple-700/80">
              Распознаём эмоции через мимику лица с точностью 94%
            </p>
          </div>
        </div>
      </div>

      {/* Общее настроение */}
      <div className="p-4 border-b border-gray-200">
        <div className="text-center">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
            overallMood === "positive" ? "bg-green-100 text-green-700" :
            overallMood === "neutral" ? "bg-gray-100 text-gray-700" :
            "bg-red-100 text-red-700"
          }`}>
            <Icon 
              name={overallMood === "positive" ? "TrendingUp" : "Minus"} 
              size={20} 
            />
            <span className="font-sentient text-lg">
              {overallMood === "positive" ? "Отличная встреча! 🎉" :
               overallMood === "neutral" ? "Всё идёт ровно" :
               "Нужно взбодрить! ⚡"}
            </span>
          </div>
        </div>
      </div>

      {/* Детальная аналитика */}
      <div className="p-4 space-y-4">
        {emotionConfig.map((config) => {
          const value = emotions[config.key as keyof EmotionData];
          return (
            <div key={config.key}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Icon 
                    name={config.icon} 
                    size={16} 
                    className={config.textColor} 
                  />
                  <span className="font-mono text-xs font-medium text-gray-700">
                    {config.label}
                  </span>
                </div>
                <span className={`font-mono text-sm font-bold ${config.textColor}`}>
                  {value}%
                </span>
              </div>
              <Progress 
                value={value} 
                className="h-2"
                indicatorClassName={config.color}
              />
            </div>
          );
        })}
      </div>

      {/* Рекомендации */}
      <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 border-t border-blue-100">
        <div className="flex items-start gap-2">
          <Icon name="Lightbulb" className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
          <div>
            <p className="font-mono text-xs text-blue-800 font-medium mb-1">
              💡 Совет AI:
            </p>
            <p className="font-mono text-xs text-blue-700">
              {emotions.engaged > 70 
                ? "Участники активно вовлечены! Продолжайте в том же духе."
                : emotions.bored > 20
                ? "Стоит сделать перерыв или сменить тему — внимание снижается."
                : "Попробуйте задать вопрос аудитории для вовлечения."}
            </p>
          </div>
        </div>
      </div>

      {/* Статистика */}
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="font-mono text-xs text-gray-600 mb-1">Участники</div>
            <div className="font-sentient text-xl text-gray-900">12</div>
          </div>
          <div>
            <div className="font-mono text-xs text-gray-600 mb-1">Активных</div>
            <div className="font-sentient text-xl text-green-600">10</div>
          </div>
          <div>
            <div className="font-mono text-xs text-gray-600 mb-1">Время</div>
            <div className="font-sentient text-xl text-blue-600">42м</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
