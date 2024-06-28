import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import hover from '/sounds/hover1.wav';
import playSound from '../../../utils/playSound';

import useStoreNavigation from '../../../store/useStoreNavigation';
import useUserInteracted from '../../../store/useUserInteracted';

import s from './MenuBtn.module.scss';
import Logo from '../Logo/Logo';
export default function MenuBtn({ isDesktop }) {
    const userInteracted = useUserInteracted((state) => state.userInteracted);
    const setBurger = useStoreNavigation((state) => state.setBurger);
    const isBurger = useStoreNavigation((state) => state.isBurger);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const hoverSound = new Audio(hover);

    useEffect(() => {
        if (window.innerWidth > 744 && !isBurger) setIsActive(isHovered)
    }, [isHovered, isBurger])
    useEffect(() => setIsActive(isBurger), [isBurger]);

    const handleMouseEnter = () => {
        if (userInteracted) {
            hoverSound.currentTime = 0; // Запускаємо звук з початку
            hoverSound.play().catch(error => {
                console.error('Error during playback:', error);
            });
        }
    };
    return (
        <nav className={s.navigation}>
            <Logo isDesktop={isDesktop} />
            <div className={s.menu}
                onMouseEnter={() => {
                    setIsHovered(true);
                    setHasInteracted(true);
                    handleMouseEnter();
                    // playSound(hoverSound);
                }}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setBurger(!isBurger)}
            >
                <div className={isActive ? s.menu_text + ' ' + s.hide : s.menu_text}>Menu</div>
                <div
                    className={s.menu_btn}
                    // onMouseEnter={() => playSound(hoverSound)}
                    onMouseEnter={handleMouseEnter}
                >
                    <div className={`${s.figure} ${hasInteracted ? (isActive ? s.hover : s.unhover) : ''}`}></div>
                </div>
            </div>
        </nav>
    );
}

MenuBtn.propTypes = {
    isDesktop: PropTypes.bool
};
