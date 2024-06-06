import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

import Pager from "./Components/Pager/Pager";
import MilkyWay from "./Components/MilkyWay/MilkyWay";
import VoxelModel from "./Components/VoxelModel/VoxelModel";
import SceneAddition from "./Components/SceneAddition/SceneAddition";
import MobileModel from "./Components/MobileModel/MobileModel";
import UI_Toast from "./Components/UI_Toast/UI_Toast";
import Loader from "./Components/Loader/Loader";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 744);
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    setIsMobile(window.innerWidth <= 744);
    function handleResize() {
      setIsMobile(window.innerWidth <= 744);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {showLoader ? <Loader onLoaded={() => setShowLoader(false)} /> : null}
      <Canvas
        dpr={Math.min(window.devicePixelRatio, 2)}
        gl={{ preserveDrawingBuffer: true }}
        camera={{ fov: 60 }}
      >
        <SceneAddition />
        <Suspense fallback={null}>
          <MilkyWay />
        </Suspense>
        <Suspense fallback={null}>
          {!isMobile ? <VoxelModel /> : null}
        </Suspense>
        <Suspense fallback={null}>
          {isMobile ? <MobileModel /> : null}
        </Suspense>
        <Suspense fallback={null}>
          <Pager />
        </Suspense>
      </Canvas>
      <UI_Toast />
    </>
  )
}

export default App
