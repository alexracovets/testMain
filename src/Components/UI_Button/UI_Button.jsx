import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import arrowImage from '/image/icons/ui/arrow.svg'
import s from './UI_Button.module.scss';
export default function UI_Button({ text, arrow, submit, small }) {
    const [isBtn, setIsBtn] = useState(false);

    useEffect(() => {
        arrow ? setIsBtn(true) : setIsBtn(false);
    }, [arrow])

    return (
        <button className={small ? s.button + ' ' + s.small : s.button} type={submit ? 'submit' : 'button'}>
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
    small: PropTypes.bool
}