import { useEffect } from 'react';
import Splitting from 'splitting';
import './CircleText.css';
export default function CircleText() {
    useEffect(() => {
        const circle = document.querySelector('.circle');
        const text = circle.textContent.trim(); // Отримуємо текст та видаляємо зайві пробіли
        circle.innerHTML = ''; // Очищуємо вміст елемента
        circle.style.setProperty('--numchs', text.length);

        // Створюємо новий вміст з розбиттям на символи
        for (let i = 0; i < text.length; i++) {
            const charElement = document.createElement('div');
            charElement.className = 'char';
            charElement.style.setProperty('--char-index', i);
            charElement.textContent = text.charAt(i);
            circle.appendChild(charElement);
        }

        Splitting();
    }, []);
    return (
        <div className="circle" data-splitting>
            DIGITAL PRODUCTION STUDIO
        </div>
    )
} 