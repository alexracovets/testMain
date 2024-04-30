import { useState } from 'react';

import eng from '/image/icons/langs/en.svg';
import ua from '/image/icons/langs/ua.svg';

import s from './LangsSwither.module.scss';

export default function LangsSwither() {
    const [currentLang, setCurrentLang] = useState('EN');
    const langs = [
        { name: 'EN', img: eng },
        { name: 'UA', img: ua }
    ]
    return (
        <div className={s.lang_switcher}>
            {langs.map((lang, i) => {
                return <button
                    key={i}
                    className={currentLang === lang.name ? s.active : null}
                    onClick={() => setCurrentLang(lang.name)}
                >
                    <span>{lang.name}</span>
                    <img src={lang.img} alt={lang.name} />
                </button>
            })}
        </div>
    )
} 
