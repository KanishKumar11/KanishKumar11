"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

// --- ABSTRACT GEOMETRY ---

function TechCore() {
  return (
    <group>
      {/* Inner Core */}
      <mesh>
        <icosahedronGeometry args={[2, 0]} />
        <meshStandardMaterial
          color="#000"
          emissive="#3b82f6"
          emissiveIntensity={2}
          wireframe
        />
      </mesh>

      {/* Outer Shell (Glassy) */}
      <mesh>
        <icosahedronGeometry args={[2.2, 0]} />
        <meshPhongMaterial
          color="#3b82f6"
          opacity={0.1}
          transparent
          shininess={100}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  )
}

function SpinningRing({ axis = "x", speed = 1, size = 3, color = "#4f46e5" }) {
  const ring = useRef();
  useFrame((state, delta) => {
    if (axis === "x") ring.current.rotation.x += delta * speed;
    if (axis === "y") ring.current.rotation.y += delta * speed;
    if (axis === "z") ring.current.rotation.z += delta * speed;
  });

  return (
    <mesh ref={ring} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}>
      <torusGeometry args={[size, 0.02, 16, 100]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={4}
      />
    </mesh>
  );
}

function ParticleField({ count = 100 }) {
  const points = useRef();

  // Generate random positions sphere
  const particlesPosition = React.useMemo(() => {
    const positions = new Float32Array(count * 3);
    const distance = 8;
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      positions[i * 3] = distance * Math.sin(theta) * Math.cos(phi);
      positions[i * 3 + 1] = distance * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = distance * Math.cos(theta);
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    points.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#fff" sizeAttenuation transparent opacity={0.5} />
    </points>
  );
}


// --- MAIN HERO COMPONENT ---

export default function HackerRoom() {
  return (
    <section className="h-screen w-full bg-black relative overflow-hidden">
      <Canvas camera={{ position: [0, 0, 10], fov: 40 }}>
        <ambientLight intensity={0.5} />

        {/* Main Object Floating */}
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <TechCore />
        </Float>

        {/* Spinning Data Rings */}
        <SpinningRing axis="x" size={3.5} speed={0.5} color="#3b82f6" />
        <SpinningRing axis="y" size={4.5} speed={0.3} color="#8b5cf6" />
        <SpinningRing axis="z" size={5.5} speed={0.2} color="#ec4899" />

        {/* Environment */}
        <ParticleField count={400} />
        <Environment preset="city" />

        {/* POST PROCESSING (The Glow) */}
        <EffectComposer>
          <Bloom
            luminanceThreshold={0}
            luminanceSmoothing={0.9}
            height={300}
            intensity={2} // Glow strength
          />
        </EffectComposer>
      </Canvas>

      {/* Overlay UI */}
      <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center mix-blend-screen z-10">
        <div className="text-center p-6 max-w-4xl pointer-events-auto">
          <h2 className="text-sm md:text-base font-mono text-blue-400 mb-4 tracking-[0.2em] uppercase">
            System Initiated
          </h2>
          <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter mb-4 shadow-blue-500 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            KANISH KUMAR
          </h1>
          <p className="text-xl md:text-2xl text-blue-100/70 font-light max-w-xl mx-auto leading-relaxed">
            Architecting the digital future with
            <span className="text-white font-medium"> Next.js</span>,
            <span className="text-white font-medium"> WebGL</span>, and
            <span className="text-white font-medium"> AI</span>.
          </p>
        </div>
      </div>

      {/* Decorative CSS Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] pointer-events-none" />
    </section>
  );
}
