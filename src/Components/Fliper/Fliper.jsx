import { useEffect, useState } from 'react';
import SplitFlapDisplay from "react-split-flap-display";
import { ALPHA } from "react-split-flap-display/constants";

const sentences = [
    'SOFTWARE   DEVELOPMENT',
    'AR VR XR   DEVELOPMENT',
    'INTERACTIVEWEB DEV    ',
    'DIGITAL    MARKETING  '
];
import './Fliper.scss'
// import s from './Fliper.scss';
export default function Fliper() {
    const [activeSentences, setActiveSentences] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setActiveSentences((prev) => (prev + 1) % sentences.length)
        }, 10000);
    }, []);

    return (
        <SplitFlapDisplay
            className={'flip'}
            characterSet={ALPHA}
            step={100}
            value={sentences[activeSentences]}
            withSound={false}
        />
    )
} 