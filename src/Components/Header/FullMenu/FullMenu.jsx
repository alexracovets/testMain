import { NavLink, Link } from "react-router-dom";
import PropTypes from 'prop-types';

import useStoreNavigation from '../../../store/useStoreNavigation';
import useAnchorScroll from '../../../store/useAnchorScroll';
import playSound from "../../../utils/playSound";
import hover1 from '/sounds/hover1.wav';

import facebook from '/image/icons/social/facebook.svg';
import instagram from '/image/icons/social/instagram.svg';
import linkedin from '/image/icons/social/linkedin.svg';

import s from './FullMenu.module.scss';
export default function FullMenu({ isDesktop }) {
    const isActive = useStoreNavigation((state) => state.isBurger);
    const setBurger = useStoreNavigation((state) => state.setBurger);
    const getSection = useAnchorScroll((state) => state.getSection);
    const hover1Sound = new Audio(hover1);

    const links = [
        { path: "/services", name: "Services" },
        { path: "/cases", name: "Сases" },
        { path: "/about", name: "About Us" },
        { path: "/q&a", name: "Q&A" },
        { path: "/contact", name: "Contact Us" }
    ]

    const social = [
        { path: 'https://www.instagram.com/spotium360?igsh=MXMzcDJnaDR6ZDdmcw%3D%3D&utm_source=qr', name: 'instagram', image: instagram },
        { path: 'https://www.facebook.com/share/gCgVnDrZshvm25W4/?mibextid=LQQJ4d', name: 'facebook', image: facebook },
        { path: 'https://www.linkedin.com/company/spotium-360/', name: 'linkedin', image: linkedin }
    ]

    const anchorLink = (name) => {
        getSection(name);
        setBurger(false);
    }

    return (
        <div className={isActive ? s.full_menu__wrapper + ' ' + s.active : s.full_menu__wrapper} onClick={() => setBurger(false)}>
            <div className={s.full_menu} onClick={(e) => e.stopPropagation()}>
                <ul>
                    {isDesktop ? links.map((link, i) => {
                        return (
                            <li key={i} onClick={() => setBurger(false)}
                                onMouseEnter={() => playSound(hover1Sound)}
                            >
                                <NavLink to={link.path} className={location.pathname === link.path && s.active}>
                                    {link.name}
                                </NavLink>
                            </li>
                        )
                    }) :
                        <>
                            <li onMouseEnter={() => playSound(hover1Sound)}><NavLink to={'/mobile'} onClick={() => anchorLink('services')} > Services </NavLink></li>
                            <li onMouseEnter={() => playSound(hover1Sound)}><NavLink to={'/mobile/cases'} onClick={() => setBurger(false)}> Сases </NavLink></li>
                            <li onMouseEnter={() => playSound(hover1Sound)}><NavLink to={'/mobile'} onClick={() => anchorLink('about')} > About Us</NavLink></li>
                            <li onMouseEnter={() => playSound(hover1Sound)}><NavLink to={'/mobile/q&a'} onClick={() => setBurger(false)}> Q&A </NavLink></li>
                            <li onMouseEnter={() => playSound(hover1Sound)}><NavLink onClick={() => anchorLink('contacts')} > Contacts Us</NavLink></li>
                        </>
                    }
                </ul>
                <div className={s.bottom}>
                    {social.map((link, idx) => {
                        return <Link target="_blank" key={idx} to={link.path}><img src={link.image} alt={link.name} /></Link>
                    })}
                </div>
            </div>
        </div>
    )
}

FullMenu.propTypes = {
    isDesktop: PropTypes.bool
};