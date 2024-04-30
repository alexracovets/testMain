import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Main from "../Components/Main/Main";

export default function Default() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 744);
    const navigate = useNavigate();

    useEffect(() => {
        setIsMobile(window.innerWidth <= 744);
        // Функція, яка оновлює стан ширини вікна
        function handleResize() {
            setIsMobile(window.innerWidth <= 744);
        }

        // Додавання обробника події
        window.addEventListener('resize', handleResize);

        // Прибирання обробника події при демонтажі компоненту
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isMobile) {
            navigate('/mobile'); // Навігація на мобільну версію сайту
        }
    }, [isMobile, navigate])

    return (
        <>
            <Main />
        </>
    )
}
