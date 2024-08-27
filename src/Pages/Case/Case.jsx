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
            title: `Corporate Cybersecurity`,
            techno: `Technologies:`,
            technologies: `Network Security, Endpoint Security, Cloud Security, AI and Machine Learning`,
            description: [
                {
                    type: `text`,
                    value: `<b>Reduce your risk of data breaches by 80%</b> with our corporate cybersecurity services—experience <b>70% faster threat detection</b> and a <b>50% increase in compliance!</b>`
                },
            ],
            description_next: [
                {
                    type: `text`,
                    value: `We can <b>Protect</b> your <b>Data</b> and help you Develop business without any headache`
                }
            ],
            tags: [
                `Healthcare`,
                `Finance`,
                `Government`,
                'Critical Infrastructure',
                'Retail',
                'Education',
                'Manufacturing',
                'Energy',
                'Law Firms and Legal Services',
                'Professional Services'
            ],
            bussines_block: [
                {
                    name: `Bussiness need:`,
                    content: [
                        {
                            type: `text`,
                            value: `Businesses need comprehensive cybersecurity services to:`
                        },
                        {
                            type: `textList`,
                            value: [
                                `Protect sensitive data from breaches and cyber attacks.`,
                                `Ensure compliance with industry regulations and standards.`,
                                `Minimize operational disruptions caused by security incidents.`,
                                `Gain access to expert knowledge and resources.`
                            ]
                        }
                    ]
                },
                {
                    name: `Solution:`,
                    content: [
                        {
                            type: `text`,
                            value: `Our cybersecurity services address these challenges by providing:`
                        },
                        {
                            type: 'list',
                            list: [
                                `<b>Threat Detection and Response:</b> Implement advanced threat detection systems that identify and respond to threats in real-time, reducing the risk of breaches by 80%.`,
                                `<b>Data Encryption:</b> Secure sensitive data with strong encryption methods, protecting it from unauthorized access and reducing data breach risks by 70%.`,
                                `<b>Security Audits:</b> Conduct comprehensive security audits to identify vulnerabilities and implement corrective actions, improving overall security posture by 60%.`,
                                `<b>Incident Response Planning:</b> Develop and implement incident response plans to minimize downtime and losses during a security incident, reducing recovery time by 50%.`,
                                `<b>Employee Training:</b> Provide cybersecurity awareness training for employees to recognize and prevent potential threats, decreasing the likelihood of successful phishing attacks by 40%.`,
                                `<b>24/7 Monitoring:</b> Offer continuous monitoring of your network and systems to detect and mitigate threats as they arise, enhancing security coverage by 90%.`
                            ]
                        }
                    ]
                },
                {
                    name: `Result:`,
                    content: [
                        {
                            type: `text`,
                            value: `Implementing our cybersecurity services can lead to:`
                        },
                        {
                            type: 'list',
                            list: [
                                `<b>80% Reduction in Data Breaches:</b> Strong protective measures significantly lower the risk of data breaches.`,
                                `<b>70% Lower Risk of Cyber Attacks:</b> Proactive threat detection and response systems mitigate potential attacks.`,
                                `<b>90% Improved Compliance:</b> Stay ahead of regulatory requirements and avoid costly fines.`,
                                `<b>50% Faster Incident Recovery:</b> Efficient incident response plans minimize downtime and losses.`,
                                `<b>40% Decrease in Phishing Success:</b> Employee training reduces the likelihood of successful phishing attacks.`
                            ]
                        }
                    ]
                }
            ],
            keys_block: [
                {
                    name: 'Key Team Members',
                    content: [
                        {
                            type: 'text',
                            value: `Our cybersecurity team includes:`
                        },
                        {
                            type: 'list',
                            list: [
                                `<b>Alice Thompson, Cybersecurity Analyst:</b> Expert in threat detection and incident response with over 10 years of experience.`,
                                `<b>Mark Davis, Compliance Specialist:</b> Specializes in regulatory compliance, ensuring businesses meet industry standards.`,
                                `<b>Jessica Lee, Security Auditor:</b> Conducts thorough security audits to identify and mitigate vulnerabilities.`,
                                `<b>Tom Harris, Training Coordinator:</b> Focuses on developing and delivering effective cybersecurity awareness training programs.`
                            ]
                        }
                    ],
                    id: 1
                },
                {
                    name: 'Q&A',
                    content: [
                        {
                            type: 'q_a',
                            question: '<b>Q: How do your services help reduce the risk of data breaches?</b>',
                            answer: '<b>A:</b> We implement advanced threat detection, data encryption, and continuous monitoring to protect sensitive data and detect threats in real-time.'
                        },
                        {
                            type: 'q_a',
                            question: '<b>Q: Can you help us stay compliant with industry regulations?</b>',
                            answer: '<b>A:</b> Yes, our compliance management services ensure your business meets regulatory requirements, reducing the risk of fines and reputational damage.'
                        },
                        {
                            type: 'q_a',
                            question: '<b>Q: What is the benefit of having an incident response plan?</b>',
                            answer: '<b>A:</b> An incident response plan helps minimize downtime and losses during a security incident, enabling faster recovery and reducing operational disruptions.'
                        },
                        {
                            type: 'q_a',
                            question: '<b>Q: How effective is employee training in preventing cyber attacks?</b>',
                            answer: '<b>A:</b> Our training programs educate employees on recognizing and preventing potential threats, significantly reducing the likelihood of successful phishing attacks and other social engineering tactics.'
                        }
                    ],
                    id: 2
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