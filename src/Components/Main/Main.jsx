import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";

export default function Main() {
   
    return (
        <main>
            <AnimatePresence mode="wait" >
                <Outlet key={location.pathname} />
            </AnimatePresence>
        </main >
    )
} 
