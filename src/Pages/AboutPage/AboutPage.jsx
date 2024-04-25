import Strengths from '../../Components/Blocks/Strengths/Strengths';
import { motion } from "framer-motion";

import s from './AboutPage.module.scss';
export default function AboutPage() {

    return (
        <motion.div className={s.wrapper}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: '0%' }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, x: '100%' }}
        >
            <section>
                <div className={s.content}>
                    <div className={s.lies_info}>
                        <h2>
                            Our strength lies in our agile problem-solving approaches, delivering top-notch work with swift turnaround.
                        </h2>
                        <h3>
                            We specialize in software development and digital marketing, serving as a trusted partner for leading companies, providing expert support and deep industry knowledge.
                        </h3>
                    </div>
                    <Strengths />
                </div>
            </section>
        </motion.div>
    )
}