import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

import logo from '/image/logo.svg';

import s from '../Header.module.scss';

export default function Logo({ isDesktop }) {
    return (
        <NavLink to={isDesktop ? '/' : '/mobile'} className={s.logo}>
            <img src={logo} alt="logo" />
        </NavLink>
    )
}

Logo.propTypes = {
    isDesktop: PropTypes.bool
};