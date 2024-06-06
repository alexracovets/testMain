import { useEffect, useState } from 'react';

import UI_Button from '../UI_Button/UI_Button';
import Socials from '../Socials/Socials';
import LangsSwither from '../LangsSwither/LangsSwither';
import useModalForm from '../../store/useModalForm';

import s from './Footer.module.scss';
export default function Footer() {
    const [isBtnFocus, setIsBtnFocus] = useState(false);
    const setIsActiveForm = useModalForm((state) => state.setIsActive);

    useEffect(() => {
        isBtnFocus === true && setTimeout(() => setIsBtnFocus(false), 300)
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
                <div className={s.btn} onClick={() => setIsActiveForm(true)}>
                    <UI_Button text={'Let’s Talk'} arrow small />
                </div>
            </div>
        </footer>
    )
} 
