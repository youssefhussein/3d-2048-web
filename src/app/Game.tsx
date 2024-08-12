"use client";
import { Canvas } from "@react-three/fiber";
import Board from "./_components/board";

export default function Game() {
  return (
    <div>
      <Canvas className="bg-transparent">
        <ambientLight intensity={Math.PI / 2} />
        <Board />
      </Canvas>
    </div>
  );
}
