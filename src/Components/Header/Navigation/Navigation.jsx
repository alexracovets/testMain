import PropTypes from 'prop-types';

import MenuBtn from '../MenuBtn/MenuBtn';

import s from '../Header.module.scss';
export default function Navigation() {

    return (
        <nav className={s.navigation}>
            <MenuBtn />
        </nav>
    )
}

Navigation.propTypes = {
    isDesktop: PropTypes.bool
};