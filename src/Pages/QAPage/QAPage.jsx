import { Scrollbar } from "react-scrollbars-custom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import ReactGA from "react-ga4";

import QAItem from "./QAItem/QAItem";
import useScrollPageNavigation from '../../store/useScrollPageNavigation';

const qaData = [
    {
        title: 'What is our field of TECH expertise?',
        colapse: [
            {
                type: `html`,
                value: <p>We help our clients to <span>Develop</span>, <span>Launch</span> and <span>Marketing</span> projects Since 2019.</p>
            },
            {
                type: `text`,
                value: `Using Java, JavaScript, Python, Node.JS, Postgres and additional Frameworks you will get scalable, fast and secure applications.`
            }
        ],
        idx: 0
    },
    {
        title: `What is our field of MARKETING expertise?`,
        colapse: [
            {
                type: `text`,
                value: `Lets make it clear - we Make real money for our clients! You will get comprehansive analisys of yor business model, current marketing, all processes include sales funnel.`
            },
            {
                type: `html`,
                value: <p>One of the <span>Necessary</span> conditions for working with us is consistent and Open Communication with our team. You will get <span>Daily Report</span> to track how projects is moving.</p>
            },
            {
                type: `text`,
                value: `To achieve your goals we are using SEO, PPC, Social Media, Analytics, AI, Video Marketing.`
            }
        ],
        idx: 1
    },
    {
        title: 'How can we meet?',
        colapse: [
            {
                type: `html`,
                value: <p>It’s Easy! Let’s schedule our Discovery meeting with <Link target="_blank" to={"https://calendly.com/spotium360/discovery-spotium360"}>Calendy</Link>!</p>
            },
            {
                type: `text`,
                value: `Also, you can call or message us. We will reply in less than 1 minute!`
            }
        ],
        idx: 2
    },
    {
        title: `Guarantees`,
        colapse: [
            {
                type: `html`,
                value: <p>We take <span>Full Responsibility</span> of our partnerships and work under a <span>Contract</span> and <span>NDA</span>.</p>
            },
            {
                type: `text`,
                value: `You will get an access to the Project Workspace where you can see daily updates and track each process.`
            },
            {
                type: `text`,
                value: `We accept separate payment process for each stage of the project.`
            }
        ],
        idx: 3
    },
    {
        title: `What projects we don’t carry out?`,
        colapse: [
            {
                type: `text`,
                value: `Any project involving violence, deception, illegal gambling, and other illegal types of income.`
            },
        ],
        idx: 4
    },
    {
        title: `Do you accept payments in crypto?`,
        colapse: [
            {
                type: `text`,
                value: `100 % We can deal with USDT or BTC.`
            },
        ],
        idx: 5
    },
    {
        title: `Pricing Models`,
        colapse: [
            {
                type: `html`,
                value: <p><span>Fixed project price.</span> Based on the project specifications and pre-agreed terms.</p>
            },
            {
                type: `html`,
                value: <p><span>Dedicated Team.</span> Team of experts dedicated to your project, each with an hourly price rate.</p>
            },
            {
                type: `html`,
                value: <p><span>Time & Materials.</span> Time and efforts needed to complete the project based on each team member’s rate.</p>
            }
        ],
        idx: 6
    }
]

import s from './QAPage.module.scss';
export default function QAPage() {
    const setIsScrollAllowed = useScrollPageNavigation((state) => state.setIsScrollAllowed);
    const setIsTopScroll = useScrollPageNavigation((state) => state.setIsTopScroll);
    const setIsBottomScroll = useScrollPageNavigation((state) => state.setIsBottomScroll);
    const setIsScrollOnPage = useScrollPageNavigation((state) => state.setIsScrollOnPage);
    ReactGA.send({
        hitType: "pageview",
        page: "/q&a",
        title: "Q&A Page"
    });

    const wheelPointer = (scroll) => {
        setIsTopScroll(false);
        setIsBottomScroll(false);
        const isScrollBotoom = scroll.contentScrollHeight - scroll.clientHeight - scroll.scrollTop < 2;
        const isScrollTop = scroll.scrollTop === 0;

        if (isScrollBotoom) {
            setIsBottomScroll(true);
            setIsScrollAllowed(true);
        } else if (isScrollTop) {
            setIsTopScroll(true);
            setIsScrollAllowed(true);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setIsScrollOnPage(true);
            setIsTopScroll(true);
        }, 300);
    }, [setIsScrollOnPage, setIsTopScroll])

    return (
        <motion.div className={s.wrapper}
            initial={{ opacity: 0, x: '-40%' }}
            animate={{ opacity: 1, x: '0%' }}
            transition={{ duration: 0.5, delay: .1 }}
            exit={{ opacity: 0, x: '-20%' }}
        >
            <section>
                <h2>
                    Q&A
                </h2>
                <Scrollbar
                    className={'scroll'}
                    onScroll={(prevScrollValues) => wheelPointer(prevScrollValues)}
                >
                    <div className={s.question}
                        onMouseEnter={() => setIsScrollAllowed(false)}
                        onMouseLeave={() => setIsScrollAllowed(true)}
                    >
                        {qaData.map((colapse) => {
                            return (
                                <QAItem key={colapse.idx} title={colapse.title} content={colapse.colapse} />
                            )
                        })}
                    </div>
                </Scrollbar>
            </section>
        </motion.div>
    )
}