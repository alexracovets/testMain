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
        image: '/test/test.png',
        video: false
    },
    {
        image: false,
        video: '/test/ar.mp4'
    },
    {
        image: '/test/test.png',
        video: false
    },
    {
        image: false,
        video: '/test/production.mp4'
    },
    {
        image: '/test/test.png',
        video: false
    }
];

const slidesCount = 5;
const nearestAngleMultiplier = 2 * Math.PI / slidesCount;

import s from './ServicesSlider.module.scss';
export default function ServicesSlider() {
    const currentIndexServices = useStoreServices((state) => state.activeServices);
    const getSliderServices = useStoreServices((state) => state.getSliderServices);
    const activeModel = useActiveModel((state) => state.activeModel);
    const [isActive, setIsActive] = useState(false);
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
            const rotateTo = - (-40 + currentSlideIndex * 72) * Math.PI / 180;
            const rotationVector = new Vector3(0, rotateTo, 0);
            easing.damp3(slidesRef.current.rotation, rotationVector, 0.5, delta);
        }
    });

    return (
        <mesh
            ref={sliderRef}
            visible={isActive ? true : false}
            rotation={[0, -1.2, 0]}
            scale={1.2}
        >
            <mesh >
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
                        <Slide key={index} index={index} image={item.image} size={nearestAngleMultiplier} isActive={isActive} video={item.video} />
                    ))}
                </mesh>
                <Html
                    as='div'
                    wrapperClass={isActive ? s.count_360 + ' ' + s.active : s.count_360}
                    position={[0, 0, 4]}
                    transform
                    center
                    zIndexRange={[1, 0]}
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

ServicesSlider.propTypes = {
    position: PropTypes.object
};