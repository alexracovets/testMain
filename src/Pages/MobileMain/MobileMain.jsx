import { useEffect, useRef, useState } from "react";

import Fliper from "../../Components/Fliper/Fliper";
import Services from '../../Components/Services/Services';
import Strengths from '../../Components/Strengths/Strengths';
import UI_Button from "../../Components/UI_Button/UI_Button";
import Industries from '../../Components/Industries/Industries';
import Developments from "../../Components/Developments/Developments";

import useStoreMobileScroll from '../../store/useStoreMobileScroll';
import useAnchorScroll from '../../store/useAnchorScroll';

import s from './MobileMain.module.scss';

export default function MobileMain() {
    const setActiveModel = useStoreMobileScroll((state) => state.setActiveModel);
    const getPageHeight = useStoreMobileScroll((state) => state.getPageHeight);
    const scrollHeight = useStoreMobileScroll((state) => state.scrollHeight);
    const getScrollTo = useAnchorScroll((state) => state.getScrollTo);
    const scrollSection = useAnchorScroll((state) => state.section);

    const firstSection = useRef(null);
    const secondSection = useRef(null);
    const thirdSection = useRef(null);

    const scrollAbout = useRef(null);
    const scrollServices = useRef(null);
    const scrollIndustries = useRef(null);

    const [isVisibleFirst, setVisibleFirst] = useState(false);
    const [isVisibleSecond, setVisibleSecond] = useState(false);
    const [isVisibleThird, setVisibleThird] = useState(false);


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.target === firstSection.current) {
                    setVisibleFirst(entry.isIntersecting);
                } else if (entry.target === secondSection.current) {
                    setVisibleSecond(entry.isIntersecting);
                } else if (entry.target === thirdSection.current) {
                    setVisibleThird(entry.isIntersecting);
                }
            });
        }, { threshold: 0.5 });

        if (firstSection.current) observer.observe(firstSection.current);
        if (secondSection.current) observer.observe(secondSection.current);
        if (thirdSection.current) observer.observe(thirdSection.current);

        return () => {
            if (firstSection.current) observer.unobserve(firstSection.current);
            if (secondSection.current) observer.unobserve(secondSection.current);
            if (thirdSection.current) observer.unobserve(thirdSection.current);
        };
    }, []);
    useEffect(() => {
        if (isVisibleFirst) {
            getPageHeight(firstSection.current.offsetTop + firstSection.current.clientHeight / 2);
            setActiveModel(0);
        } else if (isVisibleSecond) {
            getPageHeight(secondSection.current.offsetTop + secondSection.current.clientHeight / 2);
            setActiveModel(2);
        } else if (isVisibleThird) {
            getPageHeight(thirdSection.current.offsetTop + thirdSection.current.clientHeight / 2);
            setActiveModel(3);
        }
    }, [isVisibleFirst, isVisibleSecond, isVisibleThird, setActiveModel, getPageHeight, scrollHeight]);

    useEffect(() => {
        if (scrollSection === 'about' && scrollAbout.current) {
            const target = scrollAbout.current.offsetTop;
            getScrollTo(target)
        } else if (scrollSection === 'services' && scrollServices.current) {
            const target = scrollServices.current.offsetTop;
            getScrollTo(target)
        } else if (scrollSection === 'industries' && scrollIndustries.current) {
            const target = scrollIndustries.current.offsetTop;
            getScrollTo(target)
        } else if (scrollSection === 'contacts') {
            getScrollTo(scrollHeight)
        }
    }, [scrollSection, getScrollTo, scrollHeight])
    return (
        <div className={s.wrapper}  >
            <section>
                <div className={s.content}>
                    <div className={s.model_space} ref={firstSection}></div>
                    <h1>Reliable partner in</h1>
                    <Fliper />
                    <div className={s.btn}>
                        <UI_Button text={'DISCOVER US'} arrow />
                    </div>
                    <Developments />
                </div>
            </section>
            <section ref={scrollAbout}>
                <div className={s.content}  >
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
            <section ref={scrollServices}>
                <div className={s.content}>
                    <div className={s.model_space} ref={secondSection}></div>
                    <h2> Services </h2>
                    <Services mobile />
                </div>
            </section>
            <section ref={scrollIndustries}>
                <div className={s.content}>
                    <h2> INDUSTRIES </h2>
                    <div className={s.model_space} ref={thirdSection}></div>
                    <Industries mobile />
                </div>
            </section>
        </div>
    )
}