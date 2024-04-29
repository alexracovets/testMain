import { useMemo } from "react";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import { Instances } from "@react-three/drei";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry";

import Voxel from "./Voxel/Voxel";
const matcap = '/2.png';
const COUNT = 3000;
export default function VoxelModel() {
    const matcapTexture = useLoader(TextureLoader, matcap);
    const geometry = useMemo(() => new RoundedBoxGeometry(0.9, 0.9, 0.9, 2, .5), []);

    return (
        <Instances
            limit={COUNT}
            range={COUNT}
            geometry={geometry}
        >
            <meshMatcapMaterial matcap={matcapTexture} />
            {Array(COUNT).fill().map((_, idx) =>
                <Voxel
                    key={idx}
                    index={idx}
                />
            )}
        </Instances>
    )
} 