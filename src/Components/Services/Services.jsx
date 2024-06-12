import { Scrollbar } from 'react-scrollbars-custom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import UI_Button from '../UI_Button/UI_Button';
import ServicesItem from './ServicesItem/ServicesItem';
import useStoreServices from '../../store/useStoreServices';
import useModalForm from '../../store/useModalForm';
import useScrollPageNavigation from '../../store/useScrollPageNavigation';

const colapses = [
    {
        title: 'Interactive Website Dev',
        colapse: [
            {
                type: 'bold',
                value: 'Is your website failing to engage visitors? Our interactive website development services provide the solution:'
            },
            {
                type: 'list',
                value: [
                    [
                        {
                            type: 'bold',
                            value: 'Complete Development:'
                        },
                        {
                            type: 'text',
                            value: 'From initial design concepts to full deployment, we offer a seamless, end-to-end process tailored to your needs.'
                        }
                    ],
                    [
                        {
                            type: 'bold',
                            value: 'Boost Engagement:'
                        },
                        {
                            type: 'text',
                            value: 'Increase user interaction by 60% with immersive, interactive elements that keep visitors on your site longer.'
                        }
                    ],
                    [
                        {
                            type: 'bold',
                            value: 'Advanced Technologies:'
                        },
                        {
                            type: 'text',
                            value: 'Utilizing the latest in web development tools, including HTML5, CSS3, and JavaScript frameworks, we create dynamic and responsive websites.'
                        }
                    ],
                    [
                        {
                            type: 'bold',
                            value: 'Creative Experts:'
                        },
                        {
                            type: 'text',
                            value: 'Our team of experienced designers and developers bring innovative ideas to life, ensuring your site stands out from the competition.'
                        }
                    ]
                ]
            },
            {
                type: 'text',
                value: `Don't let your website become outdated. Contact us today and transform your online presence!`
            },
        ],
        idx: 0
    },
    {
        title: 'Custom AI Bots',
        colapse: [
            {
                type: 'bold',
                value: 'Feeling overwhelmed by repetitive tasks and missed opportunities? Our custom AI bot development service is here to streamline your processes and unlock new possibilities:'
            },
            {
                type: 'list',
                value: [
                    [
                        {
                            type: 'bold',
                            value: 'Personalized Solutions:'
                        },
                        {
                            type: 'text',
                            value: 'From chatbots and virtual assistants to automation tools, we design and develop custom AI solutions tailored to your specific needs and objectives.'
                        }
                    ],
                    [
                        {
                            type: 'bold',
                            value: 'Boost Efficiency:'
                        },
                        {
                            type: 'text',
                            value: 'Say goodbye to time-consuming tasks and human errors. Our AI bots can automate processes, saving you up to 60% in operational costs while ensuring accuracy and consistency.'
                        }
                    ],
                    [
                        {
                            type: 'bold',
                            value: 'Stay Ahead of the Curve:'
                        },
                        {
                            type: 'text',
                            value: 'With access to cutting-edge technologies like natural language processing (NLP) and machine learning algorithms, our bots continuously learn and evolve to deliver smarter, more intuitive interactions.'
                        }
                    ],
                    [
                        {
                            type: 'bold',
                            value: 'Expert Guidance:'
                        },
                        {
                            type: 'text',
                            value: 'Our team of AI specialists and developers work closely with you to understand your business goals and challenges, providing strategic insights and ongoing support to maximize the impact of your AI initiatives.'
                        }
                    ]
                ]
            },
            {
                type: 'text',
                value: `Don't let manual tasks hold you back. Contact us today to schedule a consultation and discover the power of custom AI bots!`
            },
        ],
        idx: 1
    },
    {
        title: 'AR VR XR Development',
        colapse: [
            {
                type: 'bold',
                value: 'Tired of traditional marketing methods falling flat? Our AR VR XR development service offers a new dimension of engagement for your audience:'
            },
            {
                type: 'list',
                value: [
                    [
                        {
                            type: 'bold',
                            value: 'Tailored Experiences:'
                        },
                        {
                            type: 'text',
                            value: `Whether it's augmented reality (AR) filters, virtual reality (VR) simulations, or mixed reality (XR) applications, we create immersive experiences that captivate and inspire.`
                        }
                    ],
                    [
                        {
                            type: 'bold',
                            value: 'Boost Engagement:'
                        },
                        {
                            type: 'text',
                            value: 'Elevate audience interaction by 80% with dynamic AR experiences that bring your products to life or VR simulations that transport users to new worlds.'
                        }
                    ],
                    [
                        {
                            type: 'bold',
                            value: 'Stay Ahead of the Curve:'
                        },
                        {
                            type: 'text',
                            value: `Harnessing the latest advancements in ARCore, ARKit, Unity, and Unreal Engine, we deliver cutting-edge solutions that push the boundaries of what's possible in immersive technology.`
                        }
                    ],
                    [
                        {
                            type: 'bold',
                            value: 'Expert Guidance:'
                        },
                        {
                            type: 'text',
                            value: `Our team of AR VR XR specialists works closely with you to understand your goals and objectives, providing strategic insights and innovative solutions to ensure your project's success.`
                        }
                    ]
                ]
            },
            {
                type: 'text',
                value: `Ready to leave a lasting impression on your audience? Contact us today to explore how our AR VR XR solutions can elevate your brand and drive results!`
            },
        ],
        idx: 2
    },
    {
        title: 'Digital Marketing',
        colapse: [
            {
                type: 'bold',
                value: 'Struggling to stand out online? Our digital marketing services are designed to solve your visibility problems and drive real results:'
            },
            {
                type: 'list',
                value: [
                    [
                        {
                            type: 'bold',
                            value: 'Comprehensive Approach:'
                        },
                        {
                            type: 'text',
                            value: `From SEO to social media, we handle everything, providing a seamless experience.`
                        }
                    ],
                    [
                        {
                            type: 'bold',
                            value: 'Increase Visibility by 70%:'
                        },
                        {
                            type: 'text',
                            value: 'Our targeted campaigns ensure your brand reaches the right audience, increasing your online presence significantly.'
                        }
                    ],
                    [
                        {
                            type: 'bold',
                            value: 'Cutting-Edge Strategies:'
                        },
                        {
                            type: 'text',
                            value: `Utilizing the latest in analytics, AI, and automation, we optimize every campaign for maximum ROI.`
                        }
                    ],
                    [
                        {
                            type: 'bold',
                            value: 'Expert Team:'
                        },
                        {
                            type: 'text',
                            value: `With over 10 years of industry experience, our skilled professionals are dedicated to driving your success.`
                        }
                    ],
                    [
                        {
                            type: 'bold',
                            value: `Don't Get Left Behind:`
                        },
                        {
                            type: 'text',
                            value: `The digital landscape is evolving fast. Stay ahead of your competitors with our innovative solutions.`
                        }
                    ]
                ]
            },
            {
                type: 'text',
                value: `Ready to take your brand to the next level? Contact us today and watch your growth soar!`
            },
        ],
        idx: 3
    },
    {
        title: 'Video Production',
        colapse: [
            {
                type: 'bold',
                value: 'Struggling to make an impact in a crowded digital landscape? Our bespoke video production service offers tailored solutions to help your brand shine:'
            },
            {
                type: 'list',
                value: [
                    [
                        {
                            type: 'bold',
                            value: 'Customized Creations:'
                        },
                        {
                            type: 'text',
                            value: `From captivating brand stories to immersive product showcases, we craft unique videos that resonate with your audience and drive engagement.`
                        }
                    ],
                    [
                        {
                            type: 'bold',
                            value: 'Maximize Engagement:'
                        },
                        {
                            type: 'text',
                            value: 'Our videos have been shown to increase viewer retention by up to 80%, capturing attention and inspiring action like never before.'
                        }
                    ],
                    [
                        {
                            type: 'bold',
                            value: 'Cutting-Edge Techniques:'
                        },
                        {
                            type: 'text',
                            value: `Using state-of-the-art equipment and innovative editing methods, we ensure your videos stand out with stunning visuals and professional quality.`
                        }
                    ],
                    [
                        {
                            type: 'bold',
                            value: 'Expert Team:'
                        },
                        {
                            type: 'text',
                            value: `Our team of experienced filmmakers, editors, and creative directors collaborate closely with you to bring your vision to life, delivering exceptional results that exceed expectations.`
                        }
                    ]
                ]
            },
            {
                type: 'text',
                value: `Don't settle for ordinary. Ready to elevate your brand with extraordinary video content? Contact us today to discuss your project and discover the power of personalized video solutions!`
            },
        ],
        idx: 4
    }
]


import './scroll.scss';
import s from './Services.module.scss';
export default function Services({ mobile }) {
    const changeActiveServices = useStoreServices((state) => state.changeActiveServices);
    const sliderServices = useStoreServices((state) => state.sliderServices);
    const [currentService, setCurrentService] = useState(sliderServices);
    const setIsActiveForm = useModalForm((state) => state.setIsActive);
    const setIsScrollAllowed = useScrollPageNavigation((state) => state.setIsScrollAllowed);

    useEffect(() => {
        setCurrentService(sliderServices);
    }, [sliderServices]);

    useEffect(() => {
        changeActiveServices(currentService);
    }, [currentService, changeActiveServices]);

    return (
        <>
            {!mobile ? <Scrollbar className={'scroll'}>
                <div className={s.services__wrapper}
                    onPointerEnter={() => setIsScrollAllowed(false)}
                    onPointerLeave={() => setIsScrollAllowed(true)}
                >
                    <ul className={s.services}>
                        {colapses.map((colapse) => {
                            return (
                                <ServicesItem
                                    key={colapse.idx}
                                    index={colapse.idx}
                                    title={colapse.title}
                                    colapse={colapse.colapse}
                                    currentService={currentService}
                                    setCurrentService={setCurrentService}
                                />
                            )
                        })}
                    </ul>
                    <div className={s.btn} onClick={() => setIsActiveForm(true)}>
                        <UI_Button text={`LET'S TALK`} arrow />
                    </div>
                </div>
            </Scrollbar> :
                <>
                    <div className={s.services__wrapper}>
                        <ul className={s.services}>
                            {colapses.map((colapse) => {
                                return (
                                    <ServicesItem
                                        key={colapse.idx}
                                        index={colapse.idx}
                                        title={colapse.title}
                                        colapse={colapse.colapse}
                                        currentService={currentService}
                                        setCurrentService={setCurrentService}
                                    />
                                )
                            })}
                        </ul>
                        <div className={s.btn} onClick={() => setIsActiveForm(true)}>
                            <UI_Button text={`LET'S TALK`} small arrow />
                        </div>
                    </div>
                </>
            }

        </>
    )
}

Services.propTypes = {
    mobile: PropTypes.bool
}