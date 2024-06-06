import { useState, useEffect } from 'react';

import useToast from "../../store/useToast";

import s from './CopyButton.module.scss';
export default function CopyButton() {
    const [isBtnFocus, setIsBtnFocus] = useState(false);
    const toastPlay = useToast(state => state.setIsPlay);

    const handleCopyEmail = () => {
        setIsBtnFocus(true);
        const email = 'info@spotium360.com';
        navigator.clipboard.writeText(email).then(() => {
            toastPlay(true, "The text has been copied!")
        }).catch(() => {
            toastPlay(false, "Something went wrong!")
        });
    };

    useEffect(() => {
        if (isBtnFocus) {
            const timer = setTimeout(() => setIsBtnFocus(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isBtnFocus]);

    return (
        <>
            <div className={isBtnFocus ? `${s.contactBtn} ${s.focus}` : s.contactBtn} onClick={handleCopyEmail}>
                <button className={s.text}>
                    info@spotium360.com
                </button>
                <button className={s.copy}>
                    copy
                </button>
            </div>
        </>
    );
}