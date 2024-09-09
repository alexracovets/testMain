import { useTranslation } from "react-i18next";
import { useEffect } from 'react';

import en from '/image/icons/langs/en.svg';
import ua from '/image/icons/langs/ua.svg';

import s from './LangsSwither.module.scss';

export default function LangsSwither() {
    const { i18n } = useTranslation();

    const langs = [
        { name: 'en', img: en },
        { name: 'uk', img: ua }
    ]

    const change = async (language) => {
        try {
            await i18n.changeLanguage(language);
        } catch (error) {
            console.error("Error changing language:", error);
        }
    };

    useEffect(() => {
        if (i18n.language && i18n.language.includes('en') && i18n.language !== 'en') {
            i18n.changeLanguage("en")
        }
    }, [i18n]);

    return (
        <div className={s.lang_switcher}>
            {langs.map((lang, i) => {
                return <button
                    key={i}
                    className={i18n.language === lang.name ? s.active : null}
                    onClick={() => change(lang.name)}
                >
                    <span>{lang.name === 'uk' ? "ua" : lang.name}</span>
                    <img src={lang.img} alt={lang.name} />
                </button>
            })}
        </div>
    )
} 
