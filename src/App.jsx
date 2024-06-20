import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

import Pager from "./Components/Pager/Pager";
import MilkyWay from "./Components/MilkyWay/MilkyWay";
import VoxelModel from "./Components/VoxelModel/VoxelModel";
import SceneAddition from "./Components/SceneAddition/SceneAddition";
import MobileModel from "./Components/MobileModel/MobileModel";
import UI_Toast from "./Components/UI_Toast/UI_Toast";
import Loader from "./Components/Loader/Loader";
import MainDoodle from "./Components/MainDoodle/MainDoodle";

import useLoader from './store/useLoader';
import useUserInteracted from './store/useUserInteracted';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 744);
  const userInteracted = useUserInteracted((state) => state.userInteracted);
  const isLoaded = useLoader((state) => state.isLoaded);

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
      <Loader />
      <Canvas
        dpr={Math.min(window.devicePixelRatio, 2)}
        gl={{ preserveDrawingBuffer: true }}
        camera={{ fov: 60 }}
        className={isLoaded ? 'experience active' : 'experience'}
      >
        <SceneAddition />
        <Suspense fallback={null}>
          <MilkyWay />
        </Suspense>
        <Suspense fallback={null}>
          {!isMobile ? <VoxelModel /> : null}
        </Suspense> 
        <Suspense fallback={null}>
          <Pager />
        </Suspense>
        <MainDoodle />
      </Canvas>
      <UI_Toast />
    </>
  )
}

export default App
