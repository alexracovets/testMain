import UI_Button from '../../Components/UI_Button/UI_Button';
import Fliper from '../../Components/Fliper/Fliper';

import s from './MainPage.module.scss';
export default function MainPage() {

    return (
        <div className={s.wrapper}>
            <section>
                <div className={s.content}>
                    <h1>Reliable partner in</h1>
                    <Fliper />
                    <div className={s.btn}>
                        <UI_Button text={'DISCOVER US'} arrow />
                    </div>
                </div>
            </section>
        </div>
    )
}