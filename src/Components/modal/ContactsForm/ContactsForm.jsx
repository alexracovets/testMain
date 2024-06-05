
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import close_icon from '/image/icons/form/close.svg';

import UI_Button from '../../UI_Button/UI_Button';
import ContactsFormInput from './ContactsFormInput/ContactsFormInput';
import ContactsFormTextArea from './ContactsFormTextArea/ContactsFormTextArea';

import useModalForm from '../../../store/useModalForm';

import s from './ContactsForm.module.scss';
export default function ContactsForm() {
    const isActive = useModalForm((state) => state.isActive);
    const setIsActiveForm = useModalForm((state) => state.setIsActive);

    return (
        <AnimatePresence>
            {isActive ?
                <motion.div className={s.modal}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    exit={{ opacity: 0 }}
                >
                    <div className={s.form__wrapper}>
                        <div className={s.cross}>
                            <img src={close_icon} alt="close" />
                        </div>
                        <div className={s.title}>
                            Contact Us
                        </div>
                        <form action="">
                            <ContactsFormInput
                                name={`full_name`}
                                label={`Full name`}
                                placeholder={`John Doe`}
                                type={`text`}
                            />
                            <ContactsFormInput
                                name={`email`}
                                label={`Email address`}
                                placeholder={`Enter your email`}
                                type={`email`}
                            />
                            <ContactsFormTextArea
                                name={`textarea`}
                                label={`Comment`}
                                placeholder={`Add some text`}
                            />
                            <div className={s.btn}>
                                <UI_Button text={'Contact me'} arrow submit small />
                            </div>
                        </form>
                    </div>
                </motion.div> :
                null
            }
        </AnimatePresence>
    );
}  
