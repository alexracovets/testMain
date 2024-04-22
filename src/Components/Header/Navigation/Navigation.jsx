import { useCallback, useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import s from '../Header.module.scss';
import { changeActivePage } from '../../../store/reducers/statePages';
import { useDispatch } from "react-redux";
export default function Navigation() {
    const [isBurger, setIsBurger] = useState(false);
    const location = useLocation();
    const dispatch = useDispatch();
    const pageRoutes = useMemo(() => ({
        '/': 0,
        '/about': 1,
        '/services': 2,
        '/industries': 3,
        '/contact': 0
    }), []);

    const checkPage = useCallback(() => {
        const pageId = pageRoutes[location.pathname] ?? -1;
        dispatch(changeActivePage(pageId));
    }, [location.pathname, dispatch, pageRoutes]);

    useEffect(() => {
        checkPage();
    }, [location.pathname, checkPage]);

    const links = [
        { path: "/services", name: "Services" },
        { path: "/industries", name: "Industries" },
        { path: "/contact", name: "Contact us" },
    ]

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
            <button className={isBurger ? s.burger + ' ' + s.active : s.burger} onClick={() => setIsBurger(!isBurger)}>
                <span></span>
                <span></span>
            </button>
        </nav>
    )
} 
