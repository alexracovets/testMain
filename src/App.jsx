import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";

import Pager from "./Components/Pager/Pager";
import MilkyWay from "./Components/MilkyWay/MilkyWay";
import VoxelModel from "./Components/VoxelModel/VoxelModel";
import SceneAddition from "./Components/SceneAddition/SceneAddition";
import { OrbitControls } from "@react-three/drei";
import MobileModel from "./Components/MobileModel/MobileModel";
function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 744);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 744);
    function handleResize() {
      setIsMobile(window.innerWidth <= 744);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Canvas
      dpr={Math.min(window.devicePixelRatio, 2)}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 60 }}
    >
      <SceneAddition />
      <MilkyWay />
      {!isMobile ? <VoxelModel /> : null}
      <Pager />
      {/* <OrbitControls /> */}
      <MobileModel />
    </Canvas>
  )
}

export default App
