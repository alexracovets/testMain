import { Scrollbar } from "react-scrollbars-custom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useEffect } from "react";
import ReactGA from "react-ga4";

import Strengths from '../../Components/Strengths/Strengths';
import useScrollPageNavigation from '../../store/useScrollPageNavigation';

import s from './AboutPage.module.scss';
export default function AboutPage() {
    const setIsScrollAllowed = useScrollPageNavigation((state) => state.setIsScrollAllowed);
    const setIsTopScroll = useScrollPageNavigation((state) => state.setIsTopScroll);
    const setIsBottomScroll = useScrollPageNavigation((state) => state.setIsBottomScroll);
    const setIsScrollOnPage = useScrollPageNavigation((state) => state.setIsScrollOnPage);
    const { t } = useTranslation();

    ReactGA.send({
        hitType: "pageview",
        page: "/about",
        title: "About Page"
    });

    const wheelPointer = (scroll) => {
        setIsTopScroll(false);
        setIsBottomScroll(false);
        const isScrollBotoom = scroll.contentScrollHeight - scroll.clientHeight - scroll.scrollTop < 2;
        const isScrollTop = scroll.scrollTop === 0;

        if (isScrollBotoom) {
            setIsBottomScroll(true);
            setIsScrollAllowed(true);
        } else if (isScrollTop) {
            setIsTopScroll(true);
            setIsScrollAllowed(true);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setIsScrollOnPage(true);
            setIsTopScroll(true);
        }, 300);
    }, [setIsScrollOnPage, setIsTopScroll])

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
                    <Scrollbar
                        className={'scroll'}
                        onUpdate={(prevScrollValues) => wheelPointer(prevScrollValues)}
                    >
                        <div className={s.content_wrapper}>
                            <div className={s.about_wrapper}>
                                <div className={s.lies_info}>
                                    <h3 dangerouslySetInnerHTML={{ __html: t('about.0') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t('about.1') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t('about.2') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t('about.3') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t('about.4') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t('about.5') }} />
                                    <p dangerouslySetInnerHTML={{ __html: t('about.6') }} />
                                </div>
                            </div>
                            <div className={s.about_wrapper}>
                                <Strengths />
                            </div>
                        </div>
                    </Scrollbar>
                </div>
            </section >
        </motion.div >
    )
}