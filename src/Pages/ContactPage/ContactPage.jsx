import { motion } from "framer-motion";

import UI_Button from '../../Components/UI_Button/UI_Button';
import Socials from '../../Components/Socials/Socials';
import useModalForm from '../../store/useModalForm';

import s from './ContactPage.module.scss';
import CopyButton from "../../Components/CopyButton/CopyButton";
export default function ContactPage() {
    const setIsActiveForm = useModalForm((state) => state.setIsActive);
    return (
        <motion.div className={s.wrapper}
            initial={{ opacity: 0, x: '-40%' }}
            animate={{ opacity: 1, x: '0%', duration: 0.5 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, x: '-20%' }}
        >
            <section>
                <div className={s.content}>
                    <div className={s.contact_wrapper}>
                        <h2>Contacts</h2>
                        <CopyButton />
                    </div>
                    <Socials />
                    <div className={s.sub_btns}>
                        <div className={s.discover} onClick={() => setIsActiveForm(true)}>
                            <UI_Button text={'Let’s Talk'} arrow small />
                        </div>
                        <div className={s.office}>
                            <UI_Button text={'office 3d tour'} arrow small />
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}