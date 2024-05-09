import { useEffect, useRef, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import RSC from "react-scrollbars-custom";
import useStoreMobileScroll from '../store/useStoreMobileScroll';

import './scroll.scss';
export default function Mobile() {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 744);
    const navigate = useNavigate();
    const scrollRef = useRef(null)
    const getScroll = useStoreMobileScroll((state) => state.getScroll);

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
    }, [isDesktop, navigate]);

    return (
        <RSC className={'mobile_scroll'} ref={scrollRef} onScroll={(scrollRef) => getScroll(scrollRef)}>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </RSC>
    )
}
