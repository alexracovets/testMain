import { Suspense, useEffect, useState } from "react";
import { clarity } from 'react-microsoft-clarity';
import { Canvas } from "@react-three/fiber";
import ReactGA from "react-ga4";

import Pager from "./Components/Pager/Pager";
import MilkyWay from "./Components/MilkyWay/MilkyWay";
import VoxelModel from "./Components/VoxelModel/VoxelModel";
import SceneAddition from "./Components/SceneAddition/SceneAddition";
import UI_Toast from "./Components/UI_Toast/UI_Toast";
import Loader from "./Components/Loader/Loader";
import MainDoodle from "./Components/MainDoodle/MainDoodle";

import useLoader from './store/useLoader';
import MobileModel from "./Components/MobileModel/MobileModel";


function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 744);
  const isLoaded = useLoader((state) => state.isLoaded);
  const ANALYTICS_ID = import.meta.env.VITE_ANALYTICS_ID;
  const CLARITY_ID = import.meta.env.VITE_CLARITY_ID;

  useEffect(() => {
    setIsMobile(window.innerWidth <= 744);
    function handleResize() {
      setIsMobile(window.innerWidth <= 744);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    ReactGA.initialize(ANALYTICS_ID);
    clarity.init(CLARITY_ID);
  }, [ANALYTICS_ID, CLARITY_ID]);

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
          {!isMobile ? <VoxelModel /> : <MobileModel />}
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
