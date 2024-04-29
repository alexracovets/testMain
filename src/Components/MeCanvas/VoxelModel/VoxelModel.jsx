import { useEffect, useMemo } from "react";
import { AdditiveBlending, TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import { Instances } from "@react-three/drei";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry";

import Voxel from "./Voxel/Voxel";
import loadModels from "../../../utils/voxels/loadModels";
const matcap = '/1.jpg';
const COUNT = 3000;
export default function VoxelModel() {
    const matcapTexture = useLoader(TextureLoader, matcap);
    const geometry = useMemo(() => new RoundedBoxGeometry(0.9, 0.9, 0.9, 2, .1), []);
    // useEffect(() => {
    //     loadModels(3, 1000, 0.54);
    // }, [])
    return (
        <group>
            <Instances
                limit={COUNT}
                range={COUNT}
                geometry={geometry}
            >
                <meshMatcapMaterial
                    matcap={matcapTexture}
                />
                {Array(COUNT).fill().map((_, idx) =>
                    <Voxel
                        key={idx}
                        index={idx}
                    />
                )}
            </Instances>
        </group>
    )
} 