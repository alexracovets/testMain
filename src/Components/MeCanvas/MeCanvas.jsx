import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";

import getMilkyWayPoints from "../../utils/getMilkyWayPoints";
import VoxelModel from "./VoxelModel/VoxelModel";
import MilkyWay from "./MilkyWay/MilkyWay";
import Lights from "./Lights/Lights";

import s from './MeCanvas.module.scss';
export default function MeCanvas() {
    const [points, setPoints] = useState(null);
    const [colors, setColors] = useState(null);
    const count = 10000;

    useEffect(() => {
        const float = getMilkyWayPoints(count);
        setPoints(float.points);
        setColors(float.colors)
    }, [])

    return (
        <div className={s.canvas}>
            <Canvas
                dpr={Math.min(window.devicePixelRatio, 2)}
                gl={{ preserveDrawingBuffer: true }}
                camera={{ aspect: innerWidth / innerHeight, fov: 60 }}
            >
                <Lights />
                <MilkyWay count={count} points={points} colors={colors} />
                <VoxelModel />
            </Canvas>
        </div>
    )
}
