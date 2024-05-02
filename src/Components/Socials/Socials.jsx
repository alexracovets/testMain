import instagram from '/image/icons/social/instagram.svg';
import facebook from '/image/icons/social/facebook.svg';
import linkedin from '/image/icons/social/linkedin.svg';

import s from './Socials.module.scss';
export default function Socials() {

    return (
        <>
            <div className={s.work_days}>
                Mon - Fri: 10:00 AM - 5:00 PM. <br />
                Sat - 10:00 AM - 3:00 PM
            </div>
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