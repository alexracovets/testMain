import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import projectsData from "../../data/projectsData";

import s from './MobileProjectsPage.module.scss';

export default function MobileProjectsPage() {
    const [projects, setProjects] = useState([]);

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
                <div className={s.projects}>
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
                            </NavLink>
                        )
                    })}
                </div>
            </section>
        </motion.div>
    )
}