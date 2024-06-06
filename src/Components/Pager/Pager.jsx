import { BrowserRouter } from "react-router-dom";
import { Html } from "@react-three/drei";

import PagerRoutes from "./PagerRoutes/PagerRoutes";
import useLoader from '../../store/useLoader';

import s from './Pager.module.scss';
export default function Pager() {
    const isLoaded = useLoader((state) => state.isLoaded);

    return (
        <Html wrapperClass={isLoaded ? s.pager_wrapper + ' ' + s.active : s.pager_wrapper} className={s.pager}>
            <BrowserRouter>
                <PagerRoutes />
            </BrowserRouter>
        </Html>
    )
} 