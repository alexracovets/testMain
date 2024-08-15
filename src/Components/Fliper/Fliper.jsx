import { useEffect, useState } from 'react';
import SplitFlapDisplay from "react-split-flap-display";
import { ALPHA } from "react-split-flap-display/constants";

const sentences = [
    'WEB APP    DEVELOPMENT',
    'INTERACTIVEWEBSITE DEV',
    'DIGITAL    MARKETING  ',
    'AI AND ML  DEVELOPMENT'
];
import './Fliper.scss'
export default function Fliper() {
    const [activeSentences, setActiveSentences] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setActiveSentences((prev) => (prev + 1) % sentences.length)
        }, 5000);
    }, []);

    return (
        <SplitFlapDisplay
            className={'flip'}
            characterSet={ALPHA}
            step={100}
            value={sentences[activeSentences]}
            background='#363636'
            borderColor='transparent'
            borderWidth='2px'
        />
    )
} 