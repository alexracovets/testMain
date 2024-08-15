import { Scrollbar } from "react-scrollbars-custom";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import projectsData from "../../data/projectsData";
import useScrollPageNavigation from '../../store/useScrollPageNavigation';

import s from './AllCases.module.scss';
import TextField from "../../Components/TextField/TextField";
import UI_Button from "../../Components/UI_Button/UI_Button";

export default function AllCases() {
    const [projects, setProjects] = useState([]);
    const [isVideoLoad, setIsVideoLoad] = useState(false);
    const setIsScrollAllowed = useScrollPageNavigation((state) => state.setIsScrollAllowed);
    const videoRef = useRef();

    useEffect(() => {
        setProjects(projectsData);
    }, []);

    useEffect(() => {
        videoRef.current && videoRef.current.play()
    }, [videoRef])

    return (
        <motion.div className={s.wrapper}
            initial={{ opacity: 0, x: '-40%' }}
            animate={{ opacity: 1, x: '0%' }}
            transition={{ duration: 0.5, delay: .1 }}
            exit={{ opacity: 0, x: '-20%' }}
        >
            <section>
                <h2>
                    Сases
                </h2>
                <Scrollbar className={'scroll'} >
                    <div className={s.projects}
                        onMouseEnter={() => setIsScrollAllowed(false)}
                        onMouseOver={() => setIsScrollAllowed(false)}
                        onMouseLeave={() => setIsScrollAllowed(true)}
                        onMouseOut={() => setIsScrollAllowed(true)}
                    >
                        {projects.map((item, idx) => {
                            return (
                                <div key={idx} className={s.item}>
                                    <div className={s.info}>
                                        <h3 className={s.title}>{item.title}</h3>
                                        <div className={s.description}><TextField texts={item.description} /></div>
                                        <div className={s.tags}>
                                            {item.tags.map((tag, idx) => <div key={idx} className={s.item}>{tag}</div>)}
                                        </div>
                                        <div className={s.btn_wrapper}>
                                            <NavLink to={`/cases/${item.pageName}`} key={idx} className={s.btn}>
                                                <UI_Button text={'DISCOVER'} arrow />
                                            </NavLink>
                                        </div>
                                    </div>
                                    <NavLink to={`/cases/${item.pageName}`} className={s.video}>
                                        <video
                                            ref={videoRef}
                                            src={`/video/cases/${item.video}`}
                                            loop
                                            autoPlay={true}
                                            muted
                                            type="video/mp4"
                                            className={isVideoLoad ? s.active : null}
                                            onCanPlay={() => setIsVideoLoad(true)}
                                        />
                                    </NavLink>
                                </div>
                            )
                        })}
                    </div>
                </Scrollbar>
            </section>
        </motion.div >
    )
}