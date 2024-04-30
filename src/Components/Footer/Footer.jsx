import { useEffect, useState } from 'react';

import eng from '/image/icons/langs/en.svg';
import ua from '/image/icons/langs/ua.svg';

import s from './Footer.module.scss';
import Socials from '../Blocks/Socials/Socials';
const tablet = 744;
export default function Footer() {
    const [currentLang, setCurrentLang] = useState('EN');
    const [windowWidth, setWindowWidth] = useState();
    const langs = [
        { name: 'EN', img: eng },
        { name: 'UA', img: ua }
    ]
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        // Функція, яка оновлює стан ширини вікна
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        // Додавання обробника події
        window.addEventListener('resize', handleResize);

        // Прибирання обробника події при демонтажі компоненту
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {windowWidth > tablet ? <footer>
                <div className={s.wrapper}>
                    <div className={s.footer}>
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
                    </div>
                </div>
            </footer> :
                <footer>
                    <div className={s.wrapper}>
                        <div className={s.contacts}>
                            <h2>
                                Contacts
                            </h2>
                            <div className={s.contactBtn}>
                                <button className={s.text}>
                                    info@spotium360.com
                                </button>
                                <button className={s.copy}>
                                    copy
                                </button>
                            </div>
                        </div>
                        <Socials />
                    </div>
                </footer>
            }
        </>
    )
} 
