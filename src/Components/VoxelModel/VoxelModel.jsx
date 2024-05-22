import { useEffect, useMemo, useRef, useState } from "react";
import { Box3, TextureLoader, Vector3 } from "three";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { Instances, Instance } from "@react-three/drei";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry";
import { easing } from 'maath';
// import Voxel from "./Voxel/Voxel";

const matcap = '/default.png';
// const matcap = '/04.png';
const COUNT = 1000;
const sizes = [0.3, 0.38, 0.49, 0.54];
const step = 5;

import voxelsData from './voxel2.json';
import useActiveModel from "../../store/useActiveModel";

const modelCoords = [
    {
        rotation: [0, Math.PI / 3, 0],
        target: 1
    },
    {
        rotation: [0, 0, 0],
        target: -1
    },
    {
        rotation: [0, 0.6, 0],
        target: 1
    },
    {
        rotation: [0, 0, 0],
        target: -1
    }
]

export default function VoxelModel() {
    const geometry = useMemo(() => new RoundedBoxGeometry(0.95, 0.95, 0.95, 1, .1), []);
    const activeModel = useActiveModel(state => state.activeModel);
    const matcapTexture = useLoader(TextureLoader, matcap);
    const { size, viewport } = useThree();

    const [currentTexture, setCurrentTexture] = useState(matcapTexture);
    const [animationStart, setAnimationStart] = useState(false);
    const [isBoom, setIsBoom] = useState(false);

    const instancesItem = useRef({ children: [] });
    const instances = useRef({ children: [] });
    const mainInstances = useRef()
    const startTime = useRef(0);

    useEffect(() => {
        const loader = new TextureLoader();
        loader.load(`/default.png`, (texture) => setCurrentTexture(texture));
    }, []);

    useEffect(() => {
        setIsBoom(true);
        setTimeout(() => {
            setIsBoom(false);
        }, 300);
    }, [activeModel])

    useFrame((state, delta) => {

        if (modelCoords[activeModel] && mainInstances && mainInstances.current) {

            const targetRotation = new Vector3(
                0,
                modelCoords[activeModel].rotation[1],
                0
            );
            const targetPosition = new Vector3(
                (viewport.width / 2 - viewport.width / 4) * modelCoords[activeModel].target,
                0,
                0
            );
            easing.damp3(mainInstances.current.rotation, targetRotation, 0.5, delta);
            easing.damp3(mainInstances.current.position, targetPosition, 0.5, delta);
        }

        instances.current.children.forEach((inst, idx) => {
            if (inst && voxelsData[activeModel]) {
                const targetPosition = new Vector3(voxelsData[activeModel][idx * 3], voxelsData[activeModel][idx * 3 + 1], voxelsData[activeModel][idx * 3 + 2]);
                const randomPosition = new Vector3((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10);
                const targetScale = new Vector3(sizes[activeModel], sizes[activeModel], sizes[activeModel]);

                isBoom ?
                    easing.damp3(inst.position, randomPosition, 0.3, delta) :
                    easing.damp3(inst.position, targetPosition, 0.5, delta);
                isBoom ?
                    easing.damp3(inst.scale, [0, 0, 0], 0.3, delta) :
                    easing.damp3(inst.scale, targetScale, 0.5, delta)
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

    return (
        <Instances
            limit={COUNT}
            range={COUNT}
            geometry={geometry}
            ref={mainInstances}
            scale={0.35}
        >
            <meshMatcapMaterial
                matcap={currentTexture}
            />
            {Array(COUNT).fill().map((_, idx) =>
                <group key={idx} ref={el => instancesItem.current.children[idx] = el}>
                    <Instance ref={el => instances.current.children[idx] = el} scale={[0, 0, 0]} />
                </group>
            )}
        </Instances>
    )
} 