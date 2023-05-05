import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useState, useEffect, useMemo } from "react";
import { Preload } from "@react-three/drei";
const Brain = ({ isMobile }) => {
  const Brain = useLoader(GLTFLoader, "./Brain3d/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.7} groundColor="Black" />
      <pointLight intensity={0.4} position={[1, 3, 1]} />
      <spotLight
        position={[-4, -1, 0]}
        angle={0.12}
        penumbra={5}
        intensity={0.3}
      />
      <spotLight position={[0, 0, 0]} angle={3.2} penumbra={15} intensity={0.1} />
      <primitive
        object={Brain.scene}
        scale={isMobile ? 1.5 : 2.15}
        position={isMobile ? [0.1, 0.5, 2] : [0, -0.2, 2]}
        rotation={isMobile ? [0, 2, 0] : [0, 2, 0]}
      />
    </mesh>
  );
};
const BrainCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    setIsMobile(mediaQuery.matches);
    if (mediaQuery.addListener) {
      mediaQuery.addListener(handleMediaQueryChange);
    }
    return () => {
      if (mediaQuery.removeListener) {
        mediaQuery.removeListener(handleMediaQueryChange);
      }
    };
  }, []); // empty array ensures that the effect is only called once, when the component mounts

  const MemoizedBrain = useMemo(
    () => <Brain isMobile={isMobile} />,
    [isMobile]
  );

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
        {MemoizedBrain}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default BrainCanvas;
