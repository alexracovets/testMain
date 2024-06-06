import instagram from '/image/icons/social/instagram.svg';
import facebook from '/image/icons/social/facebook.svg';
import linkedin from '/image/icons/social/linkedin.svg';

import s from './Socials.module.scss';
export default function Socials() {
    const days = [
        {
            day: 'Mon - Fri:',
            time: '10:00 AM - 6:00 PM'
        },
        {
            day: 'Sat:',
            time: '10:00 AM - 3:00 PM'
        },
        {
            day: 'Sun:',
            time: 'Day Off'
        }
    ]
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
            <div className={s.socials}>
                <button className={s.socialsBtn}>
                    <img src={instagram} alt='Instagram' />
                    <span className={s.text}>
                        Instagram
                    </span>
                </button>
                <button className={s.socialsBtn}>
                    <img src={facebook} alt="Facebook" />
                    <span className={s.text}>
                        Facebook
                    </span>
                </button>
                <button className={s.socialsBtn}>
                    <img src={linkedin} alt="LinkedIn" />
                    <span className={s.text}>
                        LinkedIn
                    </span>
                </button>
            </div>
        </>
    )
} 