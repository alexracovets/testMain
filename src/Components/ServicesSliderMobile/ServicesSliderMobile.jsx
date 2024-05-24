import { useEffect, useRef, useState } from "react";
import { Html, Plane } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import PropTypes from 'prop-types';
import { easing } from 'maath';
import { Vector3 } from "three";

import Slide from "./Slide/Slide";
import useStoreMobileScroll from '../../store/useStoreMobileScroll';
import useStoreServices from '../../store/useStoreServices';
const slides = [
    { image: '/image/slider/1.jpg' },
    { image: '/image/slider/2.jpg' },
    { image: '/image/slider/3.jpg' },
    { image: '/image/slider/4.jpg' }
];
const slidesCount = 4;
const nearestAngleMultiplier = 2 * Math.PI / slidesCount;

import s from './ServicesSliderMobile.module.scss';
export default function ServicesSliderMobile() {
    const currentIndexServices = useStoreServices((state) => state.activeServices);
    const getSliderServices = useStoreServices((state) => state.getSliderServices);
    const scrollHeight = useStoreMobileScroll((state) => state.scrollHeight);
    const headerHeight = useStoreMobileScroll((state) => state.headerHeight);
    const activeModel = useStoreMobileScroll((state) => state.activeModel);
    const pageHeight = useStoreMobileScroll((state) => state.pageHeight);
    const scrollTop = useStoreMobileScroll((state) => state.scrollTop);
    const [isActive, setIsActive] = useState(false);
    const { size, viewport } = useThree();
    const slidesRef = useRef(null);
    const sliderRef = useRef(null);
    const isDown = useRef(false);
    const startX = useRef(0); 
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [animatedValue, setAnimatedValue] = useState(0);
    const [isNewSlide, setIsNewSlide] = useState(false);
    const [rotateCount, setRotateCount] = useState(0);

    const handleDown = (e) => {
        e.stopPropagation()
        isDown.current = true
        startX.current = e.clientX || (e.touches && e.touches[0].clientX) || 0
    }

    const handleUp = (e) => {
        e.stopPropagation()
        isDown.current = false;
    }

    const handleMove = (e) => {
        e.stopPropagation();
        if (!isDown.current || isNewSlide) return;

        const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
        const mouseProgress = (x - startX.current);

        if (mouseProgress < 0) {
            setIsNewSlide(true);
            if (currentSlideIndex + 1 === slidesCount) {
                setRotateCount((prevRotate) => prevRotate + 1);
            }

            setCurrentSlideIndex((prevIndex) => (prevIndex + 1 === slidesCount ? 0 : prevIndex + 1));
        } else if (mouseProgress > 0) {
            setIsNewSlide(true);
            if (currentSlideIndex - 1 === -1) {
                setRotateCount((prevRotate) => prevRotate - 1);
            }
            setRotateCount((prevRotate) => prevRotate - 1);
            setCurrentSlideIndex((prevIndex) => (prevIndex - 1 === -1 ? slidesCount - 1 : prevIndex - 1));
        }
    };

    const animateValue = (start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setAnimatedValue(Math.floor(progress * (end - start) + start));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    useEffect(() => {
        if (isNewSlide) {
            setTimeout(() => {
                setIsNewSlide(false)
            }, 500)
        }
    }, [isNewSlide])

    useEffect(() => setIsActive(activeModel === 2), [activeModel]);
    useEffect(() => {
        animateValue(animatedValue, 360 / slidesCount + currentSlideIndex * 360 / slidesCount, 500);
        currentIndexServices !== -1 && getSliderServices(currentSlideIndex);
    }, [currentSlideIndex, currentIndexServices, getSliderServices]);

    useEffect(() => {
        setCurrentSlideIndex(currentIndexServices)
    }, [currentIndexServices])

    useFrame((state, delta) => {
        if (slidesRef.current && isActive) {
            const rotateTo = - (-50 + currentSlideIndex * 90) * Math.PI / 180;
            const rotationVector = new Vector3(0, rotateTo, 0);
            easing.damp3(slidesRef.current.rotation, rotationVector, 0.5, delta);
        }
        if (sliderRef.current && isActive) {
            const targetPosition = new Vector3(
                0,
                viewport.height / 20 + viewport.height / 2 + 1 / 2 + ((scrollHeight - size.height) - (scrollHeight - scrollTop - size.height + pageHeight + headerHeight)) * viewport.height / size.height,
                0
            )
            easing.damp3(sliderRef.current.position, targetPosition, 0.5, delta);
        }
    });

    return (
        <mesh
            ref={sliderRef}
            scale={size.width / 2600}
            visible={isActive ? true : false}
        >
            <mesh scale={1.3}
            >
                <Plane
                    args={[20, 30]}
                    position={[0, 0, 0]}
                    visible={false}
                    onPointerDown={handleDown}
                    onPointerUp={handleUp}
                    onPointerMove={handleMove}
                    onPointerLeave={handleUp}
                    onPointerCancel={handleUp}
                />
                <mesh
                    position={[0, 0, 0]}
                    ref={slidesRef}
                >
                    {slides.map((item, index) => (
                        <Slide key={index} index={index} image={item.image} size={nearestAngleMultiplier} isActive={isActive} />
                    ))}
                </mesh>
                <Html
                    as='div'
                    wrapperClass={isActive ? s.count_360 + ' ' + s.active : s.count_360}
                    position={[0, 0, 4]}
                    transform
                    center
                >
                    <div className={s.wrapper} >
                        <div className={s.number_current}>{animatedValue}°</div>
                        <div className={s.dash_line}></div>
                        <div className={s.number_360}>360°</div>
                    </div>
                </Html>
            </mesh>
        </mesh>

    )
}


ServicesSliderMobile.propTypes = {
    position: PropTypes.object
};