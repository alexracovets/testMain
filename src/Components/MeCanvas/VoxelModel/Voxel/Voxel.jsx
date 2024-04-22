import React, { useEffect, useRef, useState } from "react";
import { Instance } from "@react-three/drei";
import PropTypes from 'prop-types';
import gsap from "gsap";

import useStore from "../../../../store/store";
import voxelsData from '../voxel.json';

const sizes = [0.15, 0.2267, 0.28, 0.316];

const Voxel = React.memo(({ index }) => {
    const instanceRef = useRef();
    const activePage = useStore(state => state.activePage);
    const [currentPosition, setCurrentPosition] = useState(null);
    const tlNoramal = gsap.timeline({
        ease: "expoScale(0.5,7,none)",
    })
    const tlPasive = gsap.timeline({
        ease: "expoScale(0.5,7,none)",
        repeat: -1,
    });

    useEffect(() => {
        const instance = instanceRef.current;
        const position = [
            voxelsData[activePage][index * 3],
            voxelsData[activePage][index * 3 + 1],
            voxelsData[activePage][index * 3 + 2]
        ]
        setCurrentPosition(null)
        tlNoramal.to(instance.position, {
            x: position[0],
            y: position[1],
            z: position[2],
            duration: 1,
        })
        tlNoramal.to(instance.scale, {
            x: sizes[activePage],
            y: sizes[activePage],
            z: sizes[activePage],
            duration: 1,
            onComplete: () => setCurrentPosition(position)
        }, "<");
        return () => tlNoramal.kill()
    }, [activePage, index])

    useEffect(() => {
        const instance = instanceRef.current;
        if (currentPosition) {
            const randomX = Math.random();
            const randomY = Math.random();
            const randomZ = Math.random();
            randomX < 0.3 && tlPasive.to(instance.position, {
                x: currentPosition[0] + (Math.random() < 0.5 ? sizes[activePage] / 2 : -sizes[activePage] / 2),
                delay: Math.random(),
                duration: 1 + Math.random(),
            });
            randomY < 0.3 && tlPasive.to(instance.position, {
                y: currentPosition[1] + (Math.random() < 0.5 ? sizes[activePage] / 2 : -sizes[activePage] / 2),
                delay: Math.random(),
                duration: 1 + Math.random(),
            });
            randomZ < 0.3 && tlPasive.to(instance.position, {
                z: currentPosition[2] + (Math.random() < 0.5 ? sizes[activePage] / 2 : -sizes[activePage] / 2),
                delay: Math.random(),
                duration: 1 + Math.random(),
            });
            tlPasive.to(instance.position, {
                x: currentPosition[0],
                y: currentPosition[1],
                z: currentPosition[2],
                duration: 1.5,
            });
        }
        return () => tlPasive.kill()
    }, [currentPosition, activePage])
    return (
        <Instance
            ref={instanceRef}
            scale={[0, 0, 0]}
        />
    );
});
Voxel.displayName = 'Voxel';
Voxel.propTypes = {
    index: PropTypes.number,
    voxelsData: PropTypes.array
};

export default Voxel;