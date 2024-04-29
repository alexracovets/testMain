import React, { useRef } from "react";
import { Instance } from "@react-three/drei";
import PropTypes from 'prop-types';
import gsap from "gsap";

import useStorePage from "../../../../store/useStorePage";
import voxelsData from '../voxel2.json';
import { useGSAP } from "@gsap/react";
const sizes2 = [0.208, 0.2687, 0.3525, 0.38];
const sizes = [0.24, 0.38, 0.49, 0.54];
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
        const instance2 = wrapperWRef.current;
        if (activePage !== -1) {
            const position = [
                voxelsData[activePage][index * 3],
                voxelsData[activePage][index * 3 + 1],
                voxelsData[activePage][index * 3 + 2]
            ];
            const size = sizes[activePage];
            const tl = gsap.timeline({
                ease: "expoScale(0.5,7,none)"
            });
            const tl2 = gsap.timeline({
                ease: "expoScale(0.5,7,none)"
            })

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
                    x: size,
                    y: size,
                    z: size,
                    duration: 1
                }, "<")

            tl2
                .to(instance2.position, {
                    x: modelCoords[activePage].position[0],
                    y: modelCoords[activePage].position[1],
                    z: modelCoords[activePage].position[2],
                    delay: .5,
                    duration: 1,
                })
                .to(instance2.rotation, {
                    x: modelCoords[activePage].rotation[0],
                    y: modelCoords[activePage].rotation[1],
                    z: modelCoords[activePage].rotation[2],
                    duration: 1,
                }, "<")

        } else {
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
        }

    }, [activePage]);

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