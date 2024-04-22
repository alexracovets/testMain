import { Instance } from "@react-three/drei";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { useSpring, a } from '@react-spring/three';

const sizes = [0.15, 0.2267, 0.28, 0.316];
import voxelsData from '../voxel.json';
function Animation({ setScale, setPosition, index }) {
    const currentModel = useSelector((state) => state.statePages.activePage);

    useEffect(() => {
        setScale(sizes[currentModel])
        setPosition([voxelsData[currentModel][index * 3], voxelsData[currentModel][index * 3 + 1], voxelsData[currentModel][index * 3 + 2]])
    }, [currentModel, index, setScale, setPosition])
    return null
}

export default function Voxel({ index }) {
    const [scale, setScale] = useState(0);
    const [position, setPosition] = useState([0, 0, 0]);

    const { positionSpring, scaleSpring } = useSpring({
        positionSpring: position,
        scaleSpring: scale
    });

    return (
        <>
            <Animation setScale={setScale} setPosition={setPosition} index={index} />
            <a.group position={positionSpring} scale={scaleSpring}>
                <Instance />
            </a.group>
        </>
    )
}
Voxel.propTypes = {
    index: PropTypes.number,
    voxelsData: PropTypes.array
};
Animation.propTypes = {
    setScale: PropTypes.func,
    setPosition: PropTypes.func,
    index: PropTypes.number,
    voxelsData: PropTypes.array
}; 