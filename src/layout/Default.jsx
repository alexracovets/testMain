import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Main from "../Components/Main/Main";

import useActiveModel from "../store/useActiveModel";

export default function Default() {
    const changeActivePage = useActiveModel((state) => state.setActiveModel)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 744);
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
        setIsMobile(window.innerWidth <= 744);
        function handleResize() {
            setIsMobile(window.innerWidth <= 744);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isMobile) {
            navigate('/mobile');
        }
    }, [isMobile, navigate])

    return (
        <>
            <Main />
        </>
    )
}
