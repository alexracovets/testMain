import { useState } from 'react';
import ServicesItem from './ServicesItem/ServicesItem';
import { Scrollbar } from 'react-scrollbars-custom';
import s from './Services.module.scss';
import './scroll.scss'
export default function Services() {

    const [currentService, setCurrentService] = useState(0);

    const colapses = [
        {
            title: 'Artificial Intelligence (AI)',
            colapse: "Unlock the potential of AI with our tailored solutions. From machine learning algorithms to natural language processing and computer vision, we harness the power of AI to drive efficiency, enhance decision-making processes, and deliver personalized experiences for your customers.",
            idx: 0
        },
        {
            title: 'Extended Reality (XR)',
            colapse: "Unlock the potential of AI with our tailored solutions. From machine learning algorithms to natural language processing and computer vision, we harness the power of AI to drive efficiency, enhance decision-making processes, and deliver personalized experiences for your customers.",
            idx: 1
        },
        {
            title: 'Software Development',
            colapse: "Unlock the potential of AI with our tailored solutions. From machine learning algorithms to natural language processing and computer vision, we harness the power of AI to drive efficiency, enhance decision-making processes, and deliver personalized experiences for your customers.",
            idx: 2
        },
        {
            title: 'Digital Marketing',
            colapse: "Unlock the potential of AI with our tailored solutions. From machine learning algorithms to natural language processing and computer vision, we harness the power of AI to drive efficiency, enhance decision-making processes, and deliver personalized experiences for your customers.",
            idx: 3
        }
    ]

    return (
        <Scrollbar className={'scroll'}>
            <ul className={s.services}>
                {colapses.map((colapse) => {
                    return (
                        <ServicesItem
                            key={colapse.idx}
                            index={colapse.idx}
                            title={colapse.title}
                            colapse={colapse.colapse}
                            currentService={currentService}
                            setCurrentService={setCurrentService}
                        />
                    )
                })}
            </ul>
        </Scrollbar>
    )
}