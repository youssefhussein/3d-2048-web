"use client";
import React, { useRef } from "react";
import { Mesh } from "three";

export default function Board() {
  const meshRef = useRef();
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={ "orange"} />
    </mesh>
  );
}
