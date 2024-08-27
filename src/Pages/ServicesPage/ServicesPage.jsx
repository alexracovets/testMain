import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ReactGA from "react-ga4";

import UI_Button from '../../Components/UI_Button/UI_Button';
import Services from '../../Components/Services/Services';
import useModalForm from '../../store/useModalForm';

import s from './ServicesPage.module.scss';
export default function ServicesPage() {
    const setIsActiveForm = useModalForm((state) => state.setIsActive);
    const { t } = useTranslation();
    ReactGA.send({
        hitType: "pageview",
        page: "/services",
        title: "Services Page"
    });

    return (
        <motion.div className={s.wrapper}
            initial={{ opacity: 0, x: '-40%' }}
            animate={{ opacity: 1, x: '0%' }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, x: '-20%' }}
        >
            <section>
                <div className={s.content}>
                    <h2>
                        Services
                    </h2>
                    <Services />
                    <div className={s.btn} onClick={() => setIsActiveForm(true)}>
                        <UI_Button text={t('btn.lets_talk')} arrow />
                    </div>
                </div>
            </section>
        </motion.div>
    )
}