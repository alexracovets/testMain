import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import arrowImage from '/image/icons/ui/arrow.svg';
import hover1 from '/sounds/hover1.wav';

import useUserInteracted from '../../store/useUserInteracted';

import s from './UI_Button.module.scss';
// import playSound from '../../utils/playSound';
export default function UI_Button({ text, arrow, submit, small, disabled, back }) {
    const userInteracted = useUserInteracted((state) => state.userInteracted);
    const setUserInteracted = useUserInteracted((state) => state.setUserInteracted);
    const [isBtn, setIsBtn] = useState(false);
    const hoverSound = new Audio(hover1);

    useEffect(() => {
        arrow ? setIsBtn(true) : setIsBtn(false);
    }, [arrow])

    useEffect(() => {
        const handleUserInteraction = () => {
            setUserInteracted(true);
            document.removeEventListener('click', handleUserInteraction);
            document.removeEventListener('keydown', handleUserInteraction);
        };

        document.addEventListener('click', handleUserInteraction);
        document.addEventListener('keydown', handleUserInteraction);

        return () => {
            document.removeEventListener('click', handleUserInteraction);
            document.removeEventListener('keydown', handleUserInteraction);
        };
    }, []);

    const handleMouseEnter = () => {
        if (userInteracted) {
            hoverSound.currentTime = 0; // Запускаємо звук з початку
            hoverSound.play().catch(error => {
                console.error('Error during playback:', error);
            });
        }
    };

    return (
        <button
            className={
                (disabled ? `${s.button} ${s.disabled}` : s.button) +
                (small ? ` ${s.small}` : '') +
                (back ? ` ${s.back}` : '')
            }
            type={submit ? 'submit' : 'button'}
            disabled={disabled}
            onMouseEnter={handleMouseEnter}
        >
            {text
                ? <span className={s.text}>
                    {text}
                    {isBtn ? <div className={s.arrow__wrapper}><img src={arrowImage} alt="arrow" /></div> : null}
                </span>
                : null
            }

            {
                back
                    ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 13">
                        <g id="Left-2" data-name="Left" transform="matrix(1, 0, 0, 1, -1, -6)">
                            <polygon points="24 12.001 2.914 12.001 8.208 6.706 7.501 5.999 1 12.501 7.5 19.001 8.207 18.294 2.914 13.001 24 13.001 24 12.001" ></polygon>
                        </g>

                    </svg>
                    : null
            }
        </button>
    )
}

UI_Button.propTypes = {
    text: PropTypes.string,
    arrow: PropTypes.bool,
    submit: PropTypes.bool,
    small: PropTypes.bool,
    disabled: PropTypes.bool,
    back: PropTypes.bool
}