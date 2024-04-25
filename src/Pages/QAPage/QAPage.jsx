import { motion } from "framer-motion";

import s from './QAPage.module.scss';

export default function QAPage() {

    return (
        <motion.div className={s.wrapper}
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: '0%' }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, x: '-100%' }}
        >
            <section>

            </section>
        </motion.div>
    )
}