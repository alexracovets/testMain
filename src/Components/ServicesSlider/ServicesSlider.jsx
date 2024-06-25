import { useEffect, useRef, useState } from "react";
import { Html, Plane } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import PropTypes from 'prop-types';
import { easing } from 'maath';
import { Vector3 } from "three";

import Slide from "./Slide/Slide";
import useActiveModel from '../../store/useActiveModel';
import useStoreServices from '../../store/useStoreServices';

const slides = [
    {
        image: false,
        video: './video/services/1.mp4'
    },
    {
        image: false,
        video: './video/services/2.mp4'
    },
    {
        image: false,
        video: './video/services/3.mp4'
    },
    {
        image: false,
        video: './video/services/4.mp4'
    },
    {
        image: false,
        video: './video/services/5.mp4'
    }
];

const slidesCount = 5;
const nearestAngleMultiplier = 2 * Math.PI / slidesCount;

import s from './ServicesSlider.module.scss';
export default function ServicesSlider() {
    const currentIndexServices = useStoreServices((state) => state.activeServices);
    const getSliderServices = useStoreServices((state) => state.getSliderServices);
    const activeModel = useActiveModel((state) => state.activeModel);
    const slidesRef = useRef(null);
    const sliderRef = useRef(null);
    const startX = useRef(0);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(currentIndexServices);
    const [fakeSlideIndex, setFakeSlideIndex] = useState(currentIndexServices);
    const [animatedValue, setAnimatedValue] = useState(currentIndexServices);
    const [isActive, setIsActive] = useState(activeModel === 2);
    const [isSliderFocused, setSliderFocused] = useState(false);
    const [isSwap, setIsSwap] = useState(false);
    const [isCursorPointer, setIsCursorPointer] = useState(false);

    const handlePointerDown = (e) => {
        e.stopPropagation();
        setSliderFocused(true);
        startX.current = e.clientX;
    };

    const delaySlideAnimation = (isStart) => {
        isStart ? setTimeout(() => setIsSwap(false), 400) : null
    }

    const handlePointerMove = (e) => {
        e.stopPropagation();
        setIsCursorPointer(true)
        if (isSliderFocused && !isSwap) {
            const diff = e.clientX - startX.current;
            if (Math.abs(diff) > 20) {
                setIsSwap(true);
                if (diff > 0) {
                    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slidesCount);
                    setFakeSlideIndex((prevIndex) => (prevIndex + 1));
                } else {
                    setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + slidesCount) % slidesCount);
                    setFakeSlideIndex((prevIndex) => (prevIndex - 1));
                }
                startX.current = e.clientX;
            }
        }
    };

    const handlePointerLeave = (e) => {
        e.stopPropagation();
        setIsCursorPointer(false);
        setSliderFocused(false);
    };
    const animateValue = (end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setAnimatedValue(Math.floor(progress * (end - animatedValue) + animatedValue));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    useEffect(() => {
        if (activeModel === 2) {
            setTimeout(() => setIsActive(true), 1000);
        } else {
            setIsActive(false)
        }

    }, [activeModel]);
    useEffect(() => getSliderServices(currentSlideIndex), [currentSlideIndex, getSliderServices]);
    useEffect(() => animateValue(360 / slidesCount + currentIndexServices * 360 / slidesCount, 500), [currentIndexServices]);
    useEffect(() => delaySlideAnimation(isSwap), [isSwap]);



    useEffect(() => {
        let checkFake = (slidesCount + fakeSlideIndex) % slidesCount;
        if (checkFake < 0) {
            checkFake = Math.abs(slidesCount - Math.abs(checkFake))
        } else if (checkFake > 0) {
            checkFake
        } else {
            checkFake = Math.abs(checkFake)
        }
        const currentFake = slidesCount - slidesCount + checkFake > -1 ? Math.abs(checkFake) : checkFake;
        const currentIndex = currentIndexServices;

        if (currentIndex !== currentFake && !isSwap) {
            setIsSwap(true);
            let subtraction = currentFake - currentIndex;

            setFakeSlideIndex((prevIndex) => {
                let result;
                if (prevIndex < 0) {
                    return result = prevIndex - subtraction
                } else if (prevIndex > 0) {
                    return result = prevIndex + subtraction;
                } else if (prevIndex % slidesCount === 0) {
                    return result = prevIndex + subtraction;
                }
                return result
            });
        }
    }, [currentIndexServices, currentSlideIndex, fakeSlideIndex, isSwap]);

    useFrame((state, delta) => {
        if (slidesRef.current && isActive) {
            const rotateTo = -0.8 - fakeSlideIndex * nearestAngleMultiplier;
            const rotationVector = new Vector3(0, rotateTo, 0);
            easing.damp3(slidesRef.current.rotation, rotationVector, 0.5, delta);
        }
    });

    useEffect(() => {
        !isActive ? document.body.style.cursor = 'auto' : document.body.style.cursor = isCursorPointer ? 'pointer' : 'auto';
    }, [isCursorPointer, isActive]);

    return (
        <>
            {isActive ? <mesh
                ref={sliderRef}
                rotation={[0, -1, 0]}
                scale={1.4}
                onPointerDown={handlePointerDown}
                onPointerUp={() => setSliderFocused(false)}
                onPointerMove={handlePointerMove}
                onPointerLeave={handlePointerLeave}
                onPointerCancel={() => setSliderFocused(false)}
            >
                <mesh>
                    <Plane
                        args={[15, 9]}
                        position={[-1, 0, 6]}
                        rotation={[0, Math.PI / 8, 0]}
                        visible={false}
                    />
                    <mesh
                        position={[-1.2, 0, 0]}
                        ref={slidesRef}
                    >
                        {slides.map((item, index) => (
                            <Slide key={index} index={index} image={item.image} size={nearestAngleMultiplier} isActive={isActive} video={item.video} />
                        ))}
                    </mesh>
                    <Html
                        as='div'
                        wrapperClass={isActive ? s.count_360 + ' ' + s.active : s.count_360}
                        position={[-4, -4.8, 0]}
                        rotation={[0, 0.4, 0]}
                        zIndexRange={[0, 0]}
                    >
                        <div className={s.wrapper} >
                            <div className={s.number_current}>{animatedValue}°</div>
                            <div className={s.dash_line}></div>
                            <div className={s.number_360}>360°</div>
                        </div>
                    </Html>
                </mesh>
            </mesh> : null}
        </>

    )
}

ServicesSlider.propTypes = {
    position: PropTypes.object
};
