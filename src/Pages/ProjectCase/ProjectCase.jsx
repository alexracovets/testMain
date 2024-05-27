import { Scrollbar } from "react-scrollbars-custom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import s from './ProjectCase.module.scss';

import projectsData from "../../data/projectsData";

export default function ProjectCase() {
    const { id } = useParams();
    const [content, setContent] = useState(null);

    useEffect(() => {
        const project = projectsData.find(project => project.pageName === id);
        setContent(project)
    }, [id, setContent])

    useEffect(() => {
        console.log(content)
    }, [content])

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
                                        {content.description}
                                    </div>
                                    <div className={s.customer_block}>
                                        <div className={s.customer}>
                                            Customer:
                                        </div>
                                        <div className={s.logo}>
                                            <img src={`/image/projects/logo/${content.logo}`} />
                                            <h3>{content.logoName}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className={s.photo}>
                                    <img src={`/image/projects/main/main.jpg`} />
                                </div>
                            </section>
                            <section className={s.about_info}>
                                <ul className={s.points}>
                                    <li>
                                        <div className={s.title}>
                                            Bussiness need:
                                        </div>
                                        <p>
                                            Client was looking for a service provider who would safeguard sustainable operations of their tech platform, expand, and customize it according to the requirements of client.
                                        </p>
                                    </li>
                                    <li>
                                        <div className={s.title}>
                                            Result:
                                        </div>
                                        <p>
                                            Client was looking for a service provider who would safeguard sustainable operations of their tech platform, expand, and customize it according to the requirements of client.
                                        </p>
                                    </li>
                                </ul>
                                <div className={s.message}>
                                    <div className={s.avatar}>
                                        <img src={`/image/projects/avatar/avatar.jpg`} />
                                    </div>
                                    <div className={s.text}>
                                        Spotium 360 HAS SIGNIFICANTLY CONTRIBUTED TO THE SUCCESS OF OUR COMPANY GROWTH THROUGH OUTSTANDING COLLABORATION AND A PROFESSIONAL APPROACH. THANKS A LOT TO THE WHOLE TEAM.
                                    </div>
                                    <div className={s.name}>
                                        John Johnson
                                    </div>
                                    <div className={s.position}>
                                        CEO
                                    </div>
                                    <div className={s.company}>
                                        Company name
                                    </div>
                                </div>
                            </section>
                        </div>
                    </Scrollbar>
                </motion.div>
                : null}
        </>
    )
}