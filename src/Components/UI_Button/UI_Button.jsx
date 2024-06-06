import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import arrowImage from '/image/icons/ui/arrow.svg'
import s from './UI_Button.module.scss';
export default function UI_Button({ text, arrow, submit, small, disabled }) {
    const [isBtn, setIsBtn] = useState(false);

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