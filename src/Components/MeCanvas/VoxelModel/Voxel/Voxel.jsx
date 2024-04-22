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
    const tlNoramal = gsap.timeline({})
    const tlPasive = gsap.timeline({});

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
            ease: "expoScale(0.5,7,none)",
            duration: .5,
        })
        tlNoramal.to(instance.scale, {
            x: sizes[activePage],
            y: sizes[activePage],
            z: sizes[activePage],
            ease: "expoScale(0.5,7,none)",
            duration: .5,
            onComplete: () => setCurrentPosition(position)
        }, "<");
        return () => tlNoramal.kill()
    }, [activePage, index])

    useEffect(() => {
        const instance = instanceRef.current;
        if (currentPosition) {
            tlPasive.to(instance.position, {
                x: currentPosition[0],
                y: currentPosition[1] + (Math.random() - 0.5),
                z: currentPosition[2],
                ease: "expoScale(0.5,7,none)",
                duration: 2,
            });
            tlPasive.to(instance.position, {
                x: currentPosition[0],
                y: currentPosition[1],
                z: currentPosition[2],
                ease: "expoScale(0.5,7,none)",
                duration: 2,
                delay: 2
            }, "<");
        }
        return () => tlPasive.kill()
    }, [currentPosition])
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