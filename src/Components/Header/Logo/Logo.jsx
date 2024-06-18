import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

import logo from '/image/logo.svg';
import useStoreNavigation from '../../../store/useStoreNavigation';

import s from './Logo.module.scss';
export default function Logo({ isDesktop }) {
    const setBurger = useStoreNavigation((state) => state.setBurger);

    return (
        <NavLink to={isDesktop ? '/' : '/mobile'} className={s.logo} onClick={() => setBurger(false)}>
            <img src={logo} alt="logo" />
        </NavLink>
    )
}

Logo.propTypes = {
    isDesktop: PropTypes.bool
};