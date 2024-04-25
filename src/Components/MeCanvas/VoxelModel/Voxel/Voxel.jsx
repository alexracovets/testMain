import React, { useRef } from "react";
import { Instance } from "@react-three/drei";
import PropTypes from 'prop-types';
import gsap from "gsap";

import useStorePage from "../../../../store/useStorePage";
import voxelsData from '../voxel.json';
import { useGSAP } from "@gsap/react";

const sizes = [0.208, 0.2687, 0.3525, 0.38];
const modelCoords = [
    {
        position: [6, -0.65, -5.5],
        rotation: [0, 0.6, 0.1]
    },
    {
        position: [-6, -0.4, -3.6],
        rotation: [-0.04, 0, 0]
    },
    {
        position: [7, -0.4, -5.5],
        rotation: [-0.02, 0.4, 0]
    },
    {
        position: [-7.4, 0.5, -6.7],
        rotation: [0.08, 0.13, 0]
    }
]
const Voxel = React.memo(({ index }) => {
    const instanceRef = useRef();
    const wrapperRef = useRef();
    const wrapperWRef = useRef();
    const activePage = useStorePage(state => state.activePage);

    useGSAP(() => {
        const instance = instanceRef.current;
        const position = [
            voxelsData[activePage][index * 3],
            voxelsData[activePage][index * 3 + 1],
            voxelsData[activePage][index * 3 + 2]
        ];

        const tl = gsap.timeline({
            ease: "expoScale(0.5,7,none)"
        });

        tl
            .to(instance.position, {
                x: (Math.random() - 0.5) * 10,
                y: (Math.random() - 0.5) * 10,
                z: (Math.random() - 0.5) * 10,
                duration: .5,
            })
            .to(instance.scale, {
                x: 0.01,
                y: 0.01,
                z: 0.01,
                duration: .5,
            }, "<")
            .to(instance.position, {
                x: position[0],
                y: position[1],
                z: position[2],
                duration: 1,
            })
            .to(instance.scale, {
                x: sizes[activePage],
                y: sizes[activePage],
                z: sizes[activePage],
                duration: 1
            }, "<")

    }, [activePage]);
    useGSAP(() => {
        const instance = wrapperWRef.current;
        const tl = gsap.timeline({
            ease: "expoScale(0.5,7,none)"
        })
        tl.to(instance.position, {
            x: modelCoords[activePage].position[0],
            y: modelCoords[activePage].position[1],
            z: modelCoords[activePage].position[2],
            delay: .5,
            duration: 1,
        })
        tl.to(instance.rotation, {
            x: modelCoords[activePage].rotation[0],
            y: modelCoords[activePage].rotation[1],
            z: modelCoords[activePage].rotation[2],
            duration: 1,
        }, "<")
    }, [activePage]);
    useGSAP(() => {
        const instance = wrapperRef.current;
        const tlPasive = gsap.timeline({
            ease: "expoScale(0.5,7,none)",
            repeat: -1,
        });
        const randomX = Math.random();
        const randomY = Math.random();
        const randomZ = Math.random();
        randomX < 0.3 && tlPasive.to(instance.position, {
            x: 0 + (Math.random() < 0.5 ? sizes[activePage] / 2 : -sizes[activePage] / 2),
            delay: Math.random(),
            duration: 1 + Math.random(),
        });
        randomY < 0.3 && tlPasive.to(instance.position, {
            y: 0 + (Math.random() < 0.5 ? sizes[activePage] / 2 : -sizes[activePage] / 2),
            delay: Math.random(),
            duration: 1 + Math.random(),
        });
        randomZ < 0.3 && tlPasive.to(instance.position, {
            z: 0 + (Math.random() < 0.5 ? sizes[activePage] / 2 : -sizes[activePage] / 2),
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
        <group ref={wrapperWRef}>
            <group ref={wrapperRef}  >
                <Instance
                    ref={instanceRef}
                    scale={[0, 0, 0]}
                />
            </group>
        </group>
    );
});
Voxel.displayName = 'Voxel';
Voxel.propTypes = {
    index: PropTypes.number,
    voxelsData: PropTypes.array
};

export default Voxel;