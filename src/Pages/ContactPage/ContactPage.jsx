import instagram from '/image/icons/social/instagram.svg';
import facebook from '/image/icons/social/facebook.svg';
import linkedin from '/image/icons/social/linkedin.svg';

import UI_Button from '../../Components/UI_Button/UI_Button';

import s from './ContactPage.module.scss';

export default function ContactPage() {

    return (
        <div className={s.wrapper}>
            <section>
                <div className={s.content}>
                    <div className={s.contact_wrapper}>
                        <h2>Contacts</h2>
                        <div className={s.contactBtn}>
                            <button className={s.text}>
                                info@spotium360.com
                            </button>
                            <button className={s.copy}>
                                copy
                            </button>
                        </div>
                    </div>
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
        </div>
    )
}