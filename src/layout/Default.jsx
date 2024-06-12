import { useCallback, useEffect, useMemo, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

import useActiveModel from "../store/useActiveModel";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ScrollPageImage from "../Components/ScrollPageImage/ScrollPageImage";

const paths = [
    {
        pathname: '/',
        toUp: null,
        toDown: '/services'
    },
    {
        pathname: '/services',
        toUp: '/',
        toDown: '/projects'
    },
    {
        pathname: '/projects',
        toUp: '/services',
        toDown: '/about'
    },
    {
        pathname: '/about',
        toUp: '/projects',
        toDown: '/q&a'
    },
    {
        pathname: '/q&a',
        toUp: '/about',
        toDown: '/contact'
    },
    {
        pathname: '/contact',
        toUp: '/q&a',
        toDown: null
    }
];

import useScrollPageNavigation from '../store/useScrollPageNavigation';

export default function Default() {
    const changeActivePage = useActiveModel((state) => state.setActiveModel)
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 744);
    const navigate = useNavigate();
    const location = useLocation(); 
    const isNavigateStart = useScrollPageNavigation((state) => state.isScrollImageShown);
    const setNavigateStart = useScrollPageNavigation((state) => state.setNavigateStart);

    const pageRoutes = useMemo(() => ({
        '/': 0,
        '/about': 1,
        '/services': 2,
        '/industries': 3,
        '/contact': 0
    }), []);

    const checkPage = useCallback(() => {
        const pageId = pageRoutes[location.pathname] ?? -1;
        changeActivePage(pageId);
    }, [location.pathname, pageRoutes, changeActivePage]);

    const routeTo = (to) => {
        const currentPath = location.pathname;
        const currentPathItem = paths.find(path => path.pathname === currentPath);
        if (!isNavigateStart) { 
            setNavigateStart(true);
            if (currentPathItem && currentPathItem[to]) {
                navigate(currentPathItem[to]);
            }
            setTimeout(() => {
                setNavigateStart(false);
            }, 500);
        }
    };

    useEffect(() => {
        checkPage();
    }, [location.pathname, checkPage]);

    useEffect(() => {
        setIsDesktop(window.innerWidth > 744);
        function handleResize() {
            setIsDesktop(window.innerWidth > 744);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!isDesktop) {
            navigate('/mobile');
        }
    }, [isDesktop, navigate]);

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
