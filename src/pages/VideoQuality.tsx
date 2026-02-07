import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function VideoQuality() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="container py-20">
        <Button
          variant="outline"
          onClick={() => navigate("/")}
          className="mb-8 border-amber-300 text-amber-700 hover:bg-amber-50"
        >
          <Icon name="ArrowLeft" size={16} className="mr-2" />
          На главную
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Icon name="Sparkles" className="text-amber-600" size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-sentient mb-4 text-amber-900">
              Качество <i className="font-light">видео</i>
            </h1>
            <p className="font-mono text-sm text-amber-700/80 max-w-2xl mx-auto">
              Максимальное качество для комфортного общения
            </p>
          </div>

          {/* Текущие возможности */}
          <div className="bg-white/80 backdrop-blur-sm border border-amber-200 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="CheckCircle" className="text-green-500" size={28} />
              <h2 className="text-2xl font-sentient text-amber-900">
                Что доступно сейчас
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-amber-50/50 rounded-xl p-6">
                <Icon name="Video" className="text-amber-600 mb-3" size={24} />
                <h3 className="font-sentient text-lg mb-2 text-amber-900">
                  Full HD 1080p
                </h3>
                <p className="font-mono text-xs text-amber-700/80">
                  Разрешение 1920x1080 при 30 fps — отличная картинка для видеоконференций
                </p>
              </div>

              <div className="bg-amber-50/50 rounded-xl p-6">
                <Icon name="Volume2" className="text-amber-600 mb-3" size={24} />
                <h3 className="font-sentient text-lg mb-2 text-amber-900">
                  HD Audio
                </h3>
                <p className="font-mono text-xs text-amber-700/80">
                  Стерео звук с шумоподавлением и эхоподавлением
                </p>
              </div>

              <div className="bg-amber-50/50 rounded-xl p-6">
                <Icon name="Image" className="text-amber-600 mb-3" size={24} />
                <h3 className="font-sentient text-lg mb-2 text-amber-900">
                  4K Фоны
                </h3>
                <p className="font-mono text-xs text-amber-700/80">
                  Высококачественные виртуальные фоны 3840x2160
                </p>
              </div>

              <div className="bg-amber-50/50 rounded-xl p-6">
                <Icon name="Zap" className="text-amber-600 mb-3" size={24} />
                <h3 className="font-sentient text-lg mb-2 text-amber-900">
                  Без задержек
                </h3>
                <p className="font-mono text-xs text-amber-700/80">
                  WebRTC технология для минимальной задержки звука и видео
                </p>
              </div>
            </div>
          </div>

          {/* Ограничения бесплатной версии */}
          <div className="bg-amber-100/50 border border-amber-300 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Info" className="text-amber-700" size={28} />
              <h2 className="text-2xl font-sentient text-amber-900">
                О виртуальных фонах
              </h2>
            </div>

            <div className="space-y-4">
              <p className="font-mono text-sm text-amber-800">
                <strong>Почему качество фонов может быть ниже ожидаемого:</strong>
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="Dot" className="text-amber-600 mt-1 flex-shrink-0" size={16} />
                  <div>
                    <span className="font-mono text-sm text-amber-800">
                      <strong>Обработка в браузере:</strong> Виртуальные фоны применяются в реальном времени 
                      через веб-камеру, что снижает итоговое разрешение
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Dot" className="text-amber-600 mt-1 flex-shrink-0" size={16} />
                  <div>
                    <span className="font-mono text-sm text-amber-800">
                      <strong>Качество камеры:</strong> Зависит от вашей веб-камеры (обычно 720p-1080p)
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Dot" className="text-amber-600 mt-1 flex-shrink-0" size={16} />
                  <div>
                    <span className="font-mono text-sm text-amber-800">
                      <strong>Сжатие видео:</strong> Для экономии трафика Jitsi сжимает видеопоток
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Премиум возможности */}
          <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Crown" className="text-white" size={28} />
              <h2 className="text-2xl font-sentient">
                Премиум версия
              </h2>
            </div>

            <p className="font-mono text-sm text-white/90 mb-6">
              Для максимального качества мы можем развернуть собственный сервер Jitsi:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
                <Icon name="Check" className="text-white flex-shrink-0" size={20} />
                <span className="font-mono text-sm">4K видео (3840x2160)</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
                <Icon name="Check" className="text-white flex-shrink-0" size={20} />
                <span className="font-mono text-sm">60 fps плавность</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
                <Icon name="Check" className="text-white flex-shrink-0" size={20} />
                <span className="font-mono text-sm">Без лимитов участников</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
                <Icon name="Check" className="text-white flex-shrink-0" size={20} />
                <span className="font-mono text-sm">Полный брендинг</span>
              </div>
            </div>

            <Button
              className="w-full bg-white text-amber-600 hover:bg-amber-50"
              size="lg"
              onClick={() => navigate("/#contact")}
            >
              <Icon name="Mail" size={16} className="mr-2" />
              Связаться для премиум
            </Button>
          </div>

          {/* Советы */}
          <div className="mt-8 bg-white/60 backdrop-blur-sm border border-amber-200 rounded-2xl p-8">
            <h3 className="text-xl font-sentient text-amber-900 mb-4 flex items-center gap-2">
              <Icon name="Lightbulb" className="text-amber-600" size={24} />
              Как улучшить качество
            </h3>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Icon name="ArrowRight" className="text-amber-500 mt-1 flex-shrink-0" size={16} />
                <span className="font-mono text-sm text-amber-800">
                  Используйте хорошее освещение — камера даст лучшую картинку
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="ArrowRight" className="text-amber-500 mt-1 flex-shrink-0" size={16} />
                <span className="font-mono text-sm text-amber-800">
                  Подключитесь по кабелю — стабильный интернет важнее скорости
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="ArrowRight" className="text-amber-500 mt-1 flex-shrink-0" size={16} />
                <span className="font-mono text-sm text-amber-800">
                  Закройте лишние вкладки — браузер будет работать быстрее
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="ArrowRight" className="text-amber-500 mt-1 flex-shrink-0" size={16} />
                <span className="font-mono text-sm text-amber-800">
                  В настройках Jitsi выберите "HD качество" в разделе видео
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
