import ai from '/image/icons/developments/ai.svg';
import xr from '/image/icons/developments/xr.svg';
import dev from '/image/icons/developments/dev.svg';
import digital from '/image/icons/developments/digital.svg';

import s from './Developments.module.scss';

export default function Developments() {
    return (
        <div className={s.developments__wrapper}>
            <div className={s.developments}>
                <ul className={s.developments__list}>
                    <li>
                        <img src={ai} alt='Artificial Intelligence' />
                        <span className={s.text}>
                            <span>Artificial</span>
                            <span>Intelligence</span>
                        </span>
                    </li>
                    <li>
                        <img src={xr} alt='Extended Reality' />
                        <span className={s.text}>
                            <span>Extended</span>
                            <span>Reality</span>
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
                <ul className={s.developments__list}>
                    <li>
                        <img src={ai} alt='Artificial Intelligence' />
                        <span className={s.text}>
                            <span>Artificial</span>
                            <span>Intelligence</span>
                        </span>
                    </li>
                    <li>
                        <img src={xr} alt='Extended Reality' />
                        <span className={s.text}>
                            <span>Extended</span>
                            <span>Reality</span>
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
            </div>
        </div>
    );
}
