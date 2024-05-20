import { useCallback, useEffect, useMemo, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import useActiveModel from "../store/useActiveModel";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

export default function Default() {
    const changeActivePage = useActiveModel((state) => state.setActiveModel)
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 744);
    const navigate = useNavigate();
    const location = useLocation();

    const pageRoutes = useMemo(() => ({
        '/': 0,
        '/about': 1,
        '/services': 2,
        '/industries': 3,
        '/contact': 0
    }), []);


    const checkPage = useCallback(() => {
        const pageId = pageRoutes[location.pathname] ?? -1;
        changeActivePage(pageId)
    }, [location.pathname, pageRoutes, changeActivePage]);

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
    }, [isDesktop, navigate])

    return (
        <>
            <Header isDesktop={isDesktop} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
