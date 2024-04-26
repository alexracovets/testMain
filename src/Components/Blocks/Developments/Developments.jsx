import ai from '/image/icons/developments/ai.svg';
import xr from '/image/icons/developments/xr.svg';
import dev from '/image/icons/developments/dev.svg';
import digital from '/image/icons/developments/digital.svg';

import s from './Developments.module.scss';
export default function Developments() {

    return (
        <ul className={s.developments}>
            <li>
                <img src={ai} alt='Artificial Intelligence' />
                <span className={s.text}>
                    <span>Artificial</span>
                    <span>Intelligence</span>
                </span>
            </li>
            <li>
                <img src={xr} alt='Artificial Intelligence' />
                <span className={s.text}>
                    <span>Extended</span>
                    <span>reality</span>
                </span>
            </li>
            <li>
                <img src={dev} alt='Artificial Intelligence' />
                <span className={s.text}>
                    <span>Software</span>
                    <span>Development</span>
                </span>
            </li>
            <li>
                <img src={digital} alt='Artificial Intelligence' />
                <span className={s.text}>
                    <span>Digital</span>
                    <span>Marketing</span>
                </span>
            </li>
        </ul>
    )
} 