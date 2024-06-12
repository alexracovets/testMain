import { Scrollbar } from "react-scrollbars-custom";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import projectsData from "../../data/projectsData";
import useScrollPageNavigation from '../../store/useScrollPageNavigation';

import s from './ProjectsPage.module.scss';

export default function ProjectsPage() {
    const [projects, setProjects] = useState([]);
    const setIsScrollAllowed = useScrollPageNavigation((state) => state.setIsScrollAllowed);

    useEffect(() => {
        setProjects(projectsData);
    }, []);

    return (
        <motion.div className={s.wrapper}
            initial={{ opacity: 0, x: '-40%' }}
            animate={{ opacity: 1, x: '0%' }}
            transition={{ duration: 0.5, delay: .1 }}
            exit={{ opacity: 0, x: '-20%' }}
        >
            <section>
                <h2>
                    Projects
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
                                <NavLink to={`/projects/${item.pageName}`} key={idx} className={s.item}>
                                    <div className={s.info}>
                                        <h3 className={s.title}>{item.title}</h3>
                                        <p>{item.description}</p>
                                        <div className={s.tags}>
                                            {item.tags.map((tag, idx) => <div key={idx} className={s.item}>{tag}</div>)}
                                        </div>
                                    </div>
                                    <div className={s.logo}>
                                        <img src={`/image/projects/logo/${item.logo}`} />
                                        <h4>{item.logoName}</h4>
                                    </div>
                                </NavLink>
                            )
                        })}
                    </div>
                </Scrollbar>
            </section>
        </motion.div >
    )
}