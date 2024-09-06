import { motion, AnimatePresence } from "framer-motion";
import { useProgress } from "@react-three/drei";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react';

import UI_Button from '../UI_Button/UI_Button';
import CountUp from 'react-countup';

import s from './Loader.module.scss';

import useLoader from '../../store/useLoader';

export default function Loader() {
    const { loaded, total } = useProgress();
    const [progress, setProgress] = useState(0);
    const [activeBtn, setActiveBtn] = useState(false);
    const isLoaded = useLoader((state) => state.isLoaded);
    const setIsLoaded = useLoader((state) => state.setIsLoaded);
    const { t } = useTranslation();

    useEffect(() => {
        if (progress === '100') {
            setTimeout(() => {
                setActiveBtn(true);
            }, 2000);
        }
    }, [progress]);

    useEffect(() => {
        if (total > 0) {
            const newProgress = (loaded / total) * 100;
            setProgress((prevProgress) => Math.max(prevProgress, newProgress).toFixed());
        }
    }, [loaded, total]);

    return (
        <AnimatePresence>
            {!isLoaded ? <motion.div className={s.loader__wrapper}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0, scale: 2 }}
            >
                <div className={s.circle}>
                    <div className={s.mask}></div>
                    <div className={s.dot}></div>
                </div>
                <div className={s.loader__progress}>
                    <CountUp end={progress} />%
                </div>
                <div className={activeBtn ? s.btn + ' ' + s.active : s.btn} onClick={() => setIsLoaded(true)}>
                    <UI_Button text={t("btn.loader")} arrow />
                </div>

            </motion.div> :
                null
            }
        </AnimatePresence>
    );
}