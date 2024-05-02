import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Scrollbar } from "react-scrollbars-custom";

import './scroll.scss';
export default function Mobile() {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 744);
    const navigate = useNavigate();

    useEffect(() => {
        setIsDesktop(window.innerWidth > 744);
        function handleResize() {
            setIsDesktop(window.innerWidth > 744);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isDesktop) {
            navigate('/');
        }
    }, [isDesktop, navigate])

    return (
        <Scrollbar className={'mobile_scroll'}>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </Scrollbar>
    )
}
