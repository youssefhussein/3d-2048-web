"use client";
import { Vector3 } from "@react-three/fiber";
import React, { useRef } from "react";
import { Mesh } from "three";
import m from "../mathconfig";
import { Box } from "@react-three/drei";

function Tile({ pos }: { pos: Vector3 }) {
  return (
    <Box args={[m.tileSize, m.tileSize, 1]} position={pos}>
      <meshStandardMaterial color="red" />
    </Box>
  );
}

export default function Board() {
  const meshRef = useRef();
  console.log(m.tileSize);

  return (
    <>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[m.boardSize, m.boardSize, 1]} />
        <meshStandardMaterial color={"orange"} />
      </mesh>
      <Tile pos={[-m.tileSize, m.tileSize, 0.8]} />
    
    </>
  );
}
