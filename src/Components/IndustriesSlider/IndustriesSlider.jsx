import { useEffect, useRef, useState } from "react";
import { Html, Plane } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import PropTypes from 'prop-types';
import { easing } from 'maath';
import { Vector3 } from "three";

import Slide from "./Slide/Slide";
import useStoreMobileScroll from '../../store/useStoreMobileScroll';
import useStoreIndustries from '../../store/useStoreIndustries';
const slides = [
    { image: '/image/slider/1.jpg' },
    { image: '/image/slider/2.jpg' },
    { image: '/image/slider/3.jpg' },
    { image: '/image/slider/4.jpg' },
    { image: '/image/slider/5.jpg' },
    { image: '/image/slider/6.jpg' }
];
const slidesCount = 6;
const nearestAngleMultiplier = 2 * Math.PI / slidesCount;

import s from './IndustriesSlider.module.scss';
export default function IndustriesSlider() {
    const currentIndexIndustry = useStoreIndustries((state) => state.activeIndustry);
    const getSliderIndustry = useStoreIndustries((state) => state.getSliderIndustry);
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
    const progress = useRef(0);
    const speedDrag = -0.09;
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [animatedValue, setAnimatedValue] = useState(0);

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
        e.stopPropagation()
        if (!isDown.current) return
        const x = e.clientX || (e.touches && e.touches[0].clientX) || 0
        const mouseProgress = (x - startX.current) * speedDrag;
        progress.current = progress.current + mouseProgress;
        startX.current = x;
    }

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

    const normalizeSlideIndex = (angle) => {
        const fullRotation = 360;
        const slideAngle = fullRotation / slidesCount;
        const normalizedAngle = ((angle % fullRotation) + fullRotation) % fullRotation;
        const slideIndex = Math.floor(normalizedAngle / slideAngle) % slidesCount;
        return slideIndex;
    }

    const normalizeAngle = (angle) => {
        const normalizedRadians = Math.round(angle / nearestAngleMultiplier) * nearestAngleMultiplier;
        const degrees = parseFloat((normalizedRadians * (180 / Math.PI)).toFixed(2));
        const currentSlide = normalizeSlideIndex(-degrees);
        setCurrentSlideIndex(currentSlide);
        return degrees;
    }


    useEffect(() => setIsActive(activeModel === 3), [activeModel]);
    useEffect(() => {
        animateValue(animatedValue, 60 + currentSlideIndex * 60, 500);
        if (currentIndexIndustry !== -1) {
            getSliderIndustry(currentSlideIndex);
        }
    }, [currentSlideIndex, currentIndexIndustry]);

    useEffect(() => {
        if (currentIndexIndustry !== -1) {
            const targetAngle = 2 * Math.PI - (2 * Math.PI / slidesCount) * currentIndexIndustry;
            const currentAngle = progress.current % (2 * Math.PI);
            let deltaAngle = targetAngle - currentAngle;
            deltaAngle > Math.PI ? deltaAngle -= 2 * Math.PI : deltaAngle += 2 * Math.PI;
            const newProgress = progress.current + deltaAngle;
            progress.current = newProgress;
        }
    }, [currentIndexIndustry, getSliderIndustry]);

    useFrame((state, delta) => {
        if (slidesRef.current && isActive) {
            const normalizedAngle = normalizeAngle(progress.current);
            const rotationVector = new Vector3(0, (-30 + normalizedAngle) * Math.PI / 180, 0);
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
            <mesh scale={1.2}
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


IndustriesSlider.propTypes = {
    position: PropTypes.object
};