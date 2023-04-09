import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p className="py-4 max-w-2xl text-2xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-800 to-violet-600 ">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
