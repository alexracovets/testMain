import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Main from "../Components/Main/Main";

export default function Mobile() {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 744);
    const navigate = useNavigate();

    useEffect(() => {
        setIsDesktop(window.innerWidth > 744);
        // Функція, яка оновлює стан ширини вікна
        function handleResize() {
            setIsDesktop(window.innerWidth > 744);
        }

        // Додавання обробника події
        window.addEventListener('resize', handleResize);

        // Прибирання обробника події при демонтажі компоненту
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isDesktop) {
            navigate('/'); // Навігація на мобільну версію сайту
        }
    }, [isDesktop, navigate])

    return (
        <>
            <Main />
        </>
    )
}
