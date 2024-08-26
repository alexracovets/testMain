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
                            type: 'text',
                            value: "cases.first.keys_block.first.content.first"
                        },
                        {
                            type: 'list',
                            list: [
                                "cases.first.keys_block.first.content.second.0",
                                "cases.first.keys_block.first.content.second.1",
                                "cases.first.keys_block.first.content.second.2",
                            ]
                        }
                    ],
                    id: 0
                },
                {
                    name: "cases.first.keys_block.second.name",
                    content: [
                        {
                            type: 'list',
                            list: [
                                "cases.first.keys_block.second.content.first.0",
                                "cases.first.keys_block.second.content.first.1",
                                "cases.first.keys_block.second.content.first.2",
                                "cases.first.keys_block.second.content.first.3"
                            ]
                        }
                    ],
                    id: 1
                },
                {
                    name: "cases.first.keys_block.third.name",
                    content: [
                        {
                            type: 'q_a',
                            question: "cases.first.keys_block.third.content.0.question",
                            answer: "cases.first.keys_block.third.content.0.answer",
                        },
                        {
                            type: 'q_a',
                            question: "cases.first.keys_block.third.content.1.question",
                            answer: "cases.first.keys_block.third.content.1.answer",
                        },
                        {
                            type: 'q_a',
                            question: "cases.first.keys_block.third.content.2.question",
                            answer: "cases.first.keys_block.third.content.2.answer",
                        },
                        {
                            type: 'q_a',
                            question: "cases.first.keys_block.third.content.3.question",
                            answer: "cases.first.keys_block.third.content.3.answer",
                        }
                    ],
                    id: 2
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
                    name: 'Example',
                    content: [
                        {
                            type: 'text',
                            value: `A mid-sized B2B technology firm struggling with low website traffic and lead quality used our digital marketing services. By implementing targeted SEO, PPC, and content marketing strategies, they saw a:`
                        },
                        {
                            type: 'list',
                            list: [
                                `<b>45% Increase in Website Traffic</b> within three months.`,
                                `<b>35% Boost in Conversion Rates</b> from optimized lead generation efforts.`,
                                `<b>60% Improvement in Engagement</b> due to compelling content and social media strategies.`
                            ]
                        }
                    ],
                    id: 0
                },
                {
                    name: 'Key Team Members',
                    content: [
                        {
                            type: 'list',
                            list: [
                                `<b>Digital Marketing Strategist:</b> Expert in developing and implementing comprehensive B2B marketing plans.`,
                                `<b>Data Analyst:</b> Specializes in analyzing campaign data to provide actionable insights.`,
                                `<b>Content Marketing Manager:</b> Focuses on creating and managing engaging content for blogs, whitepapers, and social media.`,
                                `<b>SEO Specialist:</b> Ensures websites are optimized for search engines to increase organic traffic.`
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
                            question: '<b>Q: How do your services help improve website traffic?</b>',
                            answer: '<b>A:</b> By tailoring your digital marketing strategy to target specific audiences, utilizing effective keywords, and optimizing your content, we help attract more high-quality visitors to your site.'
                        },
                        {
                            type: 'q_a',
                            question: '<b>Q: Can I track the performance of my campaigns in real-time?</b>',
                            answer: `<b>A:</b> Yes, we provide advanced analytics and tracking tools so you can monitor your campaigns' performance and make necessary adjustments for better results.`
                        },
                        {
                            type: 'q_a',
                            question: '<b>Q: How does content marketing work for B2B companies?</b>',
                            answer: '<b>A:</b> We create relevant and engaging content tailored to your target audience, helping to attract and nurture leads through blogs, whitepapers, case studies, and more.'
                        },
                        {
                            type: 'q_a',
                            question: '<b>Q: What kind of ROI can I expect from your services?</b>',
                            answer: '<b>A:</b> Clients typically see a 20% improvement in their marketing ROI due to more effective and optimized campaigns based on data-driven decisions.'
                        },
                        {
                            type: `text`,
                            value: `By addressing key pain points and providing actionable solutions, our digital marketing services help B2B businesses achieve their goals and drive growth.`
                        }
                    ],
                    id: 2
                }
            ]
        },
        {
            pageName: `сonfigurator`,
            title: `Configurator`,
            techno: `Technologies:`,
            technologies: `React, Node, HTML, CSS, JS`,
            description: [
                {
                    type: `text`,
                    value: `<b>Virtual Configurator</b> the proven solution If you have <b>Customizable Products</b> to Boost your sales!`
                }
            ],
            description_next: [
                {
                    type: `text`,
                    value: `Virtual Configurator: Boost Sales Fast`
                },
                {
                    type: 'list',
                    list: [
                        `<b>Increase sales by 20%:</b> Let customers design their own products.`,
                        `<b>Reduce returns by 30%:</b> Accurate product visualization.`,
                        `<b>Upsell by 15%:</b> Showcase additional options.`,
                        `<b>Improve customer satisfaction by 35%:</b> Create a unique shopping experience.`
                    ]
                }
            ],
            tags: [
                `Modular Home Manufacturing`,
                `Custom Furniture Retailers`,
                `Automotive Industry`,
                'Personalized Jewelry',
                'Bicycle Customization',
                'Kitchen Cabinet Design',
                'Fashion and Apparel',
                'Footwear Customization',
                'Computer and Electronics',
                'Travel and Vacation Packages'
            ],
            video: `configurator.mp4`,
            logo: `logo.svg`,
            logoName: `Configurator`,
            bussines_block: [
                {
                    name: `Bussiness need:`,
                    content: [
                        {
                            type: `textList`,
                            value: [
                                `In today's digital world, businesses face the challenge of providing a personalized shopping experience.`,
                                `Customers want to tailor products to their preferences, but without the right tools, this can be difficult.`,
                                `Modular home builders, for example, need a way for buyers to design their dream homes easily and confidently.`
                            ]
                        }
                    ]
                },
                {
                    name: `Solution:`,
                    content: [
                        {
                            type: `text`,
                            value: `That's where our configurator comes in. It allows customers to customize products in real-time, enhancing their shopping experience and increasing their likelihood of purchase. Key features include:`
                        },
                        {
                            type: 'list',
                            list: [
                                `<b>Save and Share:</b> Customers can save their designs and share them with others.`,
                                `<b>1.5 Second Load Time:</b> Quick load times ensure a smooth experience.`,
                                `<b>100% Mobile Ready:</b> Perfect functionality on any device.`
                            ]
                        }
                    ]
                },
                {
                    name: `Result:`,
                    content: [
                        {
                            type: `text`,
                            value: `Adding our configurator to your website can lead to impressive results:`
                        },
                        {
                            type: 'list',
                            list: [
                                `<b>30% More Sales:</b> Custom options mean more customers hit 'buy.'`,
                                `<b>40% Better Experience:</b> Interactive and engaging, keeping customers interested.`,
                                `<b>20% Fewer Returns:</b> When they see it first, they're happier with the result.`,
                                `<b>25% Faster Ops:</b> Automation saves time and reduces errors.`
                            ]
                        }
                    ]
                }
            ],
            keys_block: [
                {
                    name: 'Example',
                    content: [
                        {
                            type: 'text',
                            value: `Picture this: a modular home builder uses our configurator. Buyers can:`
                        },
                        {
                            type: 'list',
                            list: [
                                `Customize layouts, materials, and finishes.`,
                                `See real-time updates and prices.`,
                                `Save designs and come back later.`,
                                `Share their vision with friends and family.`
                            ]
                        },
                        {
                            type: 'text',
                            value: `This leads to a more engaged customer base, <b>30% higher</b> conversion rates, and happier customers.`
                        },
                    ],
                    id: 0
                },
                {
                    name: 'Key Team Members',
                    content: [
                        {
                            type: 'list',
                            list: [
                                `<b>Project Manager:</b> Oversee the entire development process, ensuring timelines are met and provide daily updates.`,
                                `<b>Software Developer:</b> Front-End together with Back-End developer.`,
                                `<b>UI/UX Designer:</b> Ensure the configurator is intuitive and visually appealing, enhancing the overall user experience.`,
                                `<b>Quality Assurance Specialist:</b> Rigorously test the configurator to identify and fix any bugs or issues before launch.`,
                                `<b>Customer Support:</b> Provide ongoing assistance to clients, helping them get the most out of their configurator.`,
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
                            question: '<b>Q: How can a configurator increase my sales?</b>',
                            answer: '<b>A:</b> The configurator boosts sales by providing a highly engaging and interactive shopping experience. Customers can visualize and customize their products in real-time, which enhances their satisfaction and confidence in their purchase decisions. This leads to a <b>30% increase in sales</b> as more customers are likely to complete their purchases.'
                        },
                        {
                            type: 'q_a',
                            question: '<b>Q: Will the configurator work on mobile devices?</b>',
                            answer: '<b>A:</b> Yes, our configurator is <b>100% mobile ready</b>. It is designed to function seamlessly on any device, ensuring a smooth and enjoyable user experience whether your customers are shopping on a desktop, tablet, or smartphone. Quick load times of 1.5 seconds further enhance mobile usability.'
                        },
                        {
                            type: 'q_a',
                            question: '<b>Q: How does the configurator help reduce returns?</b>',
                            answer: '<b>A:</b> By allowing customers to visualize and customize their products before purchase, the configurator helps set accurate expectations. This reduces the likelihood of <b>returns by 20%</b>, as customers are more satisfied with their tailored products and are less likely to encounter surprises upon delivery.'
                        },
                        {
                            type: 'q_a',
                            question: '<b>Q: What kind of products can benefit from a configurator?</b>',
                            answer: '<b>A:</b> Configurators are ideal for <b>modular homes, custom furniture, automobiles, personalized jewelry, bicycles, kitchen cabinets, fashion items, footwear, electronics, and travel packages</b>. Essentially, any product that can be tailored to individual preferences can benefit from a configurator.'
                        },
                        {
                            type: 'q_a',
                            question: '<b>Q: How will the configurator integrate with my existing website?</b>',
                            answer: '<b>A:</b> We can easily develop the configurator wether it is custom website technologies or website builder platform. Our team of developers will work closely with you to ensure a smooth implementation process. <b>We provide comprehensive support throughout the integration</b>, ensuring that the configurator functions perfectly within your site’s framework and enhances your current digital ecosystem.'
                        },
                    ],
                    id: 2
                }
            ]
        },
        {
            pageName: `сybersecurity`,
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
            video: `tour.mp4`,
            logo: `logo.svg`,
            logoName: `Office`,
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
                    name: 'Example',
                    content: [
                        {
                            type: 'text',
                            value: `A mid-sized financial services firm was facing frequent cyber attacks and struggling with regulatory compliance. By implementing our comprehensive cybersecurity services, they saw a:`
                        },
                        {
                            type: 'list',
                            list: [
                                `<b>75% Reduction in Cyber Attacks</b> within six months.`,
                                `<b>85% Improvement in Compliance</b> with industry regulations, avoiding potential fines.`,
                                `<b>50% Faster Recovery Time</b> during incidents due to effective response planning.`,
                                `<b>40% Decrease in Phishing Attack Success</b> through targeted employee training.`
                            ]
                        }
                    ],
                    id: 0
                },
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
                                            {t(content.techno)}
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