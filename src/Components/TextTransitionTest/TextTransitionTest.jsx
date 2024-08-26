import TextTransition from 'react-text-transition';
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react';



import s from './TextTransitionTest.module.scss';
import AboutTransition from './AboutTransition/AboutTransition';
export default function TextTransitionTest() {
    const [index, setIndex] = useState(0);
    const location = useLocation();
    const [isAbout, setIsAbout] = useState(false);
    const { t } = useTranslation();

    const TEXTS = [
        t("textTransition.first"),
        t("textTransition.second"),
        t("textTransition.third"),
        t("textTransition.fourth")
    ];

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
                    {index % TEXTS.length !== 0 ? t("textTransition.we") : ''}
                    <TextTransition inline className={s.transition}>{TEXTS[index % TEXTS.length]}</TextTransition>
                </>
            }
        </div>
    );
}
