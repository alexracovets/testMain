import { useMemo } from "react";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import { Instances } from "@react-three/drei";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry";

import Voxel from "./Voxel/Voxel";
const matcap = '/3.png';
const COUNT = 1000;
export default function VoxelModel() {
    const matcapTexture = useLoader(TextureLoader, matcap);
    const geometry = useMemo(() => new RoundedBoxGeometry(0.95, 0.95, 0.95, 2, .1), []);

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