import { motion, AnimatePresence } from "framer-motion";
import { useProgress } from "@react-three/drei";
import { useEffect, useState } from 'react';

import UI_Button from '../UI_Button/UI_Button';
import CountUp from 'react-countup';

import 'css-doodle';
import s from './Loader.module.scss';

import useLoader from '../../store/useLoader';

export default function Loader() {
    const { loaded, total } = useProgress();
    const [progress, setProgress] = useState(0);
    const [activeBtn, setActiveBtn] = useState(false);
    const isLoaded = useLoader((state) => state.isLoaded);
    const setIsLoaded = useLoader((state) => state.setIsLoaded);

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
            {!isLoaded ?
                <motion.div className={s.loader__wrapper}
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
                        <UI_Button text={'To Explore'} arrow />
                    </div>
                    <css-doodle
                        style={{
                            position: 'absolute',
                            left: '0',
                            top: '0',
                            width: '100%',
                            height: '100%',
                            zIndex: '-1'
                        }}
                    >
                        {`
                    :doodle {
                        @grid: 10x1 / 100vw 100vh / transparent;
                        --color: #E4E4E7, #A3A4AB, #E4E4E7, #4B4D5A, #E4E4E7, #FEC532, #E4E4E7;
                        --color2:#E4E4E7, #E4E4E7, #E4E4E7, #E4E4E7, #E4E4E7, #E4E4E7, #FEC532; 
                    }

                    :after, :before {
                        content: '';
                        background: @p(--color);
                        @place: @r(100%) @r(100%);
                        @size: @r(2rem, 4rem);
                        @shape: circle;
                    }

                    @place: center;
                    @size: 100vmax;

                    background: @m100(
                        radial-gradient(@p(--color2) 30%, transparent 0)
                        @r(0%, 100%) @r(0%, 100%) / 1rem 1rem
                        no-repeat
                    );

                    animation: move-around @r(100s, 200s) linear infinite; 

                    @keyframes move-around {
                        0%, 100% {
                            transform: translate(0, 0);
                            opacity: 0.8;
                        }
                        50% {
                            transform: translate(@r(-100%, 100%), @r(-100%, 100%)); 
                            opacity: 0.8;
                        }
                    }
                `}
                    </css-doodle>
                </motion.div>
                : null}
        </AnimatePresence>
    );
}
