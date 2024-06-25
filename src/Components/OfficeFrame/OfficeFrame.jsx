import { motion, AnimatePresence } from "framer-motion";

import useOffice from '../../store/useOffice';

import s from './OfficeFrame.module.scss';
export default function OfficeFrame() {
    const isActiveOffice = useOffice((state) => state.isActive);
    const officeLink = useOffice((state) => state.link);
    const setIsActiveOffice = useOffice((state) => state.setIsActive);

    return (
        <AnimatePresence>
            {isActiveOffice ?
                <motion.div className={s.office__wrapper}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsActiveOffice(false)}
                >
                    <iframe className={s.frame} src={officeLink} />
                </motion.div> :
                null
            }
        </AnimatePresence >
    )
} 