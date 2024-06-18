import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';

import FullMenu from "./FullMenu/FullMenu";
import MenuBtn from "./MenuBtn/MenuBtn";

import useStoreMobileScroll from '../../store/useStoreMobileScroll';

import s from './Header.module.scss';
export default function Header({ isDesktop }) {
    const getHeaderHeight = useStoreMobileScroll((state) => state.getHeaderHeight);
    const scrollTop = useStoreMobileScroll((state) => state.scrollTop);
    const headerRef = useRef();
    const [visible, setVisible] = useState(true);
    const [position, setPosition] = useState(0);

    useEffect(() => {
        if (headerRef.current) getHeaderHeight(headerRef.current.clientHeight);
    }, [headerRef, getHeaderHeight]);

    useEffect(() => {
        if ((position !== scrollTop) && (scrollTop > 100)) { 
            setVisible(position > scrollTop);
            setPosition(scrollTop);
        } else setVisible(true)
    }, [scrollTop]);

    return (
        <header ref={headerRef} className={visible ? s.visible + ' ' + s.header : s.hidden + ' ' + s.header}>
            <MenuBtn />
            <FullMenu isDesktop={isDesktop} />
        </header>
    );
}

Header.propTypes = {
    isDesktop: PropTypes.bool
};
