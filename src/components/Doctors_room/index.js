import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Preload } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
const RoomMesh = () => {
  const brain = useLoader(GLTFLoader, "./lowpoly_medical_room/scene.gltf");
  const {viewport} = useThree();
  const scale = viewport.width < 768 ? 0.5 : 1; 
  const positionY = viewport.width < 768 ? -20 : -150; 
  const positionZ = viewport.width < 768 ? -410 : -210; 
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <spotLight position={[0, 0, 0]} angle={3.2} penumbra={15} intensity={5} />
      <primitive
        object={brain.scene}
        scale={scale}
        position={[0, positionY, positionZ]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const Room = () => {
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
          maxPolarAngle={-Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <RoomMesh />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Room;
