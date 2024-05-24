import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Scrollbar } from 'react-scrollbars-custom';
import ServicesItem from './ServicesItem/ServicesItem';

import useStoreServices from '../../store/useStoreServices';

import s from './Services.module.scss';
import './scroll.scss'
export default function Services({ mobile }) { 
    const changeActiveServices = useStoreServices((state) => state.changeActiveServices);
    const sliderServices = useStoreServices((state) => state.sliderServices);
    const [currentService, setCurrentService] = useState(sliderServices);
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
    useEffect(() => {
        setCurrentService(sliderServices);
    }, [sliderServices]);

    useEffect(() => {
        changeActiveServices(currentService);
    }, [currentService, changeActiveServices]);

    return (
        <>
            {!mobile ? <Scrollbar className={'scroll'}>
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
            </Scrollbar> :
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
            }
        </>

    )
}

Services.propTypes = {
    mobile: PropTypes.bool
}