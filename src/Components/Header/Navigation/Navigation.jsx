import PropTypes from 'prop-types';
import Burger from "../Burger/Burger"; 

import s from '../Header.module.scss';
import MenuBtn from '../MenuBtn/MenuBtn';
export default function Navigation({ isDesktop }) {
 
    return (
        <nav className={s.navigation}>
            {isDesktop ? <> 
                <MenuBtn /> 
            </>
                :
                // <Burger />
                <MenuBtn /> 
            }

        </nav>
    )
}

Navigation.propTypes = {
    isDesktop: PropTypes.bool
};