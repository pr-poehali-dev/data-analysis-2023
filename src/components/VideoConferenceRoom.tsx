import { useEffect, useRef } from "react";

type JitsiAPI = {
  dispose: () => void;
  addEventListener: (event: string, handler: () => void) => void;
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
        script.src = "https://8x8.vc/vpaas-magic-cookie-1a2b3c4d/external_api.js";
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
          // Настройка дизайна под выбранную тему
          defaultLanguage: "ru",
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
        "8x8.vc",
        options
      );

      // События
      apiRef.current.addEventListener("videoConferenceJoined", () => {
        console.log("Joined conference:", roomName);
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
    switch (design) {
      case "minimal":
        return "#f5f5f5";
      case "corporate":
        return "#1e3a8a";
      case "creative":
        return "#7c3aed";
      default:
        return "#000000";
    }
  };

  return (
    <div className="w-full h-full min-h-[600px] bg-black rounded-lg overflow-hidden">
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
}