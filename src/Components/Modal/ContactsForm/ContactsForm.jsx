import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import UI_Button from '../../UI_Button/UI_Button';
import ContactsFormInput from './ContactsFormInput/ContactsFormInput';
import ContactsFormTextArea from './ContactsFormTextArea/ContactsFormTextArea';
import useModalForm from '../../../store/useModalForm';

import s from './ContactsForm.module.scss';
export default function ContactsForm() {
    const isActive = useModalForm((state) => state.isActive);
    const setIsActiveForm = useModalForm((state) => state.setIsActive);
    const [isBtnActive, setIsBtnActive] = useState(false);
    const [isChoice, setIsChoice] = useState(false);
    const { t } = useTranslation();

    const [userForm, setUserForm] = useState({
        full_name: {
            value: '',
            isValid: false
        },
        email: {
            value: '',
            isValid: false
        },
        textarea: {
            value: '',
            isValid: false
        },
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('/send-mail.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: userForm.full_name.value,
                email: userForm.email.value,
                message: userForm.textarea.value,
                formData: "Contact Form"
            }),
        });

        if (response.ok) {
            setIsChoice(true);
            setIsActiveForm(false);
        }
    };

    useEffect(() => {
        const allValid = Object.values(userForm).every(field => field.isValid && field.value !== '');
        setIsBtnActive(allValid);
    }, [userForm]);

    useEffect(() => {
        if (isChoice) {
            setTimeout(() => setIsChoice(false), 3000)
        }
    }, [isChoice])

    return (
        <>
            <AnimatePresence>
                {isActive ?
                    <motion.div className={s.modal}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsActiveForm(false)}
                    >
                        <div className={s.form__wrapper} onClick={(e) => e.stopPropagation()}>
                            <div className={s.cross} onClick={() => setIsActiveForm(false)}>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.001 5.28296L5.00098 19.283" stroke="#A3A4AB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.00098 5.28296L19.001 19.283" stroke="#A3A4AB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                            </div>
                            <div className={s.title}>{t('modal.contact')}</div>
                            <form onSubmit={handleSubmit}>
                                <ContactsFormInput
                                    name={`full_name`}
                                    label={t('modal.name')}
                                    placeholder={t('modal.placeholder.name')}
                                    type={`text`}
                                    setUserForm={setUserForm}
                                    userForm={userForm}
                                />
                                <ContactsFormInput
                                    name={`email`}
                                    label={t('modal.mail')}
                                    placeholder={t('modal.placeholder.email')}
                                    type={`email`}
                                    setUserForm={setUserForm}
                                    userForm={userForm}
                                />
                                <ContactsFormTextArea
                                    name={`textarea`}
                                    label={t('modal.comment')}
                                    placeholder={t('modal.placeholder.comment')}
                                    type={`textarea`}
                                    setUserForm={setUserForm}
                                    userForm={userForm}
                                />
                                <div className={s.btn} type="submit">
                                    <UI_Button text={t('btn.contact')} arrow submit small disabled={!isBtnActive} />
                                </div>
                            </form>
                        </div>
                    </motion.div> :
                    null
                }
            </AnimatePresence >
            <AnimatePresence>
                {isChoice ? <motion.div className={s.modal}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsActiveForm(false)}
                >
                    <div className={s.choice}>
                        {t('modal.choice')}
                    </div>
                </motion.div> :
                    null
                }
            </AnimatePresence >
        </>
    );
}  
