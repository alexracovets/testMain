import { motion } from "framer-motion";

import s from './ProjectCase.module.scss';
import { Scrollbar } from "react-scrollbars-custom";

export default function ProjectCase() {

    return (
        <motion.div className={s.wrapper}
            initial={{ opacity: 0, x: '-40%' }}
            animate={{ opacity: 1, x: '0%' }}
            transition={{ duration: 0.5, delay: .1 }}
            exit={{ opacity: 0, x: '-20%' }}
        >
            <Scrollbar className={'scroll'}>
                <section>

                </section>
            </Scrollbar>
        </motion.div>
    )
}