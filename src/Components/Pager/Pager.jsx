import { BrowserRouter } from "react-router-dom";
import { Html } from "@react-three/drei";

import PagerRoutes from "./PagerRoutes/PagerRoutes";

import s from './Pager.module.scss';
export default function Pager() {

    return (
        <Html wrapperClass={s.pager_wrapper} className={s.pager}>
            <BrowserRouter>
                <PagerRoutes />
            </BrowserRouter>
        </Html>
    )
} 