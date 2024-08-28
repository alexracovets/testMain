import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ReactGA from "react-ga4";

import Footer from "../../Components/Footer/Footer";
import Services from '../../Components/Services/Services';
import UI_Button from "../../Components/UI_Button/UI_Button";
import Strengths from '../../Components/Strengths/Strengths';
import Developments from "../../Components/Developments/Developments";

import useStoreMobileScroll from '../../store/useStoreMobileScroll';
import useAnchorScroll from '../../store/useAnchorScroll';
import useModalForm from '../../store/useModalForm';

import s from './MobileMain.module.scss';
import CircleText from "../../Components/CircleText/CircleText";
import TextTransitionTest from "../../Components/TextTransitionTest/TextTransitionTest";
export default function MobileMain() {
    const setActiveModel = useStoreMobileScroll((state) => state.setActiveModel);
    const getPageHeight = useStoreMobileScroll((state) => state.getPageHeight);
    const scrollHeight = useStoreMobileScroll((state) => state.scrollHeight);
    const getScrollTo = useAnchorScroll((state) => state.getScrollTo);
    const scrollSection = useAnchorScroll((state) => state.section);
    const setIsActiveForm = useModalForm((state) => state.setIsActive);
    const { t } = useTranslation();

    ReactGA.send({
        hitType: "pageview",
        page: "/mobile",
        title: "Main Page(mobile)"
    });

    const firstSection = useRef(null);
    const secondSection = useRef(null);
    const thirdSection = useRef(null);

    const scrollAbout = useRef(null);
    const scrollServices = useRef(null);
    const scrollIndustries = useRef(null);

    const [isVisibleFirst, setVisibleFirst] = useState(false);
    const [isVisibleSecond, setVisibleSecond] = useState(false);
    const [isVisibleThird, setVisibleThird] = useState(false);


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.target === firstSection.current) {
                    setVisibleFirst(entry.isIntersecting);
                } else if (entry.target === secondSection.current) {
                    setVisibleSecond(entry.isIntersecting);
                } else if (entry.target === thirdSection.current) {
                    setVisibleThird(entry.isIntersecting);
                }
            });
        }, { threshold: 0.5 });

        if (firstSection.current) observer.observe(firstSection.current);

        return () => {
            if (firstSection.current) observer.unobserve(firstSection.current);
        };
    }, []);
    useEffect(() => {
        if (isVisibleFirst) {
            getPageHeight(firstSection.current.offsetTop + firstSection.current.clientHeight / 2);
            setActiveModel(0);
        } else if (isVisibleSecond) {
            getPageHeight(secondSection.current.offsetTop + secondSection.current.clientHeight / 2);
            setActiveModel(2);
        } else if (isVisibleThird) {
            getPageHeight(thirdSection.current.offsetTop + thirdSection.current.clientHeight / 2);
            setActiveModel(3);
        }
    }, [isVisibleFirst, isVisibleSecond, isVisibleThird, setActiveModel, getPageHeight, scrollHeight]);

    useEffect(() => {
        if (scrollSection === 'about' && scrollAbout.current) {
            const target = scrollAbout.current.offsetTop;
            getScrollTo(target)
        } else if (scrollSection === 'services' && scrollServices.current) {
            const target = scrollServices.current.offsetTop;
            getScrollTo(target)
        } else if (scrollSection === 'industries' && scrollIndustries.current) {
            const target = scrollIndustries.current.offsetTop;
            getScrollTo(target)
        } else if (scrollSection === 'contacts') {
            getScrollTo(scrollHeight)
        }
    }, [scrollSection, getScrollTo, scrollHeight])
    return (

        <motion.div className={s.wrapper}
            initial={{ opacity: 0, x: '-40%' }}
            animate={{ opacity: 1, x: '0%' }}
            transition={{ duration: 0.5, delay: .1 }}
            exit={{ opacity: 0, x: '-20%' }}
        >
            <section>
                <div className={s.content}>
                    <CircleText />
                    <TextTransitionTest />
                    <Developments />
                    <div className={s.btn} onClick={() => setIsActiveForm(true)}>
                        <UI_Button text={t('btn.discover_us')} arrow small />
                    </div>
                </div>
            </section>
            <section ref={scrollAbout}>
                <div className={s.content}  >
                    <h2>{t('pages.about')}</h2>
                    <div className={s.about_wrapper}>
                        <div className={s.lies_info}>
                            <h3>
                                {t('about.0')}  <br />
                                {t('about.1')}
                            </h3>
                            <p>{t('about.2')}</p>
                            <p>{t('about.3')}</p>
                        </div>
                    </div>
                    <div className={s.about_wrapper}>
                        <Strengths />
                    </div>
                </div>
            </section>
            <section ref={scrollServices}>
                <div className={s.content}>
                    <h2>{t('pages.services')}</h2>
                    <Services mobile />
                </div>
            </section>
            <Footer />
        </motion.div>
    )
}