import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ReactGA from "react-ga4";

import Developments from '../../Components/Developments/Developments';
import UI_Button from '../../Components/UI_Button/UI_Button';
import Fliper from '../../Components/Fliper/Fliper';
import useModalForm from '../../store/useModalForm';

import s from './MainPage.module.scss';
export default function MainPage() {
    const setIsActiveForm = useModalForm((state) => state.setIsActive);
    const { t } = useTranslation();
    ReactGA.send({
        hitType: "pageview",
        page: "/",
        title: "Main Page"
    });

    return (
        <>
            <motion.div className={s.wrapper}
                initial={{ opacity: 0, x: '-40%' }}
                animate={{ opacity: 1, x: '0%' }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0, x: '-20%' }}
            >
                <section>
                    <div className={s.content}>
                        <div className={s.click} dangerouslySetInnerHTML={{ __html: t(`hello_text`) }} />
                        <Fliper />
                        <div className={s.btn} onClick={() => setIsActiveForm(true)}>
                            <UI_Button text={t(`discover_us`)} arrow />
                        </div>
                        <Developments />
                    </div>
                </section>
            </motion.div>
            <motion.div
                className={s.controller__wrapper}
                initial={{ opacity: 0, }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0 }}
            >
                <div className={s.controller}>
                    <div className={s.circle}></div>
                    <div className={s.dot}></div>
                </div>
            </motion.div>
        </>
    )
}