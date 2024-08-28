import { Scrollbar } from "react-scrollbars-custom";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ReactGA from "react-ga4";

import Keys from "../../Components/Keys/Keys";
import UI_Button from "../../Components/UI_Button/UI_Button";
import TextFieldI18 from "../../Components/TextField/TextFieldI18";

import casesData from "../../data/casesData";
import useModalForm from '../../store/useModalForm';

import s from './Case.module.scss';
export default function Case() {
    const { id } = useParams();
    const [content, setContent] = useState(null);
    const [isVideoLoad, setIsVideoLoad] = useState(false);
    const videoRef = useRef();
    const setIsActiveForm = useModalForm((state) => state.setIsActive);
    const { t } = useTranslation();

    ReactGA.send({
        hitType: "pageview",
        page: `/cases/${casesData.find(meCase => meCase.pageName === id).pageName}`,
        title: `${casesData.find(meCase => meCase.pageName === id).logoName} Page`
    });

    useEffect(() => {
        const project = casesData.find(meCase => meCase.pageName === id);
        setContent(project)
    }, [id, setContent])

    useEffect(() => {
        videoRef.current && videoRef.current.play()
    }, [videoRef])

    return (
        <>
            {content
                ? <motion.div className={s.wrapper}
                    initial={{ opacity: 0, x: '-40%' }}
                    animate={{ opacity: 1, x: '0%' }}
                    transition={{ duration: 0.5, delay: .1 }}
                    exit={{ opacity: 0, x: '-20%' }}
                >
                    <Scrollbar className={'scroll'}>
                        <div className={s.case}>
                            <section className={s.main_info}>
                                <div className={s.content}>
                                    <h2>
                                        {t(content.title)}
                                    </h2>
                                    <div className={s.description}>
                                        <TextFieldI18 texts={content.description_next} />
                                    </div>
                                    <div className={s.customer_block}>
                                        <div className={s.customer}>
                                            <b>
                                                {t(content.techno)}
                                            </b>
                                        </div>
                                        <div className={s.logo}>
                                            <h3> {t(content.technologies)}</h3>
                                        </div>
                                    </div>
                                    <div className={s.btns_wrapper}>
                                        <NavLink to={`/cases`} className={s.btn_arrow}>
                                            <UI_Button arrow={false} back={true} />
                                        </NavLink>
                                        <div className={s.btn} onClick={() => setIsActiveForm(true)}>
                                            <UI_Button text={t('btn.lets_talk')} arrow />
                                        </div>
                                    </div>
                                </div>
                                <div className={s.photo}>
                                    <div className={s.image_wrapper}>
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
                                </div>
                            </section>
                            <section className={s.about_info}>
                                <ul className={s.points}>
                                    {content.bussines_block.map((item, idx) => {
                                        return (
                                            <li key={idx}>
                                                <div className={s.title}>{t(item.name)}</div>
                                                <div className={s.content}>
                                                    <TextFieldI18 texts={item.content} />
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </section>
                            <section className={s.keys_info}>
                                <Keys content={content.keys_block} />
                            </section>
                        </div>
                    </Scrollbar>
                </motion.div>
                : null}
        </>
    )
}