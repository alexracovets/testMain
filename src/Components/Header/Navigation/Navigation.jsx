import { NavLink, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

import Burger from "../Burger/Burger";

import s from '../Header.module.scss';
import { useEffect, useRef } from "react";

import useStoreNavigation from '../../../store/useStoreNavigation';

export default function Navigation({ isDesktop }) {
    const location = useLocation();
    const setBurger = useStoreNavigation((state) => state.setBurger);
    const isActive = useStoreNavigation((state) => state.isBurger);
    const links = [
        { path: "/about", name: "About" },
        { path: "/services", name: "Services" },
        { path: "/industries", name: "Industries" },
        { path: "/projects", name: "Projects" },
        { path: "/q&a", name: "Q&A" },
        { path: "/contact", name: "Contact us" },
    ] 
    return (
        <nav className={s.navigation}>
            {isDesktop ? <>
                {/* <ul>
                    {links.map((link, i) => {
                        return (
                            <li key={i}>
                                <NavLink to={link.path} className={location.pathname === link.path && s.active}>
                                    {link.name}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul> */}
                <div className={s.desktop_menu} onClick={() => setBurger(true)}>
                    Menu
                </div>
                <Burger />
            </>
                :
                <Burger />
            }

        </nav>
    )
}

Navigation.propTypes = {
    isDesktop: PropTypes.bool
};