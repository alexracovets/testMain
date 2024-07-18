import { useEffect, useState } from 'react';
import gsap from 'gsap';

import useLoader from '../../../store/useLoader';

import s from '../TextTransitionTest.module.scss';
import { CustomEase } from 'gsap/all';
export default function AboutTransition() {
    const [count, setCount] = useState(0);
    const isLoaded = useLoader((state) => state.isLoaded);

    useEffect(() => {
        const countObj = { value: 0 };
        if (isLoaded) {
            setTimeout(() => {
                gsap.to(countObj, {
                    value: 30,
                    duration: 2,
                    ease: CustomEase.create("custom", "M0,0 C0,0.408 0.402,0.918 0.738,1.024 0.862,1.062 0.939,1.034 1,1 "),
                    onUpdate: () => {
                        setCount(countObj.value.toFixed(0)); // Оновлюємо стан на кожен кадр
                    }
                });
            }, 500)
        }

    }, [isLoaded]);

    return (
        <p>We launched {count} <span className={s.plus}></span> projects</p>
    );
}
