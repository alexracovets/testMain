import { useState, useEffect } from 'react';

import hoverBtn from '/sounds/hover.wav';
import useToast from "../../store/useToast";

import s from './CopyButton.module.scss';
export default function CopyButton() {
    const [isBtnFocus, setIsBtnFocus] = useState(false);
    const toastPlay = useToast(state => state.setIsPlay);
    const hoverSound = new Audio(hoverBtn);

    const playSound = (music) => {
        music.pause();
        music.currentTime = 0;
        music.play();
    }

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
            <div
                className={isBtnFocus ? `${s.contactBtn} ${s.focus}` : s.contactBtn}
                onClick={handleCopyEmail}
                onMouseEnter={() => playSound(hoverSound)}
            >
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
