

import s from './MobileMain.module.scss';
import Fliper from "../../Components/Fliper/Fliper";
import UI_Button from "../../Components/UI_Button/UI_Button";
import Developments from "../../Components/Blocks/Developments/Developments";
import Strengths from '../../Components/Blocks/Strengths/Strengths';
import Services from '../../Components/Blocks/Services/Services';
import Industries from '../../Components/Blocks/Industries/Industries';

export default function MobileMain() {

    return (
        <div className={s.wrapper}>
            <section>
                <div className={s.content}>
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
                    <h2>
                        About Us
                    </h2>
                    <div className={s.lies_info}>
                        <h3>
                            Our strength lies in our agile problem-solving approaches, delivering top-notch work with swift turnaround.
                        </h3>
                        <p>
                            We specialize in software development and digital marketing, serving as a trusted partner for leading companies, providing expert support and deep industry knowledge.
                        </p>
                    </div>
                    <div className={s.strengths}>
                        <Strengths />
                    </div>
                </div>
            </section>
            <section>
                <div className={s.content}>
                    <h2>
                        Services
                    </h2>
                    <Services mobile />
                </div>
            </section>
            <section>
                <div className={s.content}>
                    <h2>
                        INDUSTRIES
                    </h2>
                    <div className={s.industries}>
                        <Industries mobile />
                    </div>
                </div>
            </section>
        </div>

    )
}