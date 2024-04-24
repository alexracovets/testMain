import Services from '../../Components/Blocks/Services/Services';
import { motion } from 'framer-motion';

import s from './ServicesPage.module.scss';

export default function ServicesPage() {

    return (
        <motion.div
            className={s.wrapper}
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: '0%' }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 1, ease: 'easeOut' }}
        >
            <section>
                <div className={s.content}>
                    <h2>Services</h2>
                    <Services />
                </div>
            </section>
        </motion.div>
    )
}