import { Button } from "./ui/button";
import Icon from "./ui/icon";

export function PremiumBanner() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Контент */}
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Бейдж */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce shadow-2xl">
              <Icon name="Crown" className="text-white" size={24} />
              <span className="font-mono text-sm font-bold text-white uppercase">
                Будущее уже здесь
              </span>
            </div>
          </div>

          {/* Заголовок */}
          <h2 className="text-4xl md:text-6xl font-sentient text-center mb-6 text-white">
            Чем мы <i className="font-light bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">отличаемся</i>
          </h2>
          
          <p className="font-mono text-lg text-center text-white/80 mb-12 max-w-3xl mx-auto">
            Не просто видеоконференции. Это технологии, которых нет у Zoom, Meet и Teams.
          </p>

          {/* Сетка фишек */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: "Sparkles",
                title: "AI-Аватары",
                desc: "Нейросети переносят вашу мимику на любого персонажа",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: "Box",
                title: "Голограммы 3D",
                desc: "Интерактивные объекты прямо в пространстве встречи",
                gradient: "from-cyan-500 to-blue-500",
              },
              {
                icon: "Bot",
                title: "GPT-4 Ассистент",
                desc: "Конспекты, переводы и умные подсказки автоматом",
                gradient: "from-blue-500 to-indigo-500",
              },
              {
                icon: "Heart",
                title: "Анализ эмоций",
                desc: "AI распознаёт настроение участников по лицам",
                gradient: "from-pink-500 to-rose-500",
              },
              {
                icon: "Mic",
                title: "Голос на выбор",
                desc: "Измените голос: робот, радио, эхо, студия",
                gradient: "from-orange-500 to-red-500",
              },
              {
                icon: "Zap",
                title: "4K 60fps",
                desc: "Максимальное качество на наших серверах",
                gradient: "from-yellow-500 to-orange-500",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon name={feature.icon} className="text-white" size={24} />
                </div>
                <h3 className="font-sentient text-xl text-white mb-2">
                  {feature.title}
                </h3>
                <p className="font-mono text-sm text-white/70">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* WOW блок */}
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <Icon name="Lightbulb" className="text-yellow-400 flex-shrink-0 mt-1" size={32} />
              <div>
                <h3 className="font-sentient text-2xl text-white mb-3">
                  🚀 Уникальные технологии
                </h3>
                <p className="font-mono text-white/90 mb-4">
                  Мы используем нейронные сети (GPT-4, TensorFlow), WebGL 3D графику, 
                  Computer Vision для распознавания эмоций и WebRTC для видео без задержек.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["GPT-4", "TensorFlow", "Three.js", "WebRTC", "MediaPipe"].map((tech) => (
                    <div
                      key={tech}
                      className="px-3 py-1 bg-white/10 rounded-full font-mono text-xs text-white"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-2xl text-lg px-10 py-7 mb-4"
              onClick={() => window.location.href = "/premium"}
            >
              <Icon name="Rocket" size={20} className="mr-2" />
              Смотреть все фишки
            </Button>
            <p className="font-mono text-xs text-white/60">
              Первые 100 пользователей получат Premium бесплатно на месяц
            </p>
          </div>
        </div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-cyan-400/30 rounded-full animate-ping" />
      <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-purple-400/30 rounded-full animate-ping delay-500" />
    </section>
  );
}
