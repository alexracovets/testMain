import React from 'react';
import TextTransition from 'react-text-transition';

const TEXTS = [`LOOK WIDER`, ` CREATIVE`, ` INNOVATIVE`, ` SPOTIUM 360`];

import s from './TextTransitionTest.module.scss';
export default function TextTransitionTest() {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div className={s.text}>
            {index % TEXTS.length !== 0 ? `We're ` : ''}
            <TextTransition inline className={s.transition}>{TEXTS[index % TEXTS.length]}</TextTransition>
        </div>
    );
}
