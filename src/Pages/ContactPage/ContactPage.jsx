import { motion } from "framer-motion";

import UI_Button from '../../Components/UI_Button/UI_Button';

import s from './ContactPage.module.scss';
import Socials from '../../Components/Socials/Socials';
import { useEffect, useState } from "react";

export default function ContactPage() {
    const [isBtnFocus, setIsBtnFocus] = useState(false);

    useEffect(() => {
        isBtnFocus === true && setTimeout(() => setIsBtnFocus(false), 2000)
    }, [isBtnFocus])
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
                        <div className={isBtnFocus ? s.contactBtn + ' ' + s.focus : s.contactBtn} onClick={() => setIsBtnFocus(true)}>
                            <button className={s.text}>
                                info@spotium360.com
                            </button>
                            <button className={s.copy}>
                                copy
                            </button>
                        </div>
                    </div>
                    <Socials />
                    <div className={s.sub_btns}>
                        <div className={s.discover}>
                            <UI_Button text={'DISCOVER US'} arrow />
                        </div>
                        <div className={s.office}>
                            <UI_Button text={'office 3d tour'} arrow />
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}