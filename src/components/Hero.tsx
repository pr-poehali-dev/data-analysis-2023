import { GL } from "./gl";
import { Pill } from "./Pill";
import { Button } from "./ui/button";
import { useState } from "react";
import { Header } from "./Header";

export function Hero() {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="flex flex-col h-svh justify-between relative z-10">
      <GL hovering={hovering} />
      <Header />

      <div className="pb-16 mt-auto text-center relative">
        <Pill className="mb-6">БЕТА-ВЕРСИЯ</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient">
          Премиальные онлайн-комнаты <br />
          <i className="font-light">для видеоконференций</i>
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[520px] mx-auto">
          Арендуйте стильные виртуальные пространства для встреч с командой и клиентами. 10 дизайнов на выбор, до 100 комнат одновременно
        </p>

        <a className="contents max-sm:hidden" href="#rooms">
          <Button
            className="mt-14"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Выбрать комнату]
          </Button>
        </a>
        <a className="contents sm:hidden" href="#rooms">
          <Button
            size="sm"
            className="mt-14"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Выбрать комнату]
          </Button>
        </a>
      </div>
    </div>
  );
}