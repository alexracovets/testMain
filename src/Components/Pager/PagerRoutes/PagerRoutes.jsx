import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Case from "../../../Pages/Case/Case";
import Mobile from "../../../layout/Mobile";
import Default from "../../../layout/Default";
import QAPage from "../../../Pages/QAPage/QAPage";
import MainPage from "../../../Pages/MainPage/MainPage";
import AllCases from "../../../Pages/AllCases/AllCases";
import OfficeFrame from "../../OfficeFrame/OfficeFrame";
import AboutPage from "../../../Pages/AboutPage/AboutPage";
import MobileMain from "../../../Pages/MobileMain/MobileMain";
import MobileCase from "../../../Pages/MobileCase/MobileCase";
import ContactsForm from "../../Modal/ContactsForm/ContactsForm";
import ContactPage from "../../../Pages/ContactPage/ContactPage";
import MobileQAPage from "../../../Pages/MobileQAPage/MobileQAPage";
import ServicesPage from "../../../Pages/ServicesPage/ServicesPage";
import IndustriesPage from "../../../Pages/IndustriesPage/IndustriesPage";
import MobileAllCases from "../../../Pages/MobileAllCases/MobileAllCases";

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
                        <Route path="cases" element={<AllCases />} />
                        <Route path="cases/:id" element={<Case />} />
                        <Route path="q&a" element={<QAPage />} />
                    </Route>
                    <Route path="/mobile" element={<Mobile />}>
                        <Route index element={<MobileMain />} />
                        <Route path="cases" element={<MobileAllCases />} />
                        <Route path="cases/:id" element={<MobileCase />} />
                        <Route path="q&a" element={<MobileQAPage />} />
                    </Route>
                </Routes>
            </AnimatePresence>
            <ContactsForm />
            <OfficeFrame />
        </>
    )
} 