import Navigation from "./Navigation/Navigation";
import Logo from "./Logo/Logo";
import { useEffect, useRef } from "react";

import FullMenu from "./FullMenu/FullMenu";


import useStoreMobileScroll from '../../store/useStoreMobileScroll';
import s from './Header.module.scss';
export default function Header() {
    const headerRef = useRef();
    const getHeaderHeight = useStoreMobileScroll((state) => state.getHeaderHeight);
    useEffect(() => {
        headerRef.current && getHeaderHeight(headerRef.current.clientHeight);
    }, [headerRef, getHeaderHeight])

    return (
        <header ref={headerRef}>
            <div className={s.wrapper}>
                <div className={s.header}>
                    <Logo />
                    <Navigation />
                </div>
            </div>
            <FullMenu />
        </header>
    )
} 
