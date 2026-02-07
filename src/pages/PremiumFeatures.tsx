import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { AIAvatarSelector } from "@/components/premium/AIAvatarSelector";
import { HolographicPresentation } from "@/components/premium/HolographicPresentation";

export default function PremiumFeatures() {
  const navigate = useNavigate();
  const [showAvatars, setShowAvatars] = useState(false);
  const [showHologram, setShowHologram] = useState(false);

  const competitors = [
    { name: "Zoom", price: "от $149/мес", features: ["HD видео", "Запись", "Виртуальные фоны", "Чат"] },
    { name: "Google Meet", price: "от $12/мес", features: ["HD видео", "100 участников", "Запись", "Субтитры"] },
    { name: "Microsoft Teams", price: "от $10/мес", features: ["Видео", "Чат", "Интеграции", "Совместная работа"] },
  ];

  const ourFeatures = [
    {
      id: "ai-avatars",
      icon: "Sparkles",
      title: "AI-Аватары нового поколения",
      description: "Появляйтесь на встречах в любом образе — от делового до киборга",
      wow: "Нейронные сети переносят вашу мимику на аватара в реальном времени!",
      demo: () => setShowAvatars(true),
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: "hologram",
      icon: "Box",
      title: "Голографические презентации",
      description: "3D объекты прямо в пространстве встречи — вращайте, масштабируйте, аннотируйте",
      wow: "Технология WebGL + AR для совместного взаимодействия с 3D моделями!",
      demo: () => setShowHologram(true),
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      id: "ai-assistant",
      icon: "Bot",
      title: "AI-Ассистент встреч",
      description: "Автоматические конспекты, перевод на 100+ языков, умные подсказки",
      wow: "GPT-4 анализирует разговор и генерирует задачи автоматически!",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      id: "emotion",
      icon: "Heart",
      title: "Эмоциональная аналитика",
      description: "Анализ настроения участников через мимику лица с точностью 94%",
      wow: "Computer Vision распознаёт эмоции и даёт советы по ведению встречи!",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      id: "voice",
      icon: "Mic",
      title: "Голосовые модификаторы",
      description: "Измените голос: радио-диктор, робот, эхо, студийное качество",
      wow: "Обработка звука в реальном времени без задержек!",
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: "quality",
      icon: "Zap",
      title: "4K видео 60fps",
      description: "Максимальное качество на собственных серверах",
      wow: "До 5 Mbps битрейт — как живое общение!",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Анимированный фон */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 container py-20">
        {/* Навигация */}
        <Button
          variant="outline"
          onClick={() => navigate("/")}
          className="mb-8 border-white/20 text-white hover:bg-white/10"
        >
          <Icon name="ArrowLeft" size={16} className="mr-2" />
          На главную
        </Button>

        {/* Герой */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6 animate-bounce">
            <Icon name="Crown" className="text-white" size={24} />
            <span className="font-mono text-sm font-bold text-white uppercase">
              Премиум-класс
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-sentient mb-6 text-white">
            Будущее <i className="font-light bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">видеоконференций</i>
          </h1>
          
          <p className="font-mono text-lg text-white/80 max-w-3xl mx-auto mb-8">
            Не просто Jitsi с красивым дизайном. Это технологии, которых нет больше нигде.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-2xl text-lg px-8 py-6"
              onClick={() => navigate("/book")}
            >
              <Icon name="Rocket" size={20} className="mr-2" />
              Попробовать бесплатно
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6"
              onClick={() => navigate("/#contact")}
            >
              <Icon name="Mail" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>

        {/* Сравнение с конкурентами */}
        <div className="mb-20">
          <h2 className="text-4xl font-sentient text-center mb-12 text-white">
            Почему мы <i className="font-light text-cyan-400">лучше</i>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Конкуренты */}
            {competitors.map((comp) => (
              <div key={comp.name} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="font-sentient text-xl text-white mb-2">{comp.name}</h3>
                <p className="font-mono text-sm text-white/60 mb-4">{comp.price}</p>
                <ul className="space-y-2">
                  {comp.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 font-mono text-xs text-white/70">
                      <Icon name="Check" size={14} className="text-white/50" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Мы */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Icon name="Crown" className="text-yellow-300" size={24} />
                  <h3 className="font-sentient text-xl text-white">ROOMS</h3>
                </div>
                <p className="font-mono text-sm text-white mb-4">от $50/мес</p>
                <ul className="space-y-2 mb-4">
                  {["Всё из Zoom/Meet", "AI-аватары", "Голограммы", "Эмоции AI", "4K видео"].map((f, i) => (
                    <li key={i} className="flex items-center gap-2 font-mono text-xs text-white">
                      <Icon name="Check" size={14} className="text-yellow-300" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="font-mono text-xs text-yellow-300 font-bold animate-pulse">
                  + 10 уникальных фишек! 🚀
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Уникальные фишки */}
        <div className="mb-20">
          <h2 className="text-4xl font-sentient text-center mb-4 text-white">
            Наши <i className="font-light text-purple-400">WOW-эффекты</i>
          </h2>
          <p className="font-mono text-sm text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Технологии, которых нет у Zoom, Meet и Teams
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ourFeatures.map((feature) => (
              <div
                key={feature.id}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                onClick={feature.demo}
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon name={feature.icon} className="text-white" size={24} />
                </div>

                <h3 className="font-sentient text-xl text-white mb-2">
                  {feature.title}
                </h3>

                <p className="font-mono text-sm text-white/70 mb-4">
                  {feature.description}
                </p>

                <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <Icon name="Zap" className="text-yellow-400 flex-shrink-0 mt-0.5" size={16} />
                    <p className="font-mono text-xs text-cyan-300">
                      <strong>WOW:</strong> {feature.wow}
                    </p>
                  </div>
                </div>

                {feature.demo && (
                  <Button
                    className="w-full mt-4 bg-white/10 hover:bg-white/20 text-white border-0"
                    size="sm"
                  >
                    <Icon name="Play" size={14} className="mr-2" />
                    Посмотреть демо
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Технологии */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 text-center">
          <Icon name="Cpu" className="text-cyan-400 mx-auto mb-6" size={48} />
          <h2 className="text-3xl font-sentient text-white mb-4">
            Передовые технологии
          </h2>
          <p className="font-mono text-white/70 mb-8 max-w-3xl mx-auto">
            Мы используем нейронные сети, WebGL, WebRTC, Computer Vision и машинное обучение 
            для создания будущего видеоконференций уже сегодня
          </p>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { name: "GPT-4", desc: "AI ассистент" },
              { name: "TensorFlow", desc: "Эмоции" },
              { name: "Three.js", desc: "3D графика" },
              { name: "WebRTC", desc: "Видео" },
              { name: "MediaPipe", desc: "Лица" },
            ].map((tech) => (
              <div key={tech.name} className="text-center">
                <div className="font-mono text-lg text-white font-bold mb-1">
                  {tech.name}
                </div>
                <div className="font-mono text-xs text-white/60">
                  {tech.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-4xl font-sentient text-white mb-6">
            Готовы к будущему?
          </h2>
          <p className="font-mono text-white/70 mb-8">
            Первые 100 пользователей получат все премиум-функции бесплатно на месяц
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 shadow-2xl text-xl px-12 py-8"
            onClick={() => navigate("/book")}
          >
            <Icon name="Sparkles" size={24} className="mr-3" />
            Начать прямо сейчас
          </Button>
        </div>
      </div>

      {/* Модалки */}
      <AIAvatarSelector
        isOpen={showAvatars}
        onClose={() => setShowAvatars(false)}
        onSelect={(id) => console.log("Selected avatar:", id)}
      />

      <HolographicPresentation
        isActive={showHologram}
        onClose={() => setShowHologram(false)}
      />
    </div>
  );
}
