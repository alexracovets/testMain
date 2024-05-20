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
    const scrollHeight = useStoreMobileScroll((state) => state.scrollHeight);

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
    useEffect(() => {
        const handleResize = () => {
            if (scrollRef.current && scrollRef.current.contentElement) {
                getScroll(scrollRef.current);
                setTimeout(() => {
                    getScroll(scrollRef.current);
                }, 500)
            }
        };

        const observer = new ResizeObserver(handleResize);

        if (scrollRef.current && scrollRef.current.contentElement) {
            observer.observe(scrollRef.current.contentElement);
        }

        return () => {
            if (scrollRef.current && scrollRef.current.contentElement) {
                observer.unobserve(scrollRef.current.contentElement);
            }
        };
    }, [getScroll]);
    useEffect(() => {
        getScroll(scrollRef.current);
    }, [scrollHeight, getScroll])
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
