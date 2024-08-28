import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

import instagram from '/image/icons/social/instagram.svg';
import facebook from '/image/icons/social/facebook.svg';
import linkedin from '/image/icons/social/linkedin.svg';

import s from './Socials.module.scss';
export default function Socials() {
    const { t } = useTranslation();

    const days = [
        {
            day: t('contact.days.0.day'),
            time: t('contact.days.0.time')
        },
        {
            day: t('contact.days.1.day'),
            time: t('contact.days.1.time')
        },
        {
            day: t('contact.days.2.day'),
            time: t('contact.days.2.time')
        }
    ]
    const mobile = '+38 066 782 72 52';

    return (
        <>
            <ul className={s.work_days}>
                {days.map((item, idx) => {
                    return (
                        <li key={idx}>
                            <span className={s.day}>{item.day}</span>
                            <span className={s.work_time}>{item.time}</span>
                        </li>
                    )
                })}
            </ul>
            <div className={s.phone}>
                {t('contact.phone')} <a href={"tel:" + mobile}>{mobile}</a>
            </div>
            <ul className={s.socials}>
                <li className={s.socialsBtn}>
                    <Link target="_blank" to={"https://www.instagram.com/spotium360?igsh=MXMzcDJnaDR6ZDdmcw%3D%3D&utm_source=qr"}>
                        <img src={instagram} alt='Instagram' />
                        <span className={s.text}>
                            Instagram
                        </span>
                    </Link>
                </li>
                <li className={s.socialsBtn}>
                    <Link target="_blank" to={"https://www.facebook.com/share/gCgVnDrZshvm25W4/?mibextid=LQQJ4d"}>
                        <img src={facebook} alt="Facebook" />
                        <span className={s.text}>
                            Facebook
                        </span>
                    </Link>
                </li>
                <li className={s.socialsBtn}>
                    <Link target="_blank" to={"https://www.linkedin.com/company/spotium-360/"}>
                        <img src={linkedin} alt="LinkedIn" />
                        <span className={s.text}>
                            LinkedIn
                        </span>
                    </Link>
                </li>
            </ul>
        </>
    )
}