import Strengths from '../../Components/Strengths/Strengths';
import { motion } from "framer-motion";

import s from './AboutPage.module.scss';
export default function AboutPage() {

    return (
        <motion.div className={s.wrapper}
            initial={{ opacity: 0, x: '40%' }}
            animate={{ opacity: 1, x: '0%' }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, x: '20%' }}
        >
            <section>
                <div className={s.content}>
                    <div className={s.lies_info}>
                        <h2>
                            In the AI age the speed of distribution is crucial point to beat the competitors.  <br />
                            Our partners know that we can move fast and focus on a result.
                        </h2>
                        <h3>
                            We have successfully launch more than 30 project in AI, web development, AR and Digital Marketing. Our team achieve it by providing project tracking workspace with a daily updates.
                        </h3>
                        <h3>
                            We know how to operate with a high demand traffic and marketing budgets over 30K$
                        </h3>
                    </div>
                    <Strengths />
                </div>
            </section>
        </motion.div>
    )
}