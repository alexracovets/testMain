import { motion } from "framer-motion";
import ReactGA from "react-ga4";

import Developments from '../../Components/Developments/Developments';
import UI_Button from '../../Components/UI_Button/UI_Button';
import Fliper from '../../Components/Fliper/Fliper';
import useModalForm from '../../store/useModalForm';

import s from './MainPage.module.scss';
export default function MainPage() {
    const setIsActiveForm = useModalForm((state) => state.setIsActive);
    ReactGA.send({
        hitType: "pageview",
        page: "/",
        title: "Main Page"
    });

    return (
        <>
            <motion.div className={s.wrapper}
                initial={{ opacity: 0, x: '-40%' }}
                animate={{ opacity: 1, x: '0%' }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0, x: '-20%' }}
            >
                <section>
                    <div className={s.content}>
                        <div className={s.click}>
                            Expert <span>Software</span> Development, <br />
                            Future-Proof Innovations
                        </div>
                        <Fliper />
                        <div className={s.btn} onClick={() => setIsActiveForm(true)}>
                            <UI_Button text={'DISCOVER US'} arrow />
                        </div>
                        <Developments />
                    </div>
                </section>
            </motion.div>
            <motion.div
                className={s.controller__wrapper}
                initial={{ opacity: 0, }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0 }}
            >
                <div className={s.controller}>
                    <div className={s.circle}></div>
                    <div className={s.dot}></div>
                </div>
            </motion.div>
        </>
    )
}