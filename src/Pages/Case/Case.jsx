import { Scrollbar } from "react-scrollbars-custom";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import Keys from "../../Components/Keys/Keys";
import UI_Button from "../../Components/UI_Button/UI_Button";
import TextField from "../../Components/TextField/TextField";

import projectsData from "../../data/projectsData";
import useModalForm from '../../store/useModalForm';

import s from './Case.module.scss';
export default function Case() {
    const { id } = useParams();
    const [content, setContent] = useState(null);
    const [isVideoLoad, setIsVideoLoad] = useState(false);
    const videoRef = useRef();
    const setIsActiveForm = useModalForm((state) => state.setIsActive);

    useEffect(() => {
        const project = projectsData.find(project => project.pageName === id);
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
                                        {content.title}
                                    </h2>
                                    <div className={s.description}>
                                        <TextField texts={content.description} />
                                    </div>
                                    <div className={s.customer_block}>
                                        <div className={s.customer}>
                                            {content.techno}
                                        </div>
                                        <div className={s.logo}>
                                            <h3> {content.technologies}</h3>
                                        </div>
                                    </div>
                                    <div className={s.btns_wrapper}>
                                        <NavLink to={`/cases`} className={s.btn_arrow}>
                                            <UI_Button text={'<---'} arrow={false} />
                                        </NavLink>
                                        <div className={s.btn} onClick={() => setIsActiveForm(true)}>
                                            <UI_Button text={"LET'S TALK"} arrow />
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
                                                <div className={s.title}>{item.name}</div>
                                                <div className={s.content}>
                                                    <TextField texts={item.content} />
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