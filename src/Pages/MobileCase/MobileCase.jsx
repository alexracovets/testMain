import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ReactGA from "react-ga4";

import useAnchorScroll from '../../store/useAnchorScroll';
import useStoreMobileScroll from '../../store/useStoreMobileScroll';
import KeysMobile from "../../Components/KeysMobile/KeysMobile";
import TextField from "../../Components/TextField/TextField";
import Footer from "../../Components/Footer/Footer";
import casesData from "../../data/casesData";

import s from './MobileCase.module.scss';
export default function MobileCase() {
    const { id } = useParams();
    const [content, setContent] = useState(null);
    // const [isVideoLoad, setIsVideoLoad] = useState(false);
    const scrollSection = useAnchorScroll((state) => state.section);
    const getScrollTo = useAnchorScroll((state) => state.getScrollTo);
    const scrollHeight = useStoreMobileScroll((state) => state.scrollHeight);
    const { t } = useTranslation();
    // const videoRef = useRef();

    useEffect(() => {
        const project = casesData.find(project => project.pageName === id);
        setContent(project);
        
        ReactGA.send({
            hitType: "pageview",
            page: `/mobile/cases/${casesData.find(project => project.pageName === id).pageName}`,
            title: `${casesData.find(project => project.pageName === id).logoName} Page(mobile)`
        });
    }, [id, setContent])

    useEffect(() => {
        if (scrollSection === 'contacts') {
            getScrollTo(scrollHeight)
        }
    }, [scrollSection, getScrollTo, scrollHeight])

    // useEffect(() => {
    //     videoRef && videoRef.current && videoRef.current.play()
    // }, [videoRef])

    return (
        <>
            {content
                ? <motion.div className={s.wrapper}
                    initial={{ opacity: 0, x: '-40%' }}
                    animate={{ opacity: 1, x: '0%' }}
                    transition={{ duration: 0.5, delay: .1 }}
                    exit={{ opacity: 0, x: '-20%' }}
                >
                    <div className={s.case}>
                        <section className={s.main_info}>
                            <div className={s.content}>
                                <h2>
                                    {t(content.title)}
                                </h2>
                                <div className={s.description}>
                                    <TextField texts={content.description} />
                                </div>
                                <div className={s.customer_block}>
                                    <div className={s.customer}>
                                        <b>{t(content.techno)} </b>
                                        {t(content.technologies)}
                                    </div>
                                </div>
                            </div>
                            {/* <div className={s.photo}>
                                <div className={s.photo}>
                                    <div className={s.video__wrapper}>
                                        <video
                                            ref={videoRef}
                                            src={`/video/cases/${content.video}`}
                                            loop
                                            autoPlay={true}
                                            muted
                                            type="video/mp4"
                                            className={isVideoLoad ? s.active : null}
                                            onCanPlay={() => setIsVideoLoad(true)}
                                        />
                                    </div>
                                </div>
                            </div> */}
                        </section>
                        <section className={s.about_info}>
                            <ul className={s.points}>
                                {content.bussines_block.map((item, idx) => {
                                    return (
                                        <li key={idx}>
                                            <div className={s.title}>{t(item.name)}</div>
                                            <div className={s.content}>
                                                <TextField texts={item.content} />
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </section>
                        <section className={s.keys_info}>
                            <KeysMobile content={content.keys_block} />
                        </section>
                    </div>
                    <Footer />
                </motion.div>
                : null}
        </>
    )
}