import { NavLink } from "react-router-dom";

import logo from '/image/logo.svg';

import s from '../Header.module.scss';

export default function Logo() {
    return (
        <NavLink to={'/'} className={s.logo}>
            <img src={logo} alt="logo" />
        </NavLink>
    )
} 
