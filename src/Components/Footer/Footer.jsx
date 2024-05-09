import s from './Footer.module.scss';
import Socials from '../Socials/Socials';
import LangsSwither from '../LangsSwither/LangsSwither';
import { useEffect, useRef } from 'react';
export default function Footer() {
    const footerRef = useRef(null);
    useEffect(() => {
        if (footerRef) {
            console.log(footerRef.current.clientHeight)
        }
    }, [footerRef])

    return (
        <footer ref={footerRef}>
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
    )
} 
