import { Instance } from "@react-three/drei";
import PropTypes from 'prop-types';
import { useSpring, a } from '@react-spring/three';

const sizes = [0.15, 0.2267, 0.28, 0.316];
import voxelsData from '../voxel.json';
import useStore from "../../../../store/store";

export default function Voxel({ index }) {
    const activePage = useStore((state) => state.activePage);
    const { positionSpring, scaleSpring } = useSpring({
        positionSpring: [voxelsData[activePage][index * 3], voxelsData[activePage][index * 3 + 1], voxelsData[activePage][index * 3 + 2]],
        scaleSpring: sizes[activePage]
    });
    console.log('1')
    return (
        <a.group position={positionSpring} scale={scaleSpring}>
            <Instance />
        </a.group>
    )
}
Voxel.propTypes = {
    index: PropTypes.number,
    voxelsData: PropTypes.array
};