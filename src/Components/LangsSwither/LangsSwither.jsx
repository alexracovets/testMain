import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react';

import en from '/image/icons/langs/en.svg';
import ua from '/image/icons/langs/ua.svg';

import s from './LangsSwither.module.scss';

export default function LangsSwither() {
    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(null);

    const langs = [
        { name: 'en', img: en },
        { name: 'ua', img: ua }
    ]

    const change = async (language) => {
        try {
            await i18n.changeLanguage(language);
        } catch (error) {
            console.error("Error changing language:", error);
        }
    };

    useEffect(() => {
        setCurrentLanguage(i18n.language)
    }, [i18n.language])
    console.log(currentLanguage)
    return (
        <div className={s.lang_switcher}>
            {langs.map((lang, i) => {
                return <button
                    key={i}
                    className={currentLanguage === lang.name ? s.active : null}
                    onClick={() => change(lang.name)}
                >
                    <span>{lang.name}</span>
                    <img src={lang.img} alt={lang.name} />
                </button>
            })}
        </div>
    )
} 
