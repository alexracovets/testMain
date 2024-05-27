import { Scrollbar } from "react-scrollbars-custom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import projectsData from "../../data/projectsData";

import s from './ProjectsPage.module.scss';
export default function ProjectsPage() {
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
            <Scrollbar className={'scroll'}>
                <section>
                    <h2>
                        Projects
                    </h2>
                    <div className={s.projects}>
                        {projects.map((item, idx) => {
                            return (
                                <button key={idx} className={s.item}>
                                    <div className={s.info}>
                                        <h3 className={s.title}>{item.title}</h3>
                                        <p>{item.text}</p>
                                        <div className={s.tags}>
                                            {item.tags.map((tag, idx) => <div key={idx} className={s.item}>{tag}</div>)}
                                        </div>
                                    </div>
                                    <div className={s.logo}>
                                        <img src={`/image/projects/logo/${item.logo}`} />
                                        <h4>{item.logoName}</h4>
                                    </div>
                                </button>
                            )
                        })}
                    </div>
                </section>
            </Scrollbar>
        </motion.div>
    )
}