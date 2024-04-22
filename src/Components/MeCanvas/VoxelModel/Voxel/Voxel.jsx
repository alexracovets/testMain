import { Instance } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types'; 
import { useSelector } from "react-redux";

const sizes = [0.15, 0.2267, 0.28, 0.316];

function Animation({ setScale, setPosition, index, voxelsData }) {
    const currentModel = useSelector((state) => state.statePages.activePage);

    useEffect(() => {
        setScale(sizes[currentModel])
        setPosition([voxelsData[currentModel][index * 3], voxelsData[currentModel][index * 3 + 1], voxelsData[currentModel][index * 3 + 2]])
    }, [currentModel, index, voxelsData, setScale, setPosition])
    return null
}

export default function Voxel({ index, voxelsData }) {
    const meshRef = useRef();
    const [scale, setScale] = useState(0);
    const [position, setPosition] = useState([0, 0, 0]) 
    return (
        <>
            <Animation setScale={setScale} setPosition={setPosition} voxelsData={voxelsData} index={index} />
            <Instance
                ref={meshRef}
                scale={scale}
                position={position}
            />
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
    index: PropTypes.number
}; 