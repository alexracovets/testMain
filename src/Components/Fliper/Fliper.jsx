import { useEffect, useState } from 'react';
import SplitFlapDisplay from "react-split-flap-display";
import { ALPHA } from "react-split-flap-display/constants";

const sentences = [
    'INTERACTIVEWEB DEV    ',
    'AI         CHATBOTS   ',
    'AR VR XR   DEVELOPMENT',
    'DIGITAL    MARKETING  '
];
import './Fliper.scss'
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
            step={150}
            value={sentences[activeSentences]}
            background='#363636'
            borderColor='transparent'
            borderWidth='2px'
        />
    )
} 