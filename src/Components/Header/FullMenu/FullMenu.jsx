import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';

import useStoreNavigation from '../../../store/useStoreNavigation';
import useAnchorScroll from '../../../store/useAnchorScroll';

import s from './FullMenu.module.scss';
import { useState } from "react";
export default function FullMenu() {
    const isActive = useStoreNavigation((state) => state.isBurger);
    const setBurger = useStoreNavigation((state) => state.setBurger);
    const getSection = useAnchorScroll((state) => state.getSection);
    const [isMobile, setIsMobile] = useState(false);
    const links = [
        { path: "/about", name: "About" },
        { path: "/services", name: "Services" },
        { path: "/industries", name: "Industries" },
        { path: "/projects", name: "Projects" },
        { path: "/q&a", name: "Q&A" },
        { path: "/contact", name: "Contact us" }
    ]

    const anchorLink = (name) => {
        getSection(name);
        setBurger(false);
    }

    return (
        <div className={isActive ? s.full_menu + ' ' + s.active : s.full_menu}>
            <ul>
                {links.map((link, i) => {
                    return (
                        <li key={i} onClick={() => setBurger(false)}>
                            <NavLink to={link.path} className={location.pathname === link.path && s.active}>
                                {link.name}
                            </NavLink>
                        </li>
                    )
                })}
                {/* {isMobile && <> */}
                <li>
                    <NavLink to="/mobile" onClick={() => anchorLink('about')} >
                        Test 1
                    </NavLink>
                </li>
                {/* </>} */}
            </ul>
            <div className={s.bottom}>

            </div>
        </div>
    )
} 
