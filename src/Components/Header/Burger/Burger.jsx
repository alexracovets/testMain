import useStoreNavigation from '../../../store/useStoreNavigation';

import s from '../Header.module.scss';
export default function Burger() {
    const setBurger = useStoreNavigation((state) => state.setBurger);
    const isActive = useStoreNavigation((state) => state.isBurger);

    return (
        <button className={isActive ? s.burger + ' ' + s.active : s.burger} onClick={() => setBurger(!isActive)}>
            <span></span>
            <span></span>
        </button>
    )
} 
