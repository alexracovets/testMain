import { Html } from "@react-three/drei";

import s from './MainDoodle.module.scss';
export default function MainDoodle() {
    return (
        <Html
            as='div'
            wrapperClass={s.doodle__wrapper}
            transform
            center
            zIndexRange={[1, 0]}
        >
            
        </Html>
    )
}