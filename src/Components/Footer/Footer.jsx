import s from './Footer.module.scss';
import Socials from '../Socials/Socials';
import LangsSwither from '../LangsSwither/LangsSwither';
import { useEffect, useState } from 'react';
export default function Footer() {
    const [isBtnFocus, setIsBtnFocus] = useState(false);

    useEffect(() => {
        isBtnFocus === true && setTimeout(() => setIsBtnFocus(false), 2000)
    }, [isBtnFocus])
    
    return (
        <footer>
            <div className={s.wrapper}>
                <div className={s.footer}>
                    <LangsSwither />
                </div>
            </div>
            <div className={s.wrapper + ' ' + s.mobile}>
                <div className={s.contacts}>
                    <h2>
                        Contacts
                    </h2>
                    <div className={isBtnFocus ? s.contactBtn + ' ' + s.focus : s.contactBtn} onClick={() => setIsBtnFocus(true)}>
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
    )
} 
