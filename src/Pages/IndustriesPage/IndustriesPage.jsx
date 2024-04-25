

import Industries from '../../Components/Blocks/Industries/Industries';
import { motion } from "framer-motion";

import s from './IndustriesPage.module.scss';
export default function IndustriesPage() {

    return (
        <motion.div className={s.wrapper}
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: '0%' }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, x: '-100%' }}
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