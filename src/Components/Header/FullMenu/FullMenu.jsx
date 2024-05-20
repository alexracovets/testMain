import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

import useStoreNavigation from '../../../store/useStoreNavigation';
import useAnchorScroll from '../../../store/useAnchorScroll';

import s from './FullMenu.module.scss';

export default function FullMenu({ isDesktop }) {
    const isActive = useStoreNavigation((state) => state.isBurger);
    const setBurger = useStoreNavigation((state) => state.setBurger);
    const getSection = useAnchorScroll((state) => state.getSection);
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
                {isDesktop ? links.map((link, i) => {
                    return (
                        <li key={i} onClick={() => setBurger(false)}>
                            <NavLink to={link.path} className={location.pathname === link.path && s.active}>
                                {link.name}
                            </NavLink>
                        </li>
                    )
                }) :
                    <>
                        <li><NavLink to={'/mobile'} onClick={() => anchorLink('about')} > About </NavLink></li>
                        <li><NavLink to={'/mobile'} onClick={() => anchorLink('services')} > Services </NavLink></li>
                        <li><NavLink to={'/mobile'} onClick={() => anchorLink('industries')} > Industries </NavLink></li>
                        <li><NavLink to={'/mobile/projects'} onClick={() => setBurger(false)}> Projects </NavLink></li>
                        <li><NavLink to={'/mobile/q&a'} onClick={() => setBurger(false)}> Q&A </NavLink></li>
                        <li><NavLink onClick={() => anchorLink('contacts')} > Contacts </NavLink></li>
                    </>
                }

            </ul>
            <div className={s.bottom}>

            </div>
        </div>
    )
}

FullMenu.propTypes = {
    isDesktop: PropTypes.bool
};