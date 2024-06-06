import { useState, useEffect } from 'react';
import s from './CopyButton.module.scss';
export default function CopyButton() {
    const [isBtnFocus, setIsBtnFocus] = useState(false);

    const handleCopyEmail = () => {
        const email = 'info@spotium360.com';
        navigator.clipboard.writeText(email).then(() => {
            console.log('Email copied to clipboard');
        }).catch(err => {
            console.error('Could not copy text: ', err);
        });
    };

    useEffect(() => {
        isBtnFocus === true && setTimeout(() => setIsBtnFocus(false), 300)
    }, [isBtnFocus])

    return (
        <div className={isBtnFocus ? s.contactBtn + ' ' + s.focus : s.contactBtn} onClick={() => { setIsBtnFocus(true); handleCopyEmail(); }}>
            <button className={s.text}>
                info@spotium360.com
            </button>
            <button className={s.copy}>
                copy
            </button>
        </div>
    )
}