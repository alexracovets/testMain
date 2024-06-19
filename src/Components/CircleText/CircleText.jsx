import { useEffect, useRef, useState } from 'react';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import './CircleText.scss';

export default function CircleText() {
    const circleRef = useRef(null);
    const circleRef2 = useRef(null);
    const circleRef3 = useRef(null);

    const [isInitial, setIsInitial] = useState(false);
    useEffect(() => {
        Splitting();
        setTimeout(() => {
            setIsInitial(true)
        }, 100)
    }, [])

    const initial = (circle) => {
        const text = circle.textContent.trim();
        circle.innerHTML = '';
        circle.style.setProperty('--numchs', text.length);

        for (let i = 0; i < text.length; i++) {
            const charElement = document.createElement('div');
            charElement.className = 'char';
            charElement.style.setProperty('--char-index', i + 1);
            charElement.textContent = text.charAt(i);
            circle.appendChild(charElement);
        }
    }

    useEffect(() => {
        if (isInitial) {
            initial(circleRef.current)
            initial(circleRef2.current)
            initial(circleRef3.current)
        }

    }, [isInitial]);
    return (
        <>

            <div ref={circleRef} className="circle" data-splitting>
                DIGITAL&nbsp;&nbsp;PRODUCTION&nbsp;&nbsp;STUDIO&nbsp;&nbsp;
            </div>

            <div ref={circleRef2} className="circle test" data-splitting>
                DIGITAL&nbsp;&nbsp;PRODUCTION&nbsp;&nbsp;STUDIO&nbsp;&nbsp;
            </div>
            <div ref={circleRef3} className="circle test2" data-splitting>
                DIGITAL&nbsp;&nbsp;PRODUCTION&nbsp;&nbsp;STUDIO&nbsp;&nbsp;
            </div>
        </>
    );
}
