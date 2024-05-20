import { NavLink, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

import Burger from "../Burger/Burger";

import s from '../Header.module.scss';

export default function Navigation({ isDesktop }) {
    const location = useLocation();

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
            {isDesktop ? <ul>
                {links.map((link, i) => {
                    return (
                        <li key={i}>
                            <NavLink to={link.path} className={location.pathname === link.path && s.active}>
                                {link.name}
                            </NavLink>
                        </li>
                    )
                })}
            </ul> :
                <Burger />
            }

        </nav>
    )
}

Navigation.propTypes = {
    isDesktop: PropTypes.bool
};