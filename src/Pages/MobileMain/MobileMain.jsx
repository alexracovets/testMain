import Fliper from "../../Components/Fliper/Fliper";
import Services from '../../Components/Services/Services';
import Strengths from '../../Components/Strengths/Strengths';
import UI_Button from "../../Components/UI_Button/UI_Button";
import Industries from '../../Components/Industries/Industries';
import Developments from "../../Components/Developments/Developments";

import s from './MobileMain.module.scss';

export default function MobileMain() {

    return (
        <div className={s.wrapper}>
            <section>
                <div className={s.content}>
                    <div className={s.model_space}>
                    </div>
                    <h1>Reliable partner in</h1>
                    <Fliper />
                    <div className={s.btn}>
                        <UI_Button text={'DISCOVER US'} arrow />
                    </div>
                    <Developments />
                </div>
            </section>
            <section>
                <div className={s.content}>
                    <h2> About Us </h2>
                    <div className={s.lies_info}>
                        <h3>
                            Our strength lies in our agile problem-solving approaches, delivering top-notch work with swift turnaround.
                        </h3>
                        <p>
                            We specialize in software development and digital marketing, serving as a trusted partner for leading companies, providing expert support and deep industry knowledge.
                        </p>
                    </div>
                    <Strengths />
                </div>
            </section>
            <section>
                <div className={s.content}>
                    <div className={s.model_space}>
                    </div>
                    <h2> Services </h2>
                    <Services mobile />
                </div>
            </section>
            <section>
                <div className={s.content}>
                    <h2> INDUSTRIES </h2>
                    <div className={s.model_space}>
                    </div>
                    <Industries mobile />
                </div>
            </section>
        </div>
    )
}