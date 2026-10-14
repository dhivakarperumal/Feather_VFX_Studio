import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';

function CinematicObjects({ reducedMotion, isMobile }) {
  const coreRef = useRef(null);
  const ringRef = useRef(null);

  useFrame((state, delta) => {
    if (reducedMotion) return;

    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.12;
      coreRef.current.rotation.x += delta * 0.04;
    }
    if (ringRef.current) ringRef.current.rotation.z += delta * 0.07;

    state.camera.position.x += (state.pointer.x * 0.16 - state.camera.position.x) * delta;
    state.camera.position.y += (state.pointer.y * 0.1 - state.camera.position.y) * delta;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.65} />
      <pointLight position={[2, 2, 3]} color="#53c8ff" intensity={9} distance={9} />
      <pointLight position={[-3, -1, 1]} color="#244fff" intensity={5} distance={8} />

      <group position={[1.25, 0, 0]}>
        <Float
          speed={reducedMotion ? 0 : 0.65}
          rotationIntensity={reducedMotion ? 0 : 0.12}
          floatIntensity={reducedMotion ? 0 : 0.2}
          floatingRange={[-0.1, 0.1]}
        >
          <mesh ref={coreRef}>
            <icosahedronGeometry args={[0.88, 1]} />
            <meshStandardMaterial
              color="#1d4360"
              metalness={0.62}
              roughness={0.26}
              emissive="#0b3c60"
              emissiveIntensity={1.25}
            />
          </mesh>
          <mesh scale={1.012}>
            <icosahedronGeometry args={[0.88, 1]} />
            <meshBasicMaterial color="#59cfff" wireframe transparent opacity={0.14} />
          </mesh>
        </Float>

        <mesh ref={ringRef} rotation={[0.9, 0.15, -0.25]}>
          <torusGeometry args={[1.28, 0.016, 8, 100]} />
          <meshBasicMaterial color="#69d5ff" transparent opacity={0.72} />
        </mesh>
        <mesh rotation={[0.4, 0.8, 0.25]}>
          <torusGeometry args={[1.48, 0.01, 6, 100]} />
          <meshBasicMaterial color="#477dff" transparent opacity={0.44} />
        </mesh>
      </group>

      <Sparkles
        count={isMobile ? 30 : 74}
        scale={[7, 4.5, 2.5]}
        size={isMobile ? 1.5 : 2}
        speed={reducedMotion ? 0 : 0.18}
        opacity={0.58}
        color="#9fe5ff"
      />
    </>
  );
}

export default function HeroScene({ reducedMotion = false, isMobile = false }) {
  return (
    <Canvas
      aria-hidden="true"
      dpr={isMobile ? [1, 1.15] : [1, 1.5]}
      camera={{ position: [0, 0, 7.5], fov: 42 }}
      frameloop={reducedMotion ? 'demand' : 'always'}
      gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
    >
      <CinematicObjects reducedMotion={reducedMotion} isMobile={isMobile} />
    </Canvas>
  );
}
