import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import arrowImage from '/image/icons/ui/arrow.svg';
import clickBtn from '/sounds/clickBtn.wav';
import hoverBtn from '/sounds/hoverBtn.wav';

import s from './UI_Button.module.scss';
export default function UI_Button({ text, arrow, submit, small, disabled }) {
    const [isBtn, setIsBtn] = useState(false);
    const clickSound = new Audio(clickBtn);
    const hoverSound = new Audio(hoverBtn);

    const playSound = (music) => {
        music.play()
    }

    useEffect(() => {
        arrow ? setIsBtn(true) : setIsBtn(false);
    }, [arrow])

    return (
        <button
            className={
                small ?
                    (disabled ? s.button + ' ' + s.disabled : s.button) + ' ' + s.small :
                    (disabled ? s.button + ' ' + s.disabled : s.button)}
            type={submit ? 'submit' : 'button'}
            disabled={disabled}
            onClick={() => playSound(clickSound)}
            onPointerEnter={() => playSound(hoverSound)}
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