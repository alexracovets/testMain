// import TextTransition from 'react-text-transition';
// import { useEffect, useState } from 'react';

// import useLoader from '../../../store/useLoader';

// const TEXTS = [`00`, `11`, `22`, `33`, '32', '31', '30'];

// import s from '../TextTransitionTest.module.scss';
// export default function AboutTransition() {
//     const [index, setIndex] = useState(0);
//     const isLoaded = useLoader((state) => state.isLoaded);

//     useEffect(() => {
//         if (index !== TEXTS.length - 1 && isLoaded) {
//             setTimeout(() => {
//                 setIndex(prev => prev + 1)
//             }, 200)
//         }
//     }, [index, isLoaded])

//     return (
//         <>
//             We launched <TextTransition inline className={s.transition}>{TEXTS[index]}</TextTransition> <span className={s.plus}></span> projects
//         </>
//     );
// }
import { useEffect, useState } from 'react';
import useLoader from '../../../store/useLoader';
import gsap from 'gsap';

import s from '../TextTransitionTest.module.scss';
export default function AboutTransition() {
    const [count, setCount] = useState(0);
    const isLoaded = useLoader((state) => state.isLoaded);

    useEffect(() => {
        const countObj = { value: 0 };
        if (isLoaded) {
            setTimeout(() => {
                gsap.to(countObj, {
                    value: 30,
                    duration: 3,
                    ease: "power1.out",
                    onUpdate: () => {
                        setCount(countObj.value.toFixed(0)); // Оновлюємо стан на кожен кадр
                    }
                });
            }, 500)
        }

    }, [isLoaded]);

    return (
        <p>We launched <span className={s.count}> {count < 10 ? '0' + count : count}</span> <span className={s.plus}></span> projects</p>
    );
}