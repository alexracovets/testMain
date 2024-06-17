import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';

import Navigation from "./Navigation/Navigation";
import FullMenu from "./FullMenu/FullMenu";
import Logo from "./Logo/Logo";

import useStoreMobileScroll from '../../store/useStoreMobileScroll';

import s from './Header.module.scss';
export default function Header({ isDesktop }) {
    const getHeaderHeight = useStoreMobileScroll((state) => state.getHeaderHeight);
    const scrollTop = useStoreMobileScroll((state) => state.scrollTop);
    const [position, setPosition] = useState(0);
    const [visible, setVisible] = useState(true);
    const headerRef = useRef();

    useEffect(() => {
        if (headerRef.current) {
            getHeaderHeight(headerRef.current.clientHeight);
        }
    }, [headerRef, getHeaderHeight]);

    useEffect(() => {
        if (position !== scrollTop) {
            setVisible(position > scrollTop);
            setPosition(scrollTop);
        }
    }, [scrollTop]);

    return (
        <header ref={headerRef}>
            <div className={visible ? s.visible + ' ' + s.wrapper : s.hidden + ' ' + s.wrapper}>
                <div className={s.header}>
                    <Logo isDesktop={isDesktop} />
                    <Navigation />
                </div>
            </div>
            <FullMenu isDesktop={isDesktop} />
        </header>
    );
}

Header.propTypes = {
    isDesktop: PropTypes.bool
};
