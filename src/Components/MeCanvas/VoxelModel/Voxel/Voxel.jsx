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
    const [active, setActive] = useState(false);

    useEffect(() => {
        const instance = instanceRef.current;
        const tl = gsap.timeline({
            onStart: () => setActive(true),
            onComplete: () => setActive(false)
        })
        tl.to(instance.position, {
            x: voxelsData[activePage][index * 3],
            y: voxelsData[activePage][index * 3 + 1],
            z: voxelsData[activePage][index * 3 + 2],
            ease: "expoScale(0.5,7,none)",
            duration: .5,
        })
        tl.to(instance.scale, {
            x: sizes[activePage],
            y: sizes[activePage],
            z: sizes[activePage],
            ease: "expoScale(0.5,7,none)",
            duration: .5,
        }, "<");

    }, [activePage, index])
    
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