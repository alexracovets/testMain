

import Industries from '../../Components/Industries/Industries';
import { motion } from "framer-motion";

import s from './IndustriesPage.module.scss';
export default function IndustriesPage() {

    return (
        <motion.div className={s.wrapper}
            initial={{ opacity: 0, x: '40%' }}
            animate={{ opacity: 1, x: '0%' }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, x: '20%' }}
        >
            <section>
                <div className={s.content}>
                    <h2>Industries</h2>
                    <Industries />
                </div>
            </section>
        </motion.div>
    )
}