import { useEffect, useRef } from "react";
import PropTypes from 'prop-types';

import Navigation from "./Navigation/Navigation";
import FullMenu from "./FullMenu/FullMenu";
import Logo from "./Logo/Logo";

import useStoreMobileScroll from '../../store/useStoreMobileScroll';

import s from './Header.module.scss';
export default function Header({ isDesktop }) {
    const headerRef = useRef();
    const getHeaderHeight = useStoreMobileScroll((state) => state.getHeaderHeight);
    useEffect(() => {
        headerRef.current && getHeaderHeight(headerRef.current.clientHeight);
    }, [headerRef, getHeaderHeight])

    return (
        <header ref={headerRef}>
            <div className={s.wrapper}>
                <div className={s.header}>
                    <Logo isDesktop={isDesktop} />
                    <Navigation />
                </div>
            </div>
            <FullMenu isDesktop={isDesktop} />
        </header>
    )
}

Header.propTypes = {
    isDesktop: PropTypes.bool
};