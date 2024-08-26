import { BrowserRouter } from "react-router-dom";
import { Html } from "@react-three/drei";
import { I18nextProvider } from 'react-i18next';

import PagerRoutes from "./PagerRoutes/PagerRoutes";
import useLoader from '../../store/useLoader';
import i18n from "../../locales/i18n";

import s from './Pager.module.scss';
export default function Pager() {
    const isLoaded = useLoader((state) => state.isLoaded);

    return (
        <Html wrapperClass={isLoaded ? s.pager_wrapper + ' ' + s.active : s.pager_wrapper} className={s.pager}>
            <BrowserRouter>
                <I18nextProvider i18n={i18n}>
                    <PagerRoutes />
                </I18nextProvider>
            </BrowserRouter>
        </Html>
    )
} 