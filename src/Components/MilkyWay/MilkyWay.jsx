
import { useEffect, useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { AdditiveBlending, TextureLoader } from "three";

const count = 3000;
import getMilkyWayPoints from "../../utils/milky/getMilkyWayPoints";
import ball from '/texture/ball/ball.png';

export default function MilkyWay() {
    const texture = useLoader(TextureLoader, ball);
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
        <>
            {
                points && colors && <points ref={milkyWayRef} rotation={[Math.PI / 2, Math.PI / 8, 0]} scale={0.9}>
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
                        size={0.2}
                        map={texture}
                        depthWrite={false}
                        blending={AdditiveBlending}
                        vertexColors={true}
                    />
                </points>
            }
        </>
    )
} 