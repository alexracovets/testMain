
import { Instance } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import PropTypes from 'prop-types';
import gsap from "gsap";

import voxelsData from '../voxel2.json';
import useActiveModel from "../../../store/useActiveModel";

// const sizes1 = [0.208, 0.2687, 0.3525, 0.38];
const sizes = [0.3, 0.38, 0.49, 0.54];
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
    const activeModel = useActiveModel(state => state.activeModel);

    useGSAP(() => {
        const instance = instanceRef.current;
        const instance2 = wrapperWRef.current;
        if (activeModel !== -1) {
            const position = [
                voxelsData[activeModel][index * 3],
                voxelsData[activeModel][index * 3 + 1],
                voxelsData[activeModel][index * 3 + 2]
            ];
            const size = sizes[activeModel];
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
                    x: modelCoords[activeModel].position[0],
                    y: modelCoords[activeModel].position[1],
                    z: modelCoords[activeModel].position[2],
                    delay: .5,
                    duration: 1,
                })
                .to(instance2.rotation, {
                    x: modelCoords[activeModel].rotation[0],
                    y: modelCoords[activeModel].rotation[1],
                    z: modelCoords[activeModel].rotation[2],
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

    }, [activeModel]);

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