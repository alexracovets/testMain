import UI_Button from '../../Components/UI_Button/UI_Button';
import { motion } from "framer-motion";

import s from './MainPage.module.scss';
import Developments from '../../Components/Developments/Developments';
import Fliper from '../../Components/Fliper/Fliper';
export default function MainPage() {

    return (

        <motion.div className={s.wrapper}
            initial={{ opacity: 0, x: '-40%' }}
            animate={{ opacity: 1, x: '0%' }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, x: '-20%' }}
        >
            <section>
                <div className={s.content}>
                    <h1>Reliable partner in</h1>
                    <Fliper />
                    <div className={s.btn}>
                        <UI_Button text={'DISCOVER US'} arrow />
                    </div>
                    <Developments />
                </div>
            </section>
        </motion.div>
    )
}