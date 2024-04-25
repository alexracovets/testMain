import Services from '../../Components/Blocks/Services/Services';

import s from './ServicesPage.module.scss';

export default function ServicesPage() { 

    return (
        <div className={s.wrapper} >
            <section>
                <div className={s.content}>
                    <h2>Services</h2>
                    <Services />
                </div>
            </section>
        </div>
    )
}