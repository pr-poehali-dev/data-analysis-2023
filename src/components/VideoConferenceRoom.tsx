import { useEffect, useRef } from "react";

type JitsiAPI = {
  dispose: () => void;
  addEventListener: (event: string, handler: () => void) => void;
  executeCommand: (command: string, ...args: unknown[]) => void;
};

declare global {
  interface Window {
    JitsiMeetExternalAPI: new (domain: string, options: Record<string, unknown>) => JitsiAPI;
  }
}

interface VideoConferenceRoomProps {
  roomName: string;
  displayName: string;
  design?: "minimal" | "corporate" | "creative";
  onClose?: () => void;
}

export function VideoConferenceRoom({
  roomName,
  displayName,
  design = "minimal",
  onClose,
}: VideoConferenceRoomProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<JitsiAPI | null>(null);

  useEffect(() => {
    // Загружаем Jitsi API скрипт
    const loadJitsiScript = () => {
      return new Promise((resolve) => {
        if (window.JitsiMeetExternalAPI) {
          resolve(true);
          return;
        }

        const script = document.createElement("script");
        script.src = "https://meet.jit.si/external_api.js";
        script.async = true;
        script.onload = () => resolve(true);
        document.body.appendChild(script);
      });
    };

    const initJitsi = async () => {
      await loadJitsiScript();

      if (!containerRef.current || !window.JitsiMeetExternalAPI) return;

      // Конфигурация Jitsi
      const options = {
        roomName: `ROOMS_${roomName}`,
        width: "100%",
        height: "100%",
        parentNode: containerRef.current,
        configOverwrite: {
          startWithAudioMuted: false,
          startWithVideoMuted: false,
          enableWelcomePage: false,
          prejoinPageEnabled: false,
          disableDeepLinking: true,
          defaultLanguage: "ru",
          subject: "Уютная встреча",
          hideConferenceSubject: false,
          enableNoAudioDetection: true,
          enableNoisyMicDetection: true,
          
          // МАКСИМАЛЬНОЕ КАЧЕСТВО ВИДЕО
          resolution: 1080,
          constraints: {
            video: {
              height: { ideal: 1080, max: 1080, min: 720 },
              width: { ideal: 1920, max: 1920, min: 1280 },
              frameRate: { ideal: 30, max: 30 }
            }
          },
          videoQuality: {
            maxBitratesVideo: {
              H264: {
                low: 500000,
                standard: 1500000,
                high: 3500000
              },
              VP8: {
                low: 500000,
                standard: 1500000, 
                high: 3500000
              },
              VP9: {
                low: 300000,
                standard: 1000000,
                high: 2500000
              }
            },
            preferredCodec: 'H264',
            disableSimulcast: false
          },
          // Улучшенная обработка аудио
          enableNoiseSuppression: true,
          disableAP: false,
          disableAEC: false,
          disableNS: false,
          disableAGC: false,
          audioQuality: {
            stereo: true,
            opusMaxAverageBitrate: 510000
          }
        },
        interfaceConfigOverwrite: {
          BRAND_WATERMARK_LINK: "",
          SHOW_JITSI_WATERMARK: false,
          SHOW_WATERMARK_FOR_GUESTS: false,
          DEFAULT_BACKGROUND: getBackgroundColor(design),
          DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
          TOOLBAR_BUTTONS: [
            "microphone",
            "camera",
            "closedcaptions",
            "desktop",
            "fullscreen",
            "fodeviceselection",
            "hangup",
            "profile",
            "chat",
            "recording",
            "livestreaming",
            "etherpad",
            "sharedvideo",
            "settings",
            "raisehand",
            "videoquality",
            "filmstrip",
            "stats",
            "shortcuts",
            "tileview",
            "download",
            "help",
            "mute-everyone",
          ],
        },
        userInfo: {
          displayName: displayName,
        },
      };

      apiRef.current = new window.JitsiMeetExternalAPI(
        "meet.jit.si",
        options
      );

      // События
      apiRef.current.addEventListener("videoConferenceJoined", () => {
        console.log("Joined conference:", roomName);
        
        // Устанавливаем кастомный виртуальный фон высокого качества
        const backgroundUrl = getBackgroundImageUrl(design);
        if (backgroundUrl && apiRef.current) {
          // Команда для установки виртуального фона
          setTimeout(() => {
            apiRef.current?.executeCommand('setVideoBackgroundImage', backgroundUrl);
          }, 2000);
        }
      });

      apiRef.current.addEventListener("videoConferenceLeft", () => {
        console.log("Left conference");
        if (onClose) onClose();
      });

      apiRef.current.addEventListener("readyToClose", () => {
        if (onClose) onClose();
      });
    };

    initJitsi();

    return () => {
      if (apiRef.current) {
        apiRef.current.dispose();
      }
    };
  }, [roomName, displayName, design, onClose]);

  const getBackgroundColor = (design: string) => {
    // Тёплые уютные цвета для домашней атмосферы
    switch (design) {
      case "minimal":
        return "#fef3c7"; // тёплый кремовый
      case "corporate":
        return "#fed7aa"; // мягкий персиковый
      case "creative":
        return "#fde68a"; // солнечный жёлтый
      default:
        return "#fef3c7";
    }
  };

  const getBackgroundImageUrl = (design: string) => {
    // Высококачественные 4K фоны уютных комнат из Unsplash с максимальным качеством
    switch (design) {
      case "minimal":
        return "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=3840&h=2160&q=100&fit=crop&auto=format&fm=jpg&dpr=2"; // Минималистичная гостиная
      case "corporate":
        return "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=3840&h=2160&q=100&fit=crop&auto=format&fm=jpg&dpr=2"; // Премиум офис
      case "creative":
        return "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=3840&h=2160&q=100&fit=crop&auto=format&fm=jpg&dpr=2"; // Творческая студия
      default:
        return "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=3840&h=2160&q=100&fit=crop&auto=format&fm=jpg&dpr=2";
    }
  };

  return (
    <div className="w-full h-full min-h-[600px] relative rounded-lg overflow-hidden">
      {/* Уютный домашний фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50" />
      
      {/* Мягкий текстурный оверлей */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a574' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      {/* Декоративные элементы для уюта */}
      <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm z-10">
        <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
        <span className="font-mono text-xs text-amber-900">Уютная комната</span>
      </div>
      
      {/* Jitsi контейнер */}
      <div ref={containerRef} className="w-full h-full relative z-0" />
    </div>
  );
}