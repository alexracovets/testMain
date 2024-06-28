import { useState, useEffect } from 'react';

import useToast from "../../store/useToast";
// import playSound from '../../utils/playSound';
import hover from '/sounds/hover1.wav';

import useUserInteracted from '../../store/useUserInteracted';

import s from './CopyButton.module.scss';
export default function CopyButton() {
    const userInteracted = useUserInteracted((state) => state.userInteracted);
    const [isBtnFocus, setIsBtnFocus] = useState(false);
    const toastPlay = useToast(state => state.setIsPlay);
    const hoverSound = new Audio(hover);

    const handleCopyEmail = () => {
        // playSound(hoverSound)
        handleMouseEnter();
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

    const handleMouseEnter = () => {
        if (userInteracted) {
            hoverSound.currentTime = 0; // Запускаємо звук з початку
            hoverSound.play().catch(error => {
                console.error('Error during playback:', error);
            });
        }
    };
    return (
        <>
            <div
                className={isBtnFocus ? `${s.contactBtn} ${s.focus}` : s.contactBtn}
                onClick={handleCopyEmail} 
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
