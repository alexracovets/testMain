import { useMemo } from "react";
import { BoxGeometry, TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import { Instances } from "@react-three/drei";

import Voxel from "./Voxel/Voxel";
import voxelsData from './voxel.json';
const matcap = '/3.png';
const COUNT = 5000;
export default function VoxelModel() {
    const matcapTexture = useLoader(TextureLoader, matcap);
    const geometry = useMemo(() => new BoxGeometry(0.9, 0.9, 0.9), []);
    const rotation = useMemo(() => [0, 0.6, 0], []);
    const position = useMemo(() => [5, -0.40, -4.20], []);

    return (
        <Instances
            limit={COUNT}
            range={COUNT}
            geometry={geometry}
            rotation={rotation}
            position={position}
        >
            <meshMatcapMaterial matcap={matcapTexture} />
            {Array(COUNT).fill().map((_, idx) =>
                <Voxel
                    key={idx}
                    index={idx}
                    voxelsData={voxelsData}
                />
            )}
        </Instances>
    )
} 