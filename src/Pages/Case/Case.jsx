import { Scrollbar } from "react-scrollbars-custom";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ReactGA from "react-ga4";

import Keys from "../../Components/Keys/Keys";
import UI_Button from "../../Components/UI_Button/UI_Button";
import TextFieldI18 from "../../Components/TextField/TextFieldI18";

import projectsData from "../../data/projectsData";
import useModalForm from '../../store/useModalForm';

import s from './Case.module.scss';
export default function Case() {
    const { id } = useParams();
    const [content, setContent] = useState(null);
    const [isVideoLoad, setIsVideoLoad] = useState(false);
    const videoRef = useRef();
    const setIsActiveForm = useModalForm((state) => state.setIsActive);
    const { t } = useTranslation();

    const casesData = [
        {
            pageName: "web_sites",
            video: "website.mp4",
            title: "cases.first.title",
            techno: "cases.first.techno",
            technologies: "cases.first.technologies",
            description: [
                {
                    type: `text`,
                    value: "cases.first.description.first",
                },
                {
                    type: `text`,
                    value: "cases.first.description.second",
                },
            ],
            description_next: [
                {
                    type: `text`,
                    value: "cases.first.description_next.first",
                },
                {
                    type: `text`,
                    value: "cases.first.description_next.second",
                },
            ],
            tags: [
                "cases.first.tags.0",
                "cases.first.tags.1",
                "cases.first.tags.2",
                "cases.first.tags.3",
                "cases.first.tags.4",
                "cases.first.tags.5",
                "cases.first.tags.6",
                "cases.first.tags.7",
                "cases.first.tags.8",
                "cases.first.tags.9",
            ],
            bussines_block: [
                {
                    name: "cases.first.bussines_block.first.name",
                    content: [
                        {
                            type: `text`,
                            value: "cases.first.bussines_block.first.content.first"
                        },
                        {
                            type: 'list',
                            list: [
                                "cases.first.bussines_block.first.content.second.0",
                                "cases.first.bussines_block.first.content.second.1",
                                "cases.first.bussines_block.first.content.second.2",
                                "cases.first.bussines_block.first.content.second.3",
                            ]
                        }
                    ]
                },
                {
                    name: "cases.first.bussines_block.second.name",
                    content: [
                        {
                            type: `text`,
                            value: "cases.first.bussines_block.second.content.first"
                        },
                        {
                            type: 'list',
                            list: [
                                "cases.first.bussines_block.second.content.second.0",
                                "cases.first.bussines_block.second.content.second.1",
                                "cases.first.bussines_block.second.content.second.2",
                                "cases.first.bussines_block.second.content.second.3",
                                "cases.first.bussines_block.second.content.second.4",
                                "cases.first.bussines_block.second.content.second.5",
                                "cases.first.bussines_block.second.content.second.6",
                            ]
                        }
                    ]
                },
                {
                    name: "cases.first.bussines_block.third.name",
                    content: [
                        {
                            type: `text`,
                            value: "cases.first.bussines_block.third.content.first",
                        },
                        {
                            type: 'list',
                            list: [
                                "cases.first.bussines_block.third.content.second.0",
                                "cases.first.bussines_block.third.content.second.1",
                                "cases.first.bussines_block.third.content.second.2",
                                "cases.first.bussines_block.third.content.second.3",
                            ]
                        }
                    ]
                }
            ],
            keys_block: [
                {
                    name: "cases.first.keys_block.first.name",
                    content: [
                        {
                            type: 'list',
                            list: [
                                "cases.first.keys_block.first.content.first.0",
                                "cases.first.keys_block.first.content.first.1",
                                "cases.first.keys_block.first.content.first.2",
                                "cases.first.keys_block.first.content.first.3"
                            ]
                        }
                    ],
                    id: 0
                },
                {
                    name: "cases.first.keys_block.second.name",
                    content: [
                        {
                            type: 'q_a',
                            question: "cases.first.keys_block.second.content.0.question",
                            answer: "cases.first.keys_block.second.content.0.answer",
                        },
                        {
                            type: 'q_a',
                            question: "cases.first.keys_block.second.content.1.question",
                            answer: "cases.first.keys_block.second.content.1.answer",
                        },
                        {
                            type: 'q_a',
                            question: "cases.first.keys_block.second.content.2.question",
                            answer: "cases.first.keys_block.second.content.2.answer",
                        },
                        {
                            type: 'q_a',
                            question: "cases.first.keys_block.second.content.3.question",
                            answer: "cases.first.keys_block.second.content.3.answer",
                        }
                    ],
                    id: 1
                }
            ]
        },
        {
            pageName: `digital_marketing`,
            video: `digital.mp4`,
            title: "cases.second.title",
            techno: "cases.second.techno",
            technologies: "cases.second.technologies",
            description: [
                {
                    type: `text`,
                    value: "cases.second.description.first"
                },
                {
                    type: `text`,
                    value: "cases.second.description.second"
                }
            ],
            description_next: [
                {
                    type: `text`,
                    value: "cases.second.description_next.first"
                },
                {
                    type: 'list',
                    list: [
                        "cases.second.description_next.second.0",
                        "cases.second.description_next.second.1",
                        "cases.second.description_next.second.2",
                    ]
                },
                {
                    type: `text`,
                    value: "cases.second.description_next.third"
                }
            ],
            tags: [
                "cases.second.tags.0",
                "cases.second.tags.1",
                "cases.second.tags.2",
                "cases.second.tags.3",
                "cases.second.tags.4",
                "cases.second.tags.5",
                "cases.second.tags.6",
                "cases.second.tags.7",
                "cases.second.tags.8",
                "cases.second.tags.9",
            ],
            bussines_block: [
                {
                    name: "cases.second.bussines_block.first.name",
                    content: [
                        {
                            type: `text`,
                            value: "cases.second.bussines_block.first.content.first"
                        },
                        {
                            type: 'list',
                            list: [
                                "cases.second.bussines_block.first.content.second.0",
                                "cases.second.bussines_block.first.content.second.1",
                                "cases.second.bussines_block.first.content.second.2",
                                "cases.second.bussines_block.first.content.second.3",
                            ]
                        }
                    ]
                },
                {
                    name: "cases.second.bussines_block.second.name",
                    content: [
                        {
                            type: `text`,
                            value: "cases.second.bussines_block.second.content.first"
                        },
                        {
                            type: 'list',
                            list: [
                                "cases.second.bussines_block.second.content.second.0",
                                "cases.second.bussines_block.second.content.second.1",
                                "cases.second.bussines_block.second.content.second.2",
                                "cases.second.bussines_block.second.content.second.3",
                                "cases.second.bussines_block.second.content.second.4",
                                "cases.second.bussines_block.second.content.second.5",
                                "cases.second.bussines_block.second.content.second.6"
                            ]
                        }
                    ]
                },
                {
                    name: "cases.second.bussines_block.third.name",
                    content: [
                        {
                            type: `text`,
                            value: "cases.second.bussines_block.third.content.first"
                        },
                        {
                            type: 'list',
                            list: [
                                "cases.second.bussines_block.third.content.second.0",
                                "cases.second.bussines_block.third.content.second.1",
                                "cases.second.bussines_block.third.content.second.2",
                                "cases.second.bussines_block.third.content.second.3"
                            ]
                        }
                    ]
                }
            ],
            keys_block: [
                {
                    name: "cases.second.keys_block.first.name",
                    content: [
                        {
                            type: 'list',
                            list: [
                                "cases.second.keys_block.first.content.first.0",
                                "cases.second.keys_block.first.content.first.1",
                                "cases.second.keys_block.first.content.first.2",
                                "cases.second.keys_block.first.content.first.3"
                            ]
                        }
                    ],
                    id: 0
                },
                {
                    name: "cases.second.keys_block.second.name",
                    content: [
                        {
                            type: 'q_a',
                            question: "cases.second.keys_block.second.content.0.question",
                            answer: "cases.second.keys_block.second.content.0.answer"
                        },
                        {
                            type: 'q_a',
                            question: "cases.second.keys_block.second.content.1.question",
                            answer: "cases.second.keys_block.second.content.1.answer"
                        },
                        {
                            type: 'q_a',
                            question: "cases.second.keys_block.second.content.2.question",
                            answer: "cases.second.keys_block.second.content.2.answer"
                        },
                        {
                            type: 'q_a',
                            question: "cases.second.keys_block.second.content.3.question",
                            answer: "cases.second.keys_block.second.content.3.answer"
                        },
                        {
                            type: `text`,
                            value: "cases.second.keys_block.second.content.4.value"
                        }
                    ],
                    id: 1
                }
            ]
        },
        {
            pageName: `сonfigurator`,
            video: `configurator.mp4`,
            title: "cases.third.title",
            techno: "cases.third.techno",
            technologies: "cases.third.technologies",
            description: [
                {
                    type: `text`,
                    value: "cases.third.description.first"
                }
            ],
            description_next: [
                {
                    type: `text`,
                    value: "cases.third.description_next.first"
                },
                {
                    type: 'list',
                    list: [
                        "cases.third.description_next.second.0",
                        "cases.third.description_next.second.1",
                        "cases.third.description_next.second.2",
                        "cases.third.description_next.second.3"
                    ]
                },
                {
                    type: `text`,
                    value: "cases.third.description_next.third"
                }
            ],
            tags: [
                "cases.third.tags.0",
                "cases.third.tags.1",
                "cases.third.tags.2",
                "cases.third.tags.3",
                "cases.third.tags.4",
                "cases.third.tags.5",
                "cases.third.tags.6",
                "cases.third.tags.7",
                "cases.third.tags.8",
                "cases.third.tags.9",
            ],
            bussines_block: [
                {
                    name: "cases.third.bussines_block.first.name",
                    content: [
                        {
                            type: `text`,
                            value: "cases.third.bussines_block.first.content.first"
                        },
                        {
                            type: `textList`,
                            value: [
                                "cases.third.bussines_block.first.content.second.0",
                                "cases.third.bussines_block.first.content.second.1",
                                "cases.third.bussines_block.first.content.second.2",
                                "cases.third.bussines_block.first.content.second.3"
                            ]
                        }
                    ]
                },
                {
                    name: "cases.third.bussines_block.second.name",
                    content: [
                        {
                            type: `text`,
                            value: "cases.third.bussines_block.second.content.first"
                        },
                        {
                            type: 'list',
                            list: [
                                "cases.third.bussines_block.second.content.second.0",
                                "cases.third.bussines_block.second.content.second.1",
                                "cases.third.bussines_block.second.content.second.2",
                            ]
                        }
                    ]
                },
                {
                    name: "cases.third.bussines_block.third.name",
                    content: [
                        {
                            type: `text`,
                            value: "cases.third.bussines_block.third.content.first",
                        },
                        {
                            type: 'list',
                            list: [
                                "cases.third.bussines_block.third.content.second.0",
                                "cases.third.bussines_block.third.content.second.1",
                                "cases.third.bussines_block.third.content.second.2",
                                "cases.third.bussines_block.third.content.second.3"
                            ]
                        }
                    ]
                }
            ],
            keys_block: [
                {
                    name: "cases.third.keys_block.first.name",
                    content: [
                        {
                            type: 'list',
                            list: [
                                "cases.third.keys_block.first.content.first.0",
                                "cases.third.keys_block.first.content.first.1",
                                "cases.third.keys_block.first.content.first.2",
                                "cases.third.keys_block.first.content.first.3",
                                "cases.third.keys_block.first.content.first.4",
                            ]
                        }
                    ],
                    id: 0
                },
                {
                    name: "cases.third.keys_block.second.name",
                    content: [
                        {
                            type: 'q_a',
                            question: "cases.third.keys_block.second.content.0.question",
                            answer: "cases.third.keys_block.second.content.0.answer"
                        },
                        {
                            type: 'q_a',
                            question: "cases.third.keys_block.second.content.1.question",
                            answer: "cases.third.keys_block.second.content.1.answer"
                        },
                        {
                            type: 'q_a',
                            question: "cases.third.keys_block.second.content.2.question",
                            answer: "cases.third.keys_block.second.content.2.answer"
                        },
                        {
                            type: 'q_a',
                            question: "cases.third.keys_block.second.content.3.question",
                            answer: "cases.third.keys_block.second.content.3.answer"
                        },
                        {
                            type: 'q_a',
                            question: "cases.third.keys_block.second.content.4.question",
                            answer: "cases.third.keys_block.second.content.4.answer"
                        },
                    ],
                    id: 1
                }
            ]
        },
        {
            pageName: `сybersecurity`,
            video: `tour.mp4`,
            title: "cases.fourth.title",
            techno: "cases.fourth.techno",
            technologies: "cases.fourth.technologies",
            description: [
                {
                    type: `text`,
                    value: "cases.fourth.description.first"
                },
            ],
            description_next: [
                {
                    type: `text`,
                    value: "cases.fourth.description_next.first"
                }
            ],
            tags: [
                "cases.fourth.tags.0",
                "cases.fourth.tags.1",
                "cases.fourth.tags.2",
                "cases.fourth.tags.3",
                "cases.fourth.tags.4",
                "cases.fourth.tags.5",
                "cases.fourth.tags.6",
                "cases.fourth.tags.7",
                "cases.fourth.tags.8",
                "cases.fourth.tags.9",
            ],
            bussines_block: [
                {
                    name: "cases.fourth.bussines_block.first.name",
                    content: [
                        {
                            type: `text`,
                            value: "cases.fourth.bussines_block.first.content.first"
                        },
                        {
                            type: `textList`,
                            value: [
                                "cases.fourth.bussines_block.first.content.second.0",
                                "cases.fourth.bussines_block.first.content.second.1",
                                "cases.fourth.bussines_block.first.content.second.2",
                                "cases.fourth.bussines_block.first.content.second.3"
                            ]
                        }
                    ]
                },
                {
                    name: "cases.fourth.bussines_block.second.name",
                    content: [
                        {
                            type: `text`,
                            value: "cases.fourth.bussines_block.second.content.first"
                        },
                        {
                            type: 'list',
                            list: [
                                "cases.fourth.bussines_block.second.content.second.0",
                                "cases.fourth.bussines_block.second.content.second.1",
                                "cases.fourth.bussines_block.second.content.second.2",
                                "cases.fourth.bussines_block.second.content.second.3",
                                "cases.fourth.bussines_block.second.content.second.4",
                                "cases.fourth.bussines_block.second.content.second.5"
                            ]
                        }
                    ]
                },
                {
                    name: "cases.fourth.bussines_block.third.name",
                    content: [
                        {
                            type: `text`,
                            value: "cases.fourth.bussines_block.third.content.first"
                        },
                        {
                            type: 'list',
                            list: [
                                "cases.fourth.bussines_block.third.content.second.0",
                                "cases.fourth.bussines_block.third.content.second.1",
                                "cases.fourth.bussines_block.third.content.second.2",
                                "cases.fourth.bussines_block.third.content.second.3",
                                "cases.fourth.bussines_block.third.content.second.4"
                            ]
                        }
                    ]
                }
            ],
            keys_block: [
                {
                    name: "cases.fourth.keys_block.first.name",
                    content: [
                        {
                            type: 'text',
                            value: "cases.fourth.keys_block.first.content.first"
                        },
                        {
                            type: 'list',
                            list: [
                                "cases.fourth.keys_block.first.content.second.0",
                                "cases.fourth.keys_block.first.content.second.1",
                                "cases.fourth.keys_block.first.content.second.2",
                                "cases.fourth.keys_block.first.content.second.3",
                            ]
                        }
                    ],
                    id: 0
                },
                {
                    name: "cases.fourth.keys_block.second.name",
                    content: [
                        {
                            type: 'q_a',
                            question: "cases.fourth.keys_block.second.content.0.question",
                            answer: "cases.fourth.keys_block.second.content.0.answer"
                        },
                        {
                            type: 'q_a',
                            question: "cases.fourth.keys_block.second.content.1.question",
                            answer: "cases.fourth.keys_block.second.content.1.answer"
                        },
                        {
                            type: 'q_a',
                            question: "cases.fourth.keys_block.second.content.2.question",
                            answer: "cases.fourth.keys_block.second.content.2.answer"
                        },
                        {
                            type: 'q_a',
                            question: "cases.fourth.keys_block.second.content.3.question",
                            answer: "cases.fourth.keys_block.second.content.3.answer"
                        }
                    ],
                    id: 1
                }
            ]
        }
    ]

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