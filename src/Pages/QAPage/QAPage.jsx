import { Scrollbar } from "react-scrollbars-custom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import QAItem from "./QAItem/QAItem";

const colapses = [
    {
        title: 'What is our field of expertise?',
        colapse: [
            {
                type: `text`,
                value: `We help our clients to develop, launch and marketing projects Since 2019.`
            },
            {
                type: `text`,
                value: `We have develop and launch more than 30 project in web development and immersive tech. Create marketing strategies that boost local and e-commerce business up to 60% of the revenue.`
            }
        ],
        idx: 0
    },
    {
        title: 'How can we meet?',
        colapse: [
            {
                type: `html`,
                value: <p>It’s easy! Let’s schedule our first meeting with <Link target="_blank" to={"https://calendly.com/spotium360/discovery-spotium360"}>Calendy</Link>!
                </p>
            }
        ],
        idx: 1
    },
    {
        title: `Guarantees`,
        colapse: [
            {
                type: `text`,
                value: `We take full responsibility of our partnerships and work under a contract, NDA. You will get an access to the project workspace where you can see daily updates and track each process. These steps ensure the safety of the project at each stage.`
            }
        ],
        idx: 2
    },
    {
        title: `What projects we don’t carry out?`,
        colapse: [
            {
                type: `text`,
                value: `Any project involving violence, deception, illegal gambling, and other illegal types of income.`
            }
        ],
        idx: 3
    },
    {
        title: `Do you accept payments in crypto?`,
        colapse: [
            {
                type: `text`,
                value: `100 % We can deal with USDT or BTC.`
            }
        ],
        idx: 4
    },
    {
        title: `Pricing Models`,
        colapse: [
            {
                type: `html`,
                value: <p><b>Fixed project price</b> based on the project specifications and pre-agreed terms.</p>
            },
            {
                type: `html`,
                value: <p><b>Dedicated Team.</b> Team of experts dedicated to your project, each with an hourly price rate.</p>
            },
            {
                type: `html`,
                value: <p><b>Time & Materials.</b> Time and efforts needed to complete the project based on each team member’s rate.</p>
            }
        ],
        idx: 5
    }
]

import useScrollPageNavigation from '../../store/useScrollPageNavigation';

import s from './QAPage.module.scss';
export default function QAPage() {
    const setIsScrollAllowed = useScrollPageNavigation((state) => state.setIsScrollAllowed);

    return (
        <motion.div className={s.wrapper}
            initial={{ opacity: 0, x: '-40%' }}
            animate={{ opacity: 1, x: '0%' }}
            transition={{ duration: 0.5, delay: .1 }}
            exit={{ opacity: 0, x: '-20%' }}
        >
            <Scrollbar className={'scroll'} >
                <section>
                    <h2>
                        Q&A
                    </h2>
                    <div className={s.question}
                         onMouseEnter={() => setIsScrollAllowed(false)}
                         onMouseOver={() => setIsScrollAllowed(false)}
                         onMouseLeave={() => setIsScrollAllowed(true)}
                         onMouseOut={() => setIsScrollAllowed(true)}
                    >
                        {colapses.map((colapse) => {
                            return (
                                <QAItem key={colapse.idx} title={colapse.title} content={colapse.colapse} />
                            )
                        })}
                    </div>
                </section>
            </Scrollbar>
        </motion.div>
    )
}