import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import ReactGA from "react-ga4";

import Footer from "../../Components/Footer/Footer";
import TextField from "../../Components/TextField/TextField";
import UI_Button from "../../Components/UI_Button/UI_Button";

import casesData from "../../data/casesData";
import useAnchorScroll from '../../store/useAnchorScroll';
import useStoreMobileScroll from '../../store/useStoreMobileScroll';

import s from './MobileAllCases.module.scss';
export default function MobileAllCases() {
    const [projects, setProjects] = useState([]);
    const scrollSection = useAnchorScroll((state) => state.section);
    const getScrollTo = useAnchorScroll((state) => state.getScrollTo);
    const scrollHeight = useStoreMobileScroll((state) => state.scrollHeight);
    const { t } = useTranslation();

    useEffect(() => {
        setProjects(casesData);
        ReactGA.send({
            hitType: "pageview",
            page: "/mobile/cases",
            title: "Cases Page(mobile)"
        });
    }, []);

    useEffect(() => {
        if (scrollSection === 'contacts') {
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
                <h2>{t('pages.cases')}</h2>
                <div className={s.projects}>
                    {projects.map((item, idx) => {
                        return (
                            <NavLink to={`/mobile/cases/${item.pageName}`} key={idx} className={s.item}>
                                <div className={s.info}>
                                    <h3 className={s.title}>{t(item.title)}</h3>
                                    <div className={s.description}>
                                        <TextField texts={item.description} />
                                        <div className={s.btn}>
                                            <UI_Button text={t('btn.discover')} arrow small />
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        )
                    })}
                </div>
            </section>
            <Footer />
        </motion.div>
    )
}