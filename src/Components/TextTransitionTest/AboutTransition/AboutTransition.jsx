import TextTransition from 'react-text-transition';
import { useEffect, useState } from 'react';

import useLoader from '../../../store/useLoader';

const TEXTS = [`00`, `11`, `22`, `33`, '32', '31', '30'];

import s from '../TextTransitionTest.module.scss';
export default function AboutTransition() {
    const [index, setIndex] = useState(0);
    const isLoaded = useLoader((state) => state.isLoaded);

    useEffect(() => {
        if (index !== TEXTS.length - 1 && isLoaded) {
            setTimeout(() => {
                setIndex(prev => prev + 1)
            }, 200)
        }
    }, [index, isLoaded])

    return (
        <>
            We launched <TextTransition inline className={s.transition}>{TEXTS[index]}</TextTransition> <span className={s.plus}></span> projects
        </>
    );
}
