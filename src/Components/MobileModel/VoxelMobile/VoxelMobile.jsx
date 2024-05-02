import gsap from "gsap";
import PropTypes from 'prop-types';
import { useRef } from "react";
import { Instance } from "@react-three/drei";

const sizes = [0.3, 0.38, 0.49, 0.54];
import voxelsData from './voxel.json';
import { useGSAP } from '@gsap/react';

export default function VoxelMobile({ index, model }) {
    const wrapperRef = useRef();
    useGSAP(() => {
        const step = 0.5;
        const instance = wrapperRef.current;
        const tlPasive = gsap.timeline({
            ease: "expoScale(0.5,7,none)",
            repeat: -1,
        });
        const randomX = Math.random();
        const randomY = Math.random();
        const randomZ = Math.random();

        const position = [
            (Math.random() < 0.5 ? step / 2 : -step / 2),
            (Math.random() < 0.5 ? step / 2 : -step / 2),
            (Math.random() < 0.5 ? step / 2 : -step / 2)
        ]

        randomX < 0.3 && tlPasive.to(instance.position, {
            x: position[0],
            delay: Math.random(),
            duration: 1 + Math.random(),
        });
        randomY < 0.3 && tlPasive.to(instance.position, {
            y: position[1],
            delay: Math.random(),
            duration: 1 + Math.random(),
        });
        randomZ < 0.3 && tlPasive.to(instance.position, {
            z: position[2],
            delay: Math.random(),
            duration: 1 + Math.random(),
        });
        tlPasive.to(instance.position, {
            x: 0,
            y: 0,
            z: 0,
            duration: 1.5,
        });
    }, [])

    return (
        <group ref={wrapperRef}>
            <Instance
                position={[voxelsData[model][index * 3], voxelsData[model][index * 3 + 1], voxelsData[model][index * 3 + 2]]}
                scale={sizes[model]}
            />
        </group>
    )
}

VoxelMobile.propTypes = {
    model: PropTypes.number,
    index: PropTypes.number
}