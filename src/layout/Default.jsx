import { useCallback, useEffect, useMemo, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

import useActiveModel from "../store/useActiveModel";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

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
    const isTopScroll = useScrollPageNavigation((state) => state.isTopScroll);
    const isBottomScroll = useScrollPageNavigation((state) => state.isBottomScroll);
    const isScrollOnPage = useScrollPageNavigation((state) => state.isScrollOnPage);
    const setIsScrollOnPage = useScrollPageNavigation((state) => state.setIsScrollOnPage);
    const [isRouteStart, setIsRouterStart] = useState(true);

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
                setIsScrollOnPage(false)
                setTimeout(() => setNavigateStart(false), 1000);
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

    const scrollTop = (to) => {  
        if (isScrollOnPage) { 
            setIsScrollAllowed(true)
            if (isTopScroll) { 
                routeTo('toUp');
                setIsRouterStart(true);
            }
            return
        }
 
        if (!isScrollOnPage && !isRouteStart) {
            routeTo(to)
        }
    }
    const scrollBottom = (to) => {
        if (isScrollOnPage) {
            setIsScrollAllowed(true)
            if (isBottomScroll) {
                routeTo('toDown');
                setIsRouterStart(true);
            }
            return
        }
        if (!isScrollOnPage && !isRouteStart) {
            routeTo(to)
        }
    }

    useEffect(() => {
        if (isRouteStart) {
            setTimeout(() => {
                setIsRouterStart(false)
            }, 300);
        }
    }, [isRouteStart])

    return (
        <ReactScrollWheelHandler
            upHandler={() => scrollTop('toUp')}
            downHandler={() => scrollBottom('toDown')}
            style={{ width: '100%', height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
        >
            <Header isDesktop={isDesktop} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </ReactScrollWheelHandler>
    );
}
