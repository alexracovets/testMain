import PropTypes from 'prop-types';
import Burger from "../Burger/Burger";

import useStoreNavigation from '../../../store/useStoreNavigation';

import s from '../Header.module.scss';
export default function Navigation({ isDesktop }) {
    const setBurger = useStoreNavigation((state) => state.setBurger);
    return (
        <nav className={s.navigation}>
            {isDesktop ? <>
                <div className={s.desktop_menu} onClick={() => setBurger(true)}>
                    Menu
                </div>
                <Burger />
            </>
                :
                <Burger />
            }

        </nav>
    )
}

Navigation.propTypes = {
    isDesktop: PropTypes.bool
};