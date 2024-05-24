import Services from '../../Components/Services/Services';
import { motion } from "framer-motion";

import s from './ServicesPage.module.scss';

export default function ServicesPage() {

    return (
        <motion.div className={s.wrapper}
            initial={{ opacity: 0, x: '-40%' }}
            animate={{ opacity: 1, x: '0%' }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, x: '-20%' }}
        >
            <section>
                <div className={s.content}>
                    <Services />
                </div>
            </section>
        </motion.div>
    )
}