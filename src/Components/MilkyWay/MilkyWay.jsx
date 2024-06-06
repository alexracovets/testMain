
import { useEffect, useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { AdditiveBlending, TextureLoader } from "three";

const count = 10000;
import getMilkyWayPoints from "../../utils/milky/getMilkyWayPoints";
export default function MilkyWay() {
    const texture = useLoader(TextureLoader, '/texture/ball/ball.png');
    const [points, setPoints] = useState(null);
    const [colors, setColors] = useState(null);
    const milkyWayRef = useRef();


    useEffect(() => {
        const float = getMilkyWayPoints(count);
        setPoints(float.points);
        setColors(float.colors)
    }, [])

    useFrame(({ clock }) => {
        if (milkyWayRef && milkyWayRef.current) milkyWayRef.current.rotation.z = clock.getElapsedTime() * 0.02;
    })

    return (
        <points ref={milkyWayRef} rotation={[Math.PI / 2, Math.PI / 8, 0]}>
            <bufferGeometry attach="geometry" >
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={points}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={count}
                    array={colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                attach="material"
                size={0.09}
                map={texture}
                depthWrite={false}
                blending={AdditiveBlending}
                vertexColors={true}
            />
        </points>
    )
}