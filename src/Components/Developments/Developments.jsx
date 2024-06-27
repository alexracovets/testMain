import ai from '/image/icons/developments/ai.svg';
import cyber from '/image/icons/developments/cyber.svg';
import dev from '/image/icons/developments/dev.svg';
import digital from '/image/icons/developments/digital.svg';
import Marquee from "react-fast-marquee";
import s from './Developments.module.scss';

export default function Developments() {
    return (
        <div className={s.developments__wrapper}>
            <div className={s.developments}>
                <Marquee autoFill>
                    <ul className={s.developments__list}>
                        <li>
                            <img src={ai} alt='Artificial Intelligence' />
                            <span className={s.text}>
                                <span>Artificial</span>
                                <span>Intelligence</span>
                            </span>
                        </li>
                        <li>
                            <img src={cyber} alt='Cybersecurity' />
                            <span className={s.text}>
                                <span>Cybersecurity</span>
                            </span>
                        </li>
                        <li>
                            <img src={dev} alt='Web Development' />
                            <span className={s.text}>
                                <span>Web</span>
                                <span>Development</span>
                            </span>
                        </li>
                        <li>
                            <img src={digital} alt='Digital Marketing' />
                            <span className={s.text}>
                                <span>Digital</span>
                                <span>Marketing</span>
                            </span>
                        </li>
                    </ul>
                </Marquee>
            </div>
        </div>
    );
}
