import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import arrowImage from '/image/icons/ui/arrow.svg';
import hoverBtn from '/sounds/hover.wav';

import useUserInteracted from '../../store/useUserInteracted';

import s from './UI_Button.module.scss';
import playSound from '../../utils/playSound';
export default function UI_Button({ text, arrow, submit, small, disabled }) {
    const userInteracted = useUserInteracted((state) => state.userInteracted);
    const setUserInteracted = useUserInteracted((state) => state.setUserInteracted);
    const [isBtn, setIsBtn] = useState(false);
    const hoverSound = new Audio(hoverBtn);

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

    return (
        <button
            className={
                small ?
                    (disabled ? s.button + ' ' + s.disabled : s.button) + ' ' + s.small :
                    (disabled ? s.button + ' ' + s.disabled : s.button)}
            type={submit ? 'submit' : 'button'}
            disabled={disabled}
            onMouseEnter={() => { userInteracted && playSound(hoverSound) }}
        >
            <span className={s.text}>
                {text}
                {isBtn ? <div className={s.arrow__wrapper}><img src={arrowImage} alt="arrow" /></div> : null}
            </span>
        </button>
    )
}

UI_Button.propTypes = {
    text: PropTypes.string,
    arrow: PropTypes.bool,
    submit: PropTypes.bool,
    small: PropTypes.bool,
    disabled: PropTypes.bool
}