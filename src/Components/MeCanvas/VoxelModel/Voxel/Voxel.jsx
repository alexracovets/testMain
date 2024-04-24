import { useEffect, useMemo, useRef, useState } from "react";
import { Instance } from "@react-three/drei";
import PropTypes from 'prop-types';
import gsap from "gsap";

import voxelsData from '../voxel.json';
import { useLocation } from "react-router-dom";

const sizes = [0.15, 0.2267, 0.28, 0.316];

function Voxel({ index }) {
    const location = useLocation().pathname;
    const instanceRef = useRef();
    const [currentPosition, setCurrentPosition] = useState(null);
    const pageRoutes = useMemo(() => ({
        '/': 0,
        '/about': 1,
        '/services': 2,
        '/industries': 3,
        '/contact': 0
    }), []);
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
            voxelsData[pageRoutes[location] ?? -1][index * 3],
            voxelsData[pageRoutes[location] ?? -1][index * 3 + 1],
            voxelsData[pageRoutes[location] ?? -1][index * 3 + 2]
        ]
        setCurrentPosition(null);
        tlPasive.kill()
        tlNoramal.to(instance.position, {
            x: (Math.random() - 0.5) * 10,
            y: (Math.random() - 0.5) * 10,
            z: (Math.random() - 0.5) * 10,
            duration: 1,
        })
        tlNoramal.to(instance.scale, {
            x: 0.01,
            y: 0.01,
            z: 0.01,
            duration: 1,
        }, "<");
        tlNoramal.to(instance.position, {
            x: position[0],
            y: position[1],
            z: position[2],
            duration: 1,
        })
        tlNoramal.to(instance.scale, {
            x: sizes[pageRoutes[location] ?? -1],
            y: sizes[pageRoutes[location] ?? -1],
            z: sizes[pageRoutes[location] ?? -1],
            duration: 1,
            onComplete: () => setCurrentPosition(position)
        }, "<");
        return () => tlNoramal.kill()
    }, [location])

    useEffect(() => {
        const instance = instanceRef.current;
        if (currentPosition) {
            const randomX = Math.random();
            const randomY = Math.random();
            const randomZ = Math.random();
            randomX < 0.3 && tlPasive.to(instance.position, {
                x: currentPosition[0] + (Math.random() < 0.5 ? sizes[pageRoutes[location] ?? -1] / 2 : -sizes[pageRoutes[location] ?? -1] / 2),
                delay: Math.random(),
                duration: 1 + Math.random(),
            });
            randomY < 0.3 && tlPasive.to(instance.position, {
                y: currentPosition[1] + (Math.random() < 0.5 ? sizes[pageRoutes[location] ?? -1] / 2 : -sizes[pageRoutes[location] ?? -1] / 2),
                delay: Math.random(),
                duration: 1 + Math.random(),
            });
            randomZ < 0.3 && tlPasive.to(instance.position, {
                z: currentPosition[2] + (Math.random() < 0.5 ? sizes[pageRoutes[location] ?? -1] / 2 : -sizes[pageRoutes[location] ?? -1] / 2),
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
    }, [currentPosition, location])
    return (
        <Instance
            ref={instanceRef}
            scale={[0, 0, 0]}
        />
    );
}
Voxel.propTypes = {
    index: PropTypes.number,
    voxelsData: PropTypes.array
};

export default Voxel;