import { useCallback, useEffect, useMemo, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

import useActiveModel from "../store/useActiveModel";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ScrollPageImage from "../Components/ScrollPageImage/ScrollPageImage";

import useScrollPageNavigation from '../store/useScrollPageNavigation';
import pathsScrollDesktop from "../data/pathsScrollDesktop";

export default function Default() {
    const changeActivePage = useActiveModel((state) => state.setActiveModel)
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 744);
    const navigate = useNavigate();
    const location = useLocation();
    const isNavigateStart = useScrollPageNavigation((state) => state.isNavigateStart);
    const setNavigateStart = useScrollPageNavigation((state) => state.setNavigateStart);
    const isScrollAllowed = useScrollPageNavigation((state) => state.isScrollAllowed);
    const setIsScrollAllowed = useScrollPageNavigation((state) => state.setIsScrollAllowed);

    const pageRoutes = useMemo(() => ({
        '/': 0,
        '/about': 1,
        '/services': 2,
        '/industries': 3,
        '/contact': 0
    }), []);

    const checkPage = useCallback(() => {
        setIsScrollAllowed(true)
        const pageId = pageRoutes[location.pathname] ?? -1;
        changeActivePage(pageId);
    }, [location.pathname, pageRoutes, changeActivePage, setIsScrollAllowed]);

    const routeTo = (to) => {
        const currentPath = location.pathname;
        const currentPathItem = pathsScrollDesktop.find(path => path.pathname === currentPath);
        if (!isNavigateStart && isScrollAllowed) {
            setNavigateStart(true);
            setIsScrollAllowed(false);
            if (currentPathItem && currentPathItem[to]) {
                setTimeout(() => setNavigateStart(false), 2000);
                navigate(currentPathItem[to]);
                setIsScrollAllowed(true);
            } else {
                setIsScrollAllowed(true);
                setNavigateStart(false)
            }
        }
    };

    useEffect(() => checkPage(), [location.pathname, checkPage]);

    useEffect(() => {
        setIsDesktop(window.innerWidth > 744);
        function handleResize() {
            setIsDesktop(window.innerWidth > 744);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        !isDesktop && navigate('/mobile');
    }, [isDesktop, navigate]);
    useEffect(() => {
        console.log(isScrollAllowed)
        console.log(isNavigateStart)
    }, [isScrollAllowed, isNavigateStart])
    return (
        <ReactScrollWheelHandler
            upHandler={() => routeTo('toUp')}
            downHandler={() => routeTo('toDown')}
            style={{ width: '100%', height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
        >
            <Header isDesktop={isDesktop} />
            <main>
                <Outlet />
            </main>
            <Footer />
            <ScrollPageImage />
        </ReactScrollWheelHandler>
    );
}
