import { useCallback, useEffect, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";

import s from '../Header.module.scss';
import useStorePage from "../../../store/useStorePage";
import Burger from "../Burger/Burger";
export default function Navigation() { 
    const location = useLocation();
    const changeActivePage = useStorePage((state) => state.changeActivePage)
    const pageRoutes = useMemo(() => ({
        '/': 0,
        '/about': 1,
        '/services': 2,
        '/industries': 3,
        '/contact': 0
    }), []);
    const links = [
        { path: "/services", name: "Services" },
        { path: "/industries", name: "Industries" },
        { path: "/contact", name: "Contact us" },
    ]

    const checkPage = useCallback(() => {
        const pageId = pageRoutes[location.pathname] ?? -1;
        changeActivePage(pageId)
    }, [location.pathname, pageRoutes, changeActivePage]);

    useEffect(() => {
        checkPage();
    }, [location.pathname, checkPage]);


    return (
        <nav className={s.navigation}>
            <ul>
                {links.map((link, i) => {
                    return (
                        <li key={i}>
                            <NavLink to={link.path} className={location.pathname === link.path && s.active}>
                                {link.name}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
            <Burger />
        </nav>
    )
} 
