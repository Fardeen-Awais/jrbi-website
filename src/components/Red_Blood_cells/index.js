import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useState, useEffect, useMemo } from "react";
import { Preload } from "@react-three/drei";
const BrainMesh = () => {
  const brain = useLoader(GLTFLoader, "./red_blood_cells/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <spotLight position={[0, 0, 0]} angle={3.2} penumbra={15} intensity={5} />
      <primitive
        object={brain.scene}
        scale={1}
        position={[0, 0,0] }
        rotation={[0, 2, 0]}
      />
    </mesh>
  );
};

const BrainCanvas = () => {
  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [0, 0, 10], fov: 60 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ height: "100vh" }}
    >
      <Suspense fallback={"..loading"}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <BrainMesh />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BrainCanvas;
