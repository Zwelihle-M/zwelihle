import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";

const XboxEliteController = () => {
  function Model(props) {
    const { scene } = useGLTF("/xbox_elite_controller.glb");
    return <primitive object={scene} {...props} />;
  }


  
  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 45 }} style={{ position: "relative" }}
    shadows
    gl={{preserveDrawingBuffer: true}}
   
    frameloop="demand"
    >
      
      <OrbitControls enableZoom={false} enablePan={false} 
       autoRotate={true} touchEnabled={true}/>
      <ambientLight intensity={1} />
      <hemisphereLight intensity={0.1} />
      <pointLight
        position={[10, 20, 10]}
        intensity={1}
        distance={50}
        color="#ffffff"
      />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <Suspense fallback={<CanvasLoader />}>
        <Model scale={0.15} />
        <Preload all/>
      </Suspense>
    </Canvas>

  );
};

export default XboxEliteController;
