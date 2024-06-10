import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import hoverBtn from '/sounds/hoverBtn.mp3';
import clickBtn from '/sounds/clickBtn.mp3';
import useStoreNavigation from '../../../store/useStoreNavigation';

import s from './MenuBtn.module.scss';
export default function MenuBtn() {
    const [isHovered, setIsHovered] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const setBurger = useStoreNavigation((state) => state.setBurger);
    const isBurger = useStoreNavigation((state) => state.isBurger);
    const [isActive, setIsActive] = useState(false);
    const hoverSound = new Audio(hoverBtn);
    const clickSound = new Audio(clickBtn);

    const playSound = (music) => {
        music.play()
    }

    useEffect(() => {
        if (window.innerWidth > 744) {
            if (isHovered) {
                setIsActive(true)
            } else if (!isHovered) {
                setIsActive(false)
            }
        }

    }, [isHovered])

    useEffect(() => {
        setIsActive(isBurger)
    }, [isBurger])
    return (
        <div className={s.menu}
            onMouseEnter={() => {
                setIsHovered(true);
                setHasInteracted(true);
                playSound(hoverSound);
            }}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => {
                setBurger(!isBurger);
                playSound(clickSound);
            }}
        >
            <div className={s.menu_text}>
                Menu
            </div>
            <div className={s.menu_btn}>
                <div className={`${s.figure} ${hasInteracted ? (isActive ? s.hover : s.unhover) : ''}`}></div>
            </div>
        </div>

    );
}

MenuBtn.propTypes = {
    isDesktop: PropTypes.bool
};
