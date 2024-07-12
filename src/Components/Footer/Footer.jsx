import { useEffect, useState } from 'react';

import UI_Button from '../UI_Button/UI_Button';
import Socials from '../Socials/Socials';
// import LangsSwither from '../LangsSwither/LangsSwither';
import useModalForm from '../../store/useModalForm';
import useOffice from '../../store/useOffice';

import s from './Footer.module.scss';
import CopyButton from '../CopyButton/CopyButton';
export default function Footer() {
    const [isBtnFocus, setIsBtnFocus] = useState(false);
    const setIsActiveForm = useModalForm((state) => state.setIsActive);
    const setIsActiveOffice = useOffice((state) => state.setIsActive);

    useEffect(() => {
        isBtnFocus === true && setTimeout(() => setIsBtnFocus(false), 300)
    }, [isBtnFocus])

    return (
        <footer>
            <div className={s.wrapper}>
                <div className={s.footer}>
                    <div className={s.copy}>
                        Software development studIo | Copyright © (2019-2024) SPOTIUM 360
                    </div>
                    {/* <LangsSwither /> */}
                </div>
            </div>
            <div className={s.wrapper + ' ' + s.mobile}>
                <div className={s.together}>
                    <span>
                        Let’s Work Together!
                    </span>
                </div>
                <div className={s.contacts}>
                    <h2>
                        Contacts
                    </h2>
                    <CopyButton />
                </div>
                <Socials />
                <div className={s.btns}>
                    <div className={s.btn} onClick={() => setIsActiveForm(true)}>
                        <UI_Button text={'Talk to Team'} arrow small />
                    </div>
                    <div className={s.btn} onClick={() => setIsActiveOffice(true)}>
                        <UI_Button text={'office 3d tour'} arrow small />
                    </div>
                </div>

            </div>
        </footer>
    )
} 
