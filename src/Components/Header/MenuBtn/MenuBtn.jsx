import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import hover1 from '/sounds/hover1.wav';
import playSound from '../../../utils/playSound';

import useStoreNavigation from '../../../store/useStoreNavigation';

import s from './MenuBtn.module.scss';
import Logo from '../Logo/Logo';
export default function MenuBtn({ isDesktop }) {
    const setBurger = useStoreNavigation((state) => state.setBurger);
    const isBurger = useStoreNavigation((state) => state.isBurger);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const hover1Sound = new Audio(hover1);

    useEffect(() => {
        if (window.innerWidth > 744 && !isBurger) setIsActive(isHovered)
    }, [isHovered, isBurger])
    useEffect(() => setIsActive(isBurger), [isBurger]);

    return (
        <nav className={s.navigation}>
            <Logo isDesktop={isDesktop} />
            <div className={s.menu}
                onMouseEnter={() => {
                    setIsHovered(true);
                    setHasInteracted(true);
                    playSound(hover1Sound);
                }}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setBurger(!isBurger)}
            >
                <div className={isActive ? s.menu_text + ' ' + s.hide : s.menu_text}>Menu</div>
                <div className={s.menu_btn} onMouseEnter={() => playSound(hover1Sound)}>
                    <div className={`${s.figure} ${hasInteracted ? (isActive ? s.hover : s.unhover) : ''}`}></div>
                </div>
            </div>
        </nav>
    );
}

MenuBtn.propTypes = {
    isDesktop: PropTypes.bool
};
