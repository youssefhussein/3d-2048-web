"use client";
import { Canvas } from "@react-three/fiber";
import Board from "./_components/board";
import { OrbitControls } from "@react-three/drei";

export default function Game() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Canvas className="bg-green-500">
        <ambientLight intensity={Math.PI / 2} />
        <Board />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
