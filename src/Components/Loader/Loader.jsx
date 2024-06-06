import { useEffect, useState } from 'react';
import { useProgress } from "@react-three/drei";
import s from './Loader.module.scss';
import UI_Button from '../UI_Button/UI_Button';
import CountUp from 'react-countup';
import { easeInOut, motion } from "framer-motion";
export default function Loader({ onLoaded }) {
    const { loaded, total } = useProgress();
    const [isLoaded, setIsLoaded] = useState(false);
    const [progress, setProgress] = useState(0);
    const [points, setPoints] = useState([]);

    useEffect(() => {

        if (total > 0) {
            const newProgress = (loaded / total) * 100;
            setProgress((prevProgress) => Math.max(prevProgress, newProgress).toFixed());
        }

        if (loaded === total && total !== 0) {
            setIsLoaded(true);
        }
    }, [loaded, total]);
    useEffect(() => {
        const newPoints = Array.from({ length: 100 }, (_, index) => ({
            id: index,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            startZ: Math.random() * -360 + 60,
        }));
        setPoints(newPoints);
    }, [])
    return (
        <div className={s.loader__wrapper}>
            <div className={s.circle}></div>
            <div className={s.loader__progress}>
                <CountUp end={progress} />%
            </div>
            <div className={s.btn} onClick={onLoaded}>
                <UI_Button text={'Start'} arrow />
            </div>
            <div className={s.points}>
                {points.map(point => (
                    <Point key={point.id} left={point.left} top={point.top} startZ={point.startZ} />
                ))}
            </div>
        </div>
    );
}


function Point({ left, top }) {
    return (
        <div className={s.point}></div>
    )
}