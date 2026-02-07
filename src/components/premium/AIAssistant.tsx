import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Card } from "@/components/ui/card";

interface Message {
  id: string;
  type: "summary" | "translation" | "suggestion" | "emotion";
  content: string;
  timestamp: Date;
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isListening, setIsListening] = useState(false);

  // Симуляция AI анализа
  useEffect(() => {
    if (isListening) {
      const interval = setInterval(() => {
        const mockMessages: Message[] = [
          {
            id: Date.now().toString(),
            type: "summary",
            content: "📝 Обсудили квартальные показатели. Принято решение увеличить бюджет на маркетинг.",
            timestamp: new Date(),
          },
        ];
        
        if (Math.random() > 0.7) {
          setMessages(prev => [...prev, mockMessages[0]]);
        }
      }, 10000);

      return () => clearInterval(interval);
    }
  }, [isListening]);

  return (
    <>
      {/* Кнопка вызова ассистента */}
      <Button
        className="fixed bottom-24 right-6 z-40 w-16 h-16 rounded-full shadow-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 border-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon name="Bot" size={28} className="text-white animate-pulse" />
      </Button>

      {/* Панель ассистента */}
      {isOpen && (
        <div className="fixed bottom-44 right-6 z-40 w-96 max-h-[600px] bg-white/95 backdrop-blur-xl border-2 border-purple-200 rounded-2xl shadow-2xl overflow-hidden">
          {/* Заголовок */}
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                  <Icon name="Bot" className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-sentient text-lg text-white">
                    AI Ассистент
                  </h3>
                  <p className="font-mono text-xs text-white/80">
                    {isListening ? "🎤 Слушаю..." : "Готов помочь"}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20"
                onClick={() => setIsOpen(false)}
              >
                <Icon name="X" size={16} />
              </Button>
            </div>
          </div>

          {/* WOW блок */}
          <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 border-b border-purple-100">
            <div className="flex items-start gap-2">
              <Icon name="Sparkles" className="text-purple-500 flex-shrink-0 mt-0.5" size={18} />
              <div>
                <h4 className="font-sentient text-sm text-purple-900 mb-1">
                  Нейросеть GPT-4 в реальном времени
                </h4>
                <p className="font-mono text-xs text-purple-700/80">
                  Распознаю речь → Анализирую контекст → Предлагаю решения
                </p>
              </div>
            </div>
          </div>

          {/* Возможности */}
          <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
            {/* Кнопки функций */}
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                className="border-blue-200 hover:bg-blue-50"
                size="sm"
                onClick={() => setIsListening(!isListening)}
              >
                <Icon name={isListening ? "MicOff" : "Mic"} size={14} className="mr-2" />
                {isListening ? "Стоп" : "Слушать"}
              </Button>
              <Button
                variant="outline"
                className="border-purple-200 hover:bg-purple-50"
                size="sm"
              >
                <Icon name="FileText" size={14} className="mr-2" />
                Конспект
              </Button>
              <Button
                variant="outline"
                className="border-pink-200 hover:bg-pink-50"
                size="sm"
              >
                <Icon name="Languages" size={14} className="mr-2" />
                Перевод
              </Button>
              <Button
                variant="outline"
                className="border-orange-200 hover:bg-orange-50"
                size="sm"
              >
                <Icon name="Smile" size={14} className="mr-2" />
                Настроение
              </Button>
            </div>

            {/* Сообщения от AI */}
            <div className="space-y-2">
              {messages.length === 0 ? (
                <div className="text-center py-8">
                  <Icon name="MessageSquare" className="text-gray-300 mx-auto mb-3" size={48} />
                  <p className="font-mono text-xs text-gray-500">
                    Начните встречу, и я буду помогать
                  </p>
                </div>
              ) : (
                messages.map((msg) => (
                  <Card key={msg.id} className="p-3 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                    <div className="flex items-start gap-2">
                      <Icon 
                        name={
                          msg.type === "summary" ? "FileText" :
                          msg.type === "translation" ? "Languages" :
                          msg.type === "suggestion" ? "Lightbulb" :
                          "Smile"
                        } 
                        className="text-blue-600 flex-shrink-0 mt-0.5" 
                        size={16} 
                      />
                      <div className="flex-1">
                        <p className="font-mono text-xs text-gray-800">
                          {msg.content}
                        </p>
                        <p className="font-mono text-xs text-gray-500 mt-1">
                          {msg.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>

            {/* Фишки AI */}
            <div className="mt-4 space-y-2">
              <p className="font-mono text-xs text-gray-600 font-medium">
                💡 Что я умею:
              </p>
              {[
                "Автоматические конспекты встреч",
                "Перевод на 100+ языков",
                "Анализ эмоций участников",
                "Умные подсказки и советы",
                "Поиск по разговору",
                "Генерация задач из обсуждений",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                  <span className="font-mono text-xs text-gray-700">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Футер */}
          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono text-xs">
                Защищено E2E шифрованием
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
