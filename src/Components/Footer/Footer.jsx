import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";

import LangsSwither from '../LangsSwither/LangsSwither';
import CopyButton from '../CopyButton/CopyButton';
import UI_Button from '../UI_Button/UI_Button';
import Socials from '../Socials/Socials';
import useOffice from '../../store/useOffice';
import useModalForm from '../../store/useModalForm';

import s from './Footer.module.scss';
export default function Footer() {
    const [isBtnFocus, setIsBtnFocus] = useState(false);
    const setIsActiveForm = useModalForm((state) => state.setIsActive);
    const setIsActiveOffice = useOffice((state) => state.setIsActive);
    const { t } = useTranslation();

    useEffect(() => {
        isBtnFocus === true && setTimeout(() => setIsBtnFocus(false), 300)
    }, [isBtnFocus])

    return (
        <footer>
            <div className={s.wrapper}>
                <div className={s.footer}>
                    <div className={s.copy}>
                        Software development studIo | Copyright © (2019-2024) SPOTIUM 360
                    </div>
                    <LangsSwither />
                </div>
            </div>
            <div className={s.wrapper + ' ' + s.mobile}>
                <div className={s.together}>
                    <span>  {t('contact.work_together')}  </span>
                </div>
                <div className={s.contacts}>
                    <h2>{t('contact.contact')}</h2>
                    <CopyButton />
                </div>
                <Socials />
                <div className={s.btns}>
                    <div className={s.btn} onClick={() => setIsActiveForm(true)}>
                        <UI_Button text={t('btn.talk_to_team')} arrow small />
                    </div>
                    <div className={s.btn} onClick={() => setIsActiveOffice(true)}>
                        <UI_Button text={t('btn.office')} arrow small />
                    </div>
                </div>

            </div>
        </footer>
    )
} 
