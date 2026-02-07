import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text3D, Float, Sparkles, MeshDistortMaterial } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Props {
  isActive: boolean;
  onClose: () => void;
}

function HologramScene() {
  return (
    <>
      {/* Голографический куб */}
      <Float
        speed={2}
        rotationIntensity={1}
        floatIntensity={2}
      >
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <MeshDistortMaterial
            color="#00ffff"
            attach="material"
            distort={0.5}
            speed={2}
            roughness={0}
            metalness={0.8}
            transparent
            opacity={0.7}
            emissive="#00ffff"
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>

      {/* Сияющие частицы */}
      <Sparkles
        count={100}
        scale={10}
        size={3}
        speed={0.4}
        color="#00ffff"
      />

      {/* Светящиеся кольца */}
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, i * 1.5 - 1.5, 0]}
        >
          <torusGeometry args={[3 + i, 0.05, 16, 100]} />
          <meshStandardMaterial
            color="#ff00ff"
            emissive="#ff00ff"
            emissiveIntensity={2}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}

      {/* Освещение */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#ff00ff" />
      
      <OrbitControls enableZoom={true} />
    </>
  );
}

type PresentationMode = "cube" | "chart" | "model";

export function HolographicPresentation({ isActive, onClose }: Props) {
  const [mode, setMode] = useState<PresentationMode>("cube");

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
      {/* Заголовок */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-6">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
              <Icon name="Sparkles" className="text-white" size={24} />
            </div>
            <div>
              <h2 className="font-sentient text-2xl text-white">
                Голографическая презентация
              </h2>
              <p className="font-mono text-xs text-cyan-400">
                Интерактивные 3D объекты • Режим AR
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
            onClick={onClose}
          >
            <Icon name="X" size={16} className="mr-2" />
            Закрыть
          </Button>
        </div>
      </div>

      {/* 3D Сцена */}
      <div className="w-full h-full">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <HologramScene />
        </Canvas>
      </div>

      {/* Панель управления */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-6">
        <div className="container">
          {/* WOW информация */}
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-md border border-cyan-500/30 rounded-xl p-4 mb-4">
            <div className="flex items-start gap-3">
              <Icon name="Lightbulb" className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-sentient text-lg text-white mb-1">
                  🚀 Уникальная технология WebGL + AR
                </h3>
                <p className="font-mono text-xs text-cyan-300">
                  Все участники видят один 3D объект в реальном времени. 
                  Можно вращать, масштабировать и добавлять аннотации прямо в пространстве!
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            {/* Режимы отображения */}
            <div className="flex gap-3">
              {[
                { id: "cube", name: "3D Куб", icon: "Box" },
                { id: "chart", name: "График", icon: "BarChart3" },
                { id: "model", name: "3D Модель", icon: "Boxes" },
              ].map((item) => (
                <Button
                  key={item.id}
                  variant={mode === item.id ? "default" : "outline"}
                  className={
                    mode === item.id
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 border-0 text-white"
                      : "border-white/20 text-white hover:bg-white/10"
                  }
                  onClick={() => setMode(item.id as PresentationMode)}
                >
                  <Icon name={item.icon} size={16} className="mr-2" />
                  {item.name}
                </Button>
              ))}
            </div>

            {/* Инструменты */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
                title="Добавить аннотацию"
              >
                <Icon name="MessageCircle" size={16} />
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
                title="Лазерная указка"
              >
                <Icon name="Pointer" size={16} />
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
                title="Поделиться экраном"
              >
                <Icon name="Share2" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Частицы на фоне */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-150" />
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-300" />
      </div>
    </div>
  );
}