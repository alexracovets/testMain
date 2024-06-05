import UI_Button from '../../Components/UI_Button/UI_Button';
import { motion } from "framer-motion";

import Developments from '../../Components/Developments/Developments';
import Fliper from '../../Components/Fliper/Fliper';
import useModalForm from '../../store/useModalForm';

import s from './MainPage.module.scss';
export default function MainPage() {
    const setIsActiveForm = useModalForm((state) => state.setIsActive);

    return (

        <motion.div className={s.wrapper}
            initial={{ opacity: 0, x: '-40%' }}
            animate={{ opacity: 1, x: '0%' }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, x: '-20%' }}
        >
            <section>
                <div className={s.content}>
                    {/* <h1>Reliable partner in</h1> */}
                    <div className={s.we}>
                        <p>
                            We&#39;re Innovative
                        </p>
                        <p>
                            We&#39;re Creative
                        </p>
                        <p>
                            We&#39;re SPOTIUM 360
                        </p>
                    </div>
                    <Fliper />
                    <div className={s.btn} onClick={() => setIsActiveForm(true)}>
                        <UI_Button text={'DISCOVER US'} arrow />
                    </div>
                    <Developments />
                </div>
            </section>
        </motion.div>
    )
}