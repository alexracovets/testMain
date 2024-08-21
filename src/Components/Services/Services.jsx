import { Scrollbar } from 'react-scrollbars-custom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import UI_Button from '../UI_Button/UI_Button';
import ServicesItem from './ServicesItem/ServicesItem';
import useStoreServices from '../../store/useStoreServices';
import useModalForm from '../../store/useModalForm';
import useScrollPageNavigation from '../../store/useScrollPageNavigation';

import './scroll.scss';
import s from './Services.module.scss';
import servicesData from '../../data/servicesData';
export default function Services({ mobile }) {
    const changeActiveServices = useStoreServices((state) => state.changeActiveServices);
    const sliderServices = useStoreServices((state) => state.sliderServices);
    const [currentService, setCurrentService] = useState(sliderServices);
    const setIsActiveForm = useModalForm((state) => state.setIsActive);
    const setIsScrollAllowed = useScrollPageNavigation((state) => state.setIsScrollAllowed);
    const setIsTopScroll = useScrollPageNavigation((state) => state.setIsTopScroll);
    const setIsBottomScroll = useScrollPageNavigation((state) => state.setIsBottomScroll);
    const setIsScrollOnPage = useScrollPageNavigation((state) => state.setIsScrollOnPage);

    const wheelPointer = (scroll) => {
        setIsTopScroll(false);
        setIsBottomScroll(false);
        setIsScrollOnPage(true);
        const isScrollBotoom = scroll.contentScrollHeight - scroll.clientHeight - scroll.scrollTop < 5;
        const isScrollTop = scroll.scrollTop === 0;
        if (isScrollBotoom) {
            setIsBottomScroll(true);
        } else if (isScrollTop) {
            setIsTopScroll(true);
        } else setIsScrollAllowed(false);
    }

    useEffect(() => {
        setCurrentService(sliderServices);
    }, [sliderServices]);

    useEffect(() => {
        changeActiveServices(currentService);
    }, [currentService, changeActiveServices]);

    useEffect(() => {
        setTimeout(() => {
            setIsScrollOnPage(true);
            setIsTopScroll(true);
            setIsScrollAllowed(false);
        }, 100);
    }, [setIsScrollOnPage, setIsTopScroll, setIsScrollAllowed])

    return (
        <>
            {!mobile ?
                <div className={s.services_box}>
                    <Scrollbar
                        className={'scroll'}
                        onUpdate={(prevScrollValues) => wheelPointer(prevScrollValues)}
                    >
                        <div className={s.services__wrapper}
                            onMouseEnter={() => setIsScrollAllowed(false)}
                            onMouseLeave={() => setIsScrollAllowed(true)}
                        >
                            <ul className={s.services}>
                                {servicesData.map((colapse) => {
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
                        </div>
                    </Scrollbar>
                </div >
                :
                <div className={s.services_box}>
                    <div className={s.services__wrapper}>
                        <ul className={s.services}>
                            {servicesData.map((colapse) => {
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
                        <div className={s.btn} onClick={() => setIsActiveForm(true)}>
                            <UI_Button text={`LET'S TALK`} small arrow />
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

Services.propTypes = {
    mobile: PropTypes.bool
}