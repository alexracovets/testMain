import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import Footer from "../../Components/Footer/Footer";
import projectsData from "../../data/projectsData";
import useAnchorScroll from '../../store/useAnchorScroll';
import useStoreMobileScroll from '../../store/useStoreMobileScroll';

import s from './MobileProjectsPage.module.scss';
export default function MobileProjectsPage() {
    const [projects, setProjects] = useState([]);
    const scrollSection = useAnchorScroll((state) => state.section);
    const getScrollTo = useAnchorScroll((state) => state.getScrollTo);
    const scrollHeight = useStoreMobileScroll((state) => state.scrollHeight);

    useEffect(() => {
        setProjects(projectsData);
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
                <h2>
                    Projects
                </h2>
                <div className={s.projects}>
                    {projects.map((item, idx) => {
                        return (
                            <NavLink to={`/mobile/projects/${item.pageName}`} key={idx} className={s.item}>
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
            <Footer />
        </motion.div>
    )
}