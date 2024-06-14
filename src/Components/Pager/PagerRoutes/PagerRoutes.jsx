import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Mobile from "../../../layout/Mobile";
import Default from "../../../layout/Default";
import QAPage from "../../../Pages/QAPage/QAPage";
import MainPage from "../../../Pages/MainPage/MainPage";
import AboutPage from "../../../Pages/AboutPage/AboutPage";
import MobileMain from "../../../Pages/MobileMain/MobileMain";
import ContactsForm from "../../Modal/ContactsForm/ContactsForm";
import ProjectCase from "../../../Pages/ProjectCase/ProjectCase";
import ContactPage from "../../../Pages/ContactPage/ContactPage";
import MobileQAPage from "../../../Pages/MobileQAPage/MobileQAPage";
import ProjectsPage from "../../../Pages/ProjectsPage/ProjectsPage";
import ServicesPage from "../../../Pages/ServicesPage/ServicesPage";
import IndustriesPage from "../../../Pages/IndustriesPage/IndustriesPage";
import MobileProjectCase from "../../../Pages/MobileProjectCase/MobileProjectCase";
import MobileProjectsPage from "../../../Pages/MobileProjectsPage/MobileProjectsPage";
 

export default function PagerRoutes() {
    const location = useLocation();
 
    return (
        <>
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
                        <Route path="cases" element={<ProjectsPage />} />
                        <Route path="cases/:id" element={<ProjectCase />} />
                        <Route path="q&a" element={<QAPage />} />
                    </Route>
                    <Route path="/mobile" element={<Mobile />}>
                        <Route index element={<MobileMain />} />
                        <Route path="cases" element={<MobileProjectsPage />} />
                        <Route path="cases/:id" element={<MobileProjectCase />} />
                        <Route path="q&a" element={<MobileQAPage />} />
                    </Route>
                </Routes>
            </AnimatePresence>
            <ContactsForm />
        </>
    )
} 