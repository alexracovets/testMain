import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ReactGA from "react-ga4";

import Strengths from '../../Components/Strengths/Strengths';

import s from './AboutPage.module.scss';
export default function AboutPage() {
    const { t } = useTranslation();

    ReactGA.send({
        hitType: "pageview",
        page: "/about",
        title: "About Page"
    });

    return (
        <motion.div className={s.wrapper}
            initial={{ opacity: 0, x: '40%' }}
            animate={{ opacity: 1, x: '0%' }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, x: '20%' }}
        >
            <section>
                <div className={s.title_block}>
                    <h2>{t('pages.about')}</h2>
                </div>
                <div className={s.content}>
                    <div className={s.about_wrapper}>
                        <div className={s.lies_info}>
                            <h3>
                                {t('about.0')}  <br />
                                {t('about.1')}
                            </h3>
                            <h4>{t('about.2')}</h4>
                            <h4>{t('about.3')}</h4>
                        </div>
                    </div>
                    <div className={s.about_wrapper}>
                        <Strengths />
                    </div>
                </div>
            </section>
        </motion.div>
    )
}