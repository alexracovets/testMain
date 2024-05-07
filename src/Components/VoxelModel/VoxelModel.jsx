import { useEffect, useMemo, useRef, useState } from "react";
import { TextureLoader, Vector3 } from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { Instances, Instance } from "@react-three/drei";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry";
import { easing } from 'maath';
// import Voxel from "./Voxel/Voxel";

const matcap = '/3.png';
const COUNT = 1000;
const sizes = [0.3, 0.38, 0.49, 0.54];
const step = 5;

import voxelsData from './voxel2.json';
import useActiveModel from "../../store/useActiveModel";
import { useControls } from "leva";
export default function VoxelModel() {
    const matcapTexture = useLoader(TextureLoader, matcap);
    const geometry = useMemo(() => new RoundedBoxGeometry(0.95, 0.95, 0.95, 1, .1), []);
    const activeModel = useActiveModel(state => state.activeModel);

    const instances = useRef({ children: [] });
    const instancesItem = useRef({ children: [] });
    const [isBoom, setIsBoom] = useState(false);
    const [animationStart, setAnimationStart] = useState(false);
    const startTime = useRef(0);

    const modelCoords = [
        {
            position: [6, -0.25, -8],
            rotation: [0, 0.6, 0]
        },
        {
            position: [-6, 0, -6],
            rotation: [0, 0, 0]
        },
        {
            position: [7, -0.5, -8],
            rotation: [0, 0.6, 0]
        },
        {
            position: [-7, 0, -10],
            rotation: [0, 0, 0]
        }
    ]

    useEffect(() => {
        setIsBoom(true);
        setTimeout(() => {
            setIsBoom(false);
        }, 300);
    }, [activeModel])

    useFrame((state, delta) => {
        instances.current.children.forEach((inst, idx) => {
            if (inst && voxelsData[activeModel]) {
                const targetPosition = new Vector3(
                    voxelsData[activeModel][idx * 3]
                    + modelCoords[activeModel].position[0]
                    ,
                    voxelsData[activeModel][idx * 3 + 1]
                    + modelCoords[activeModel].position[1]
                    ,
                    voxelsData[activeModel][idx * 3 + 2]
                    + modelCoords[activeModel].position[2]
                );
                const targetRotation = new Vector3(modelCoords[activeModel].rotation[0], modelCoords[activeModel].rotation[1], modelCoords[activeModel].rotation[2]);
                const randomPosition = new Vector3((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10);
                const targetScale = new Vector3(sizes[activeModel], sizes[activeModel], sizes[activeModel]);

                isBoom ?
                    easing.damp3(inst.position, randomPosition, 0.3, delta) :
                    easing.damp3(inst.position, targetPosition, 0.5, delta);
                isBoom ?
                    easing.damp3(inst.scale, [0, 0, 0], 0.3, delta) :
                    easing.damp3(inst.scale, targetScale, 0.5, delta)
                && easing.damp3(inst.rotation, targetRotation, 0.5, delta);
            }
        });
    });

    useFrame((state, delta) => {
        if (!animationStart) {
            setAnimationStart(true);
            startTime.current = state.clock.elapsedTime;
        }

        let elapsedTime = state.clock.elapsedTime - startTime.current;
        instancesItem.current.children.forEach((inst) => {

            const initialPosition = new Vector3(0, 0, 0);

            if (elapsedTime < 1) {
                let xMove = Math.random() < 0.3;
                let yMove = xMove && Math.random() < 0.3;
                let zMove = yMove && Math.random() < 0.3;

                let moveX = xMove ? (Math.random() < 0.5 ? step : -step) : 0;
                let moveY = yMove ? (Math.random() < 0.5 ? step : -step) : 0;
                let moveZ = zMove ? (Math.random() < 0.5 ? step : -step) : 0;

                const newPosition = new Vector3(initialPosition.x + moveX, initialPosition.y + moveY, initialPosition.z + moveZ);

                easing.damp3(inst.position, newPosition, 3, delta);
            } else if (elapsedTime >= 1 && elapsedTime < 1.1) {
                easing.damp3(inst.position, initialPosition, 3, delta);
            } else {
                setAnimationStart(false);
            }
        });
    });
    // const test = useControls({
    //     positionX: 7,
    //     positionY: -0.5,
    //     positionZ: -8,
    //     rotationX: 0,
    //     rotationY: 0.6,
    //     rotationZ: 0,
    // })

    return (
        <Instances
            limit={COUNT}
            range={COUNT}
            geometry={geometry}
            // position={[test.positionX, test.positionY, test.positionZ]}
            // rotation={[test.rotationX, test.rotationY, test.rotationZ]}
        >
            <meshMatcapMaterial
                matcap={matcapTexture}
            />
            {/* {Array(COUNT).fill().map((_, idx) =>
                <Voxel
                    key={idx}
                    index={idx}
                />
            )} */}
            {Array(COUNT).fill().map((_, idx) =>
                <group key={idx} ref={el => instancesItem.current.children[idx] = el}>
                    <Instance ref={el => instances.current.children[idx] = el} scale={[0, 0, 0]} />
                </group>
            )}
        </Instances>
    )
} 