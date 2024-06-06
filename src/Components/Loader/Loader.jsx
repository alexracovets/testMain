import { useEffect, useState } from 'react';
import { useProgress } from "@react-three/drei";
import s from './Loader.module.scss';
import UI_Button from '../UI_Button/UI_Button';
import CountUp from 'react-countup';
import 'css-doodle';

export default function Loader({ onLoaded }) {
    const { loaded, total } = useProgress();
    const [isLoaded, setIsLoaded] = useState(false);
    const [progress, setProgress] = useState(0);
    const [activeBtn, setActiveBtn] = useState(false);
    useEffect(() => {
        if (progress === '100') {
            setTimeout(() => {
                setActiveBtn(true);
            }, 2000);
        }

    }, [progress])

    useEffect(() => {
        if (total > 0) {
            const newProgress = (loaded / total) * 100;
            setProgress((prevProgress) => Math.max(prevProgress, newProgress).toFixed());
        }

        if (loaded === total && total !== 0) {
            setIsLoaded(true);
        }
    }, [loaded, total]);
    return (
        <div className={s.loader__wrapper}>
            <div className={s.circle}></div>
            <div className={s.loader__progress}>
                <CountUp end={progress} />%
            </div>
            <div className={activeBtn ? s.btn + ' ' + s.active : s.btn} onClick={onLoaded}>
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
                        @grid: 10x1 / 100vw 100vh / #292929; 
                        --color: #E4E4E7, #A3A4AB, #4B4D5A, #FEC532; 
                    }

                    :after, :before {
                        content: '';
                        background: @p(--color);
                        @place: @r(100%) @r(100%);
                        @size: @r(1rem);
                        @shape: circle;
                    }

                    @place: center;
                    @size: 100vmax;
 
                    background: @m100(
                        radial-gradient(@p(--color) 50%, transparent 0)
                        @r(-20%, 120%) @r(-20%, 100%) / 1px 1px
                        no-repeat
                    );

                    will-change: transform, opacity;
                    animation: scale-up 12s linear infinite;
                    animation-delay: calc(-12s / @I * @i);

                    @keyframes scale-up {
                        0%, 100% { 
                            opacity: 0;
                        }
                        10%, 90% {
                            opacity: 1;
                        }
                    }
                `}
            </css-doodle>
        </div>
    );
}
