import UI_Button from '../../Components/UI_Button/UI_Button';
import Fliper from '../../Components/Fliper/Fliper';
import { motion } from 'framer-motion';

import s from './MainPage.module.scss';
export default function MainPage() {

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
                    <h1>Reliable partner in</h1>
                    <Fliper />
                    <div className={s.btn}>
                        <UI_Button text={'DISCOVER US'} arrow />
                    </div>
                </div>
            </section>
        </motion.div>
    )
}