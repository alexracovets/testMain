import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import s from '../Header.module.scss';
export default function Navigation() {
    const [isBurger, setIsBurger] = useState(false);
    const location = useLocation();

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
