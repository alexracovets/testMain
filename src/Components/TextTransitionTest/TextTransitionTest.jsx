import TextTransition from 'react-text-transition';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

const TEXTS = [`LOOK WIDER`, ` CREATIVE`, ` INNOVATIVE`, ` SPOTIUM 360`];

import s from './TextTransitionTest.module.scss';
import AboutTransition from './AboutTransition/AboutTransition';
export default function TextTransitionTest() {
    const [index, setIndex] = useState(0);
    const location = useLocation();
    const [isAbout, setIsAbout] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000,
        );
        return () => clearTimeout(intervalId);
    }, []);

    useEffect(() => {
        setIsAbout(location.pathname === "/about")
    }, [location.pathname]);

    return (
        <div className={s.text}>
            {isAbout ?
                <AboutTransition /> :
                <>
                    {index % TEXTS.length !== 0 ? `We're ` : ''}
                    <TextTransition inline className={s.transition}>{TEXTS[index % TEXTS.length]}</TextTransition>
                </>
            }
        </div>
    );
}
