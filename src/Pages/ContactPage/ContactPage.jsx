import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState } from "react";
import ReactGA from "react-ga4";

import CopyButton from "../../Components/CopyButton/CopyButton";
import UI_Button from '../../Components/UI_Button/UI_Button';
import Socials from '../../Components/Socials/Socials';

import useModalForm from '../../store/useModalForm';
import useOffice from '../../store/useOffice';

import s from './ContactPage.module.scss';
export default function ContactPage() {
    const setIsActiveForm = useModalForm((state) => state.setIsActive);
    const setIsActiveOffice = useOffice((state) => state.setIsActive);
    const [isBtnHovered, setIsBtnHovered] = useState(false);
    const { t } = useTranslation();

    ReactGA.send({
        hitType: "pageview",
        page: "/contact",
        title: "Contact Page"
    });

    return (
        <motion.div className={s.wrapper}
            initial={{ opacity: 0, x: '-40%' }}
            animate={{ opacity: 1, x: '0%', duration: 0.5 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, x: '-20%' }}
        >
            <section>
                <div className={s.content}>
                    <div className={isBtnHovered ? s.active + ' ' + s.together : s.together}>
                        <span>{t('contact.work_together')}</span>
                    </div>
                    <div className={s.contact_wrapper}>
                        <h2>{t('contact.contact')}</h2>
                        <CopyButton setIsBtnHovered={setIsBtnHovered} />
                    </div>
                    <Socials />
                    <div className={s.sub_btns}>
                        <div className={s.discover} onClick={() => setIsActiveForm(true)}>
                            <UI_Button text={t('btn.talk_to_team')} arrow small />
                        </div>
                        <div className={s.office} onClick={() => setIsActiveOffice(true)}>
                            <UI_Button text={t('btn.office')} arrow small />
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}