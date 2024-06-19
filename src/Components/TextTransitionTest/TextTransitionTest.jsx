import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['INTERACTIVEWEB DEV', 'AI CHATBOTS', 'AR VR XR DEVELOPMENT', 'DIGITAL MARKETING'];
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
        <TextTransition className={s.text} springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
    );
}
