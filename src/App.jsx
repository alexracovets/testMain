import { AnimatePresence } from "framer-motion";
import { Route, Routes } from 'react-router-dom';

import Default from './layout/Default';
import MainPage from './Pages/MainPage/MainPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import ServicesPage from './Pages/ServicesPage/ServicesPage';
import IndustriesPage from './Pages/IndustriesPage/IndustriesPage';
import { useLocation } from "react-router-dom/dist";


import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MeCanvas from "./Components/MeCanvas/MeCanvas";

export default function App() {
    const location = useLocation();
    return (
        <>
            <MeCanvas />
            <Header />
            <AnimatePresence mode="wait">
                <Routes
                    location={location}
                    key={location.pathname}
                >
                    <Route path="/" element={<Default />}>
                        <Route index element={<MainPage />} />
                        <Route path="about" element={<AboutPage />} />
                        <Route path="services" element={<ServicesPage />} />
                        <Route path="industries" element={<IndustriesPage />} />
                        <Route path="contact" element={<ContactPage />} />
                    </Route>
                </Routes>
            </AnimatePresence>
            <Footer />
        </>
    )
}
