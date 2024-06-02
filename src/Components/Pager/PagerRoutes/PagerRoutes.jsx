import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Mobile from "../../../layout/Mobile";
import Default from "../../../layout/Default";
import QAPage from "../../../Pages/QAPage/QAPage";
import MainPage from "../../../Pages/MainPage/MainPage";
import AboutPage from "../../../Pages/AboutPage/AboutPage";
import MobileMain from "../../../Pages/MobileMain/MobileMain";
import ContactPage from "../../../Pages/ContactPage/ContactPage";
import ProjectCase from "../../../Pages/ProjectCase/ProjectCase";
import ProjectsPage from "../../../Pages/ProjectsPage/ProjectsPage";
import ServicesPage from "../../../Pages/ServicesPage/ServicesPage";
import IndustriesPage from "../../../Pages/IndustriesPage/IndustriesPage";
import MobileProjectsPage from "../../../Pages/MobileProjectsPage/MobileProjectsPage";

export default function PagerRoutes() {
    const location = useLocation();

    return (
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
                    <Route path="projects" element={<ProjectsPage />} />
                    <Route path="projects/:id" element={<ProjectCase />} />
                    <Route path="q&a" element={<QAPage />} />
                </Route>
                <Route path="/mobile" element={<Mobile />}>
                    <Route index element={<MobileMain />} />
                    <Route path="projects" element={<MobileProjectsPage />} />
                    <Route path="q&a" element={<div>Q&A</div>} />
                </Route>
            </Routes>
        </AnimatePresence>
    )
} 