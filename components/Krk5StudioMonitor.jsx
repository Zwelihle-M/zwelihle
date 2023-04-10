import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";

const Krk5StudioMonitor = () => {
  function Model(props) {
    const { scene } = useGLTF("/krk_classic_5.glb");
    return <primitive object={scene} {...props} />;
  }
  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 45 }} style={{ position: "relative" }}
    shadows
    gl={{preserveDrawingBuffer: true}}
   
    frameloop="demand">
      
      <OrbitControls enableZoom={false} enablePan={false} 
       />
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
        <Model scale={0.70} 
        position={[0, -1, 0]} />
        <Preload all/>
      </Suspense>
    </Canvas>
  );
};

export default Krk5StudioMonitor;
