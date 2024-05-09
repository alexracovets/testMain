import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";

import s from './Header.module.scss';
import FullMenu from "./FullMenu/FullMenu";
import { useEffect, useRef } from "react";

export default function Header() {
    const headerRef = useRef(null);
    useEffect(() => {
        if (headerRef) {
            console.log(headerRef.current.clientHeight)
        }
    }, [headerRef])
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
