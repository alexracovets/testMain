import { NavLink, useLocation } from "react-router-dom";

import s from '../Header.module.scss';
import Burger from "../Burger/Burger";
export default function Navigation() {
    const location = useLocation();

    const links = [
        { path: "/about", name: "About" },
        { path: "/services", name: "Services" },
        { path: "/industries", name: "Industries" },
        // { path: "/projects", name: "Projects" },
        // { path: "/q&a", name: "Q&A" },
        { path: "/contact", name: "Contact us" },
    ]

    return (
        <nav className={s.navigation}>
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
            <Burger />
        </nav>
    )
} 
