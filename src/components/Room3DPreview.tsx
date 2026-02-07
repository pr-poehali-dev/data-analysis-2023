import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { Suspense } from "react";

interface Room3DPreviewProps {
  design: "minimal" | "corporate" | "creative";
}

function RoomScene({ design }: { design: string }) {
  const colors = {
    minimal: "#f5f5f5",
    corporate: "#1e3a8a",
    creative: "#7c3aed",
  };

  const color = colors[design as keyof typeof colors] || colors.minimal;

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2, 5]} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        autoRotate
        autoRotateSpeed={0.5}
      />
      
      {/* Освещение */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <pointLight position={[-5, 3, -5]} intensity={0.5} />

      {/* Пол */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Стены */}
      <mesh position={[0, 2.5, -5]} receiveShadow>
        <boxGeometry args={[10, 5, 0.1]} />
        <meshStandardMaterial color={color} />
      </mesh>

      {/* Стол */}
      <mesh position={[0, 0.75, 0]} castShadow>
        <boxGeometry args={[3, 0.1, 1.5]} />
        <meshStandardMaterial color="#2d2d2d" />
      </mesh>

      {/* Ножки стола */}
      {[[-1.3, -0.8], [1.3, -0.8], [-1.3, 0.8], [1.3, 0.8]].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.375, z]} castShadow>
          <boxGeometry args={[0.1, 0.75, 0.1]} />
          <meshStandardMaterial color="#2d2d2d" />
        </mesh>
      ))}

      {/* Стулья */}
      {[-1.5, 0, 1.5].map((x, i) => (
        <group key={i} position={[x, 0.5, 1.2]}>
          <mesh castShadow>
            <boxGeometry args={[0.5, 0.1, 0.5]} />
            <meshStandardMaterial color="#404040" />
          </mesh>
          <mesh position={[0, 0.5, -0.2]} castShadow>
            <boxGeometry args={[0.5, 0.8, 0.1]} />
            <meshStandardMaterial color="#404040" />
          </mesh>
        </group>
      ))}

      {/* Экран на стене */}
      <mesh position={[0, 2.5, -4.95]}>
        <planeGeometry args={[3, 1.7]} />
        <meshStandardMaterial color="#000000" emissive={color} emissiveIntensity={0.3} />
      </mesh>

      <Environment preset="city" />
    </>
  );
}

export function Room3DPreview({ design }: Room3DPreviewProps) {
  return (
    <div className="w-full h-full bg-black rounded-lg overflow-hidden">
      <Canvas shadows>
        <Suspense fallback={null}>
          <RoomScene design={design} />
        </Suspense>
      </Canvas>
    </div>
  );
}
