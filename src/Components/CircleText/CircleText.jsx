import { useEffect, useRef, useState } from 'react';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';

import s from './CircleText.module.scss';

export default function CircleText() {
    const circleRef1 = useRef(null);
    const circleRef2 = useRef(null);
    const circleRef3 = useRef(null);
    const circleRef4 = useRef(null);

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
            charElement.className = s.char;
            charElement.style.setProperty('--char-index', i + 1);
            charElement.textContent = text.charAt(i);
            circle.appendChild(charElement);
        }
    }
    const text = '.SOFTWARE DEVELOPMENT STUDIO'
    useEffect(() => {
        if (isInitial) {
            initial(circleRef1.current)
            initial(circleRef2.current)
            initial(circleRef3.current)
            initial(circleRef4.current)
        }

    }, [isInitial]);
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.wrapper__circle}>
                    <div className={s.inner__wrapper}>
                        <div ref={circleRef1} className={s.circle} data-splitting>
                            {text}
                        </div>
                    </div>
                </div>
                <div className={s.wrapper__circle}>
                    <div className={s.inner__wrapper}>
                        <div ref={circleRef2} className={s.circle} data-splitting>
                            {text}
                        </div>
                    </div>
                </div>
                <div className={s.wrapper__circle + ' ' + s.reverse}>
                    <div className={s.inner__wrapper}>
                        <div ref={circleRef3} className={s.circle} data-splitting>
                            {text}
                        </div>
                    </div>
                </div>
                <div className={s.wrapper__circle + ' ' + s.reverse}>
                    <div className={s.inner__wrapper}>
                        <div ref={circleRef4} className={s.circle} data-splitting>
                            {text}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
