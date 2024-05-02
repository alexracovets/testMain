import PropTypes from 'prop-types';
import { TextureLoader, Vector3 } from "three";
import { useEffect, useMemo, useRef } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { Instances } from "@react-three/drei";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry";

const matcap = '/3.png';
const COUNT = 1000;
import VoxelMobile from "./VoxelMobile/VoxelMobile";
export default function MobileModel({ model }) {
    const matcapTexture = useLoader(TextureLoader, matcap);
    const geometry = useMemo(() => new RoundedBoxGeometry(0.95, 0.95, 0.95, 2, .1), []);
    const firstSection = useRef();
    const { camera, size } = useThree();

    const modelsCoords = [
        {
            position: [0, 0, -3],
            rotation: [0.19, -1.87, -0.02]
        },
        {
            position: [0, 0, 0],
            rotation: [0, 0, 0]
        },
        {
            position: [0, 0.16, -3.5],
            rotation: [0.01, 1.05, -0.03]
        },
        {
            position: [0, 1, -5.5],
            rotation: [0.01, 1.54, 0.02]
        }
    ]

    return (
        <>
            {
                <Instances
                    ref={firstSection}
                    limit={COUNT}
                    range={COUNT}
                    geometry={geometry}
                    position={modelsCoords[model].position}
                    rotation={modelsCoords[model].rotation}
                >
                    <meshMatcapMaterial
                        matcap={matcapTexture}
                    />
                    {Array(COUNT).fill().map((_, idx) =>
                        <VoxelMobile key={idx} index={idx} model={model} />
                    )}
                </Instances >
            }

        </>
    )
}

MobileModel.propTypes = {
    model: PropTypes.number
}