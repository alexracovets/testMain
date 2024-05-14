import { useEffect, useRef, useState } from "react";
import { Html, Plane } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import PropTypes from 'prop-types';
import { easing } from 'maath';

import Slide from "./Slide/Slide";
import useStoreMobileScroll from '../../store/useStoreMobileScroll';

import s from './IndustriesSlider.module.scss';
export default function IndustriesSlider() {

    const targetRotation = useRef(0);
    const [startX, setStartX] = useState(0);
    const [rotation, setRotation] = useState(0);
    const [dragging, setDragging] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);
    const [animatedValue, setAnimatedValue] = useState(0);
    const [deviceWidth, setDeviceWidth] = useState(0);
    const sliderRef = useRef();
    const slidesCount = 6;
    const sizeSlide = Math.PI * 2 / slidesCount;
    const [changedPosition, setChangedPosition] = useState({ x: 0, y: 0, z: 0 });
    const { size, viewport } = useThree();
    const currentPercentage = useStoreMobileScroll((state) => state.currentPercentage);
    const scrollDistance = useStoreMobileScroll((state) => state.scrollHeight);
    const headerHeight = useStoreMobileScroll((state) => state.headerHeight);
    const pageHeight = useStoreMobileScroll((state) => state.pageHeight);
    const activeModel = useStoreMobileScroll((state) => state.activeModel);
    const slidesRef = useRef(null);

    const slides = [
        { image: './image/slider/1.jpg' },
        { image: './image/slider/2.jpg' },
        { image: './image/slider/3.jpg' },
        { image: './image/slider/4.jpg' },
        { image: './image/slider/5.jpg' },
        { image: './image/slider/6.jpg' }
    ];

    const updateActiveSlide = (rotation) => {
        const normalizedRotation = (rotation % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
        const slideIndex = slidesCount - Math.round(normalizedRotation / sizeSlide);
        setActiveSlide(slideIndex % slidesCount);
    };

    const onPointerDown = (e) => {
        e.stopPropagation();
        setDragging(true);
        setStartX(e.clientX);
    };

    const onPointerMove = (e) => {
        e.stopPropagation();
        if (!dragging) return;
        const x = e.clientX;
        const intesity = deviceWidth < 720 ? 20 : 50;
        const diff = (startX - x) / intesity;
        const newRotation = rotation - diff;
        setRotation(newRotation);
        targetRotation.current = newRotation;
        setStartX(x);
    };

    const onPointerUp = (e) => {
        e.stopPropagation();
        setDragging(false);
        const finalRotation = Math.round(targetRotation.current / sizeSlide) * sizeSlide;
        targetRotation.current = finalRotation;
        updateActiveSlide(finalRotation);
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
        setDeviceWidth(window.innerWidth)
    }, []);

    useEffect(() => {
        const newValue = 60 * (activeSlide + 1);
        animateValue(animatedValue, newValue, 500); // Animate over 500ms
    }, [activeSlide, animatedValue]);
    useEffect(() => {
        if (slidesRef && slidesRef.current) {
            setChangedPosition({
                x: 0,
                y: viewport.height / 2 - 0.5 - currentPercentage / 100 * viewport.height + ((((currentPercentage * scrollDistance / 100) - (pageHeight + headerHeight)) * viewport.height) / size.height),
                z: 0
            })
        }

    }, [currentPercentage, headerHeight, pageHeight, scrollDistance, size, viewport, slidesRef]);

    useFrame((state, delta) => {
        easing.damp3(sliderRef.current.position, changedPosition, 0.5, delta);
        const newRotation = rotation + (targetRotation.current - rotation) * 0.05;
        setRotation(newRotation);
        if (!dragging) {
            updateActiveSlide(newRotation);
        }
    });
    return (
        <mesh ref={sliderRef} scale={0.35}>
            <Plane
                args={[20, 20]}
                position={[0, 0, 0]}
                onPointerLeave={onPointerUp}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                visible={false}
            />
            <mesh
                rotation={[0, rotation, 0]}
                position={[0, 0, 0]}
                ref={slidesRef}
            >
                {slides.map((item, index) => (
                    <Slide key={index} index={index} image={item.image} size={sizeSlide} activeModel={activeModel} />
                ))}
            </mesh>
            <Html
                as='div'
                wrapperClass={s.count_360}
                position={[-5, -4, 0]}
            >
                <div className={s.wrapper}>
                    <div className={s.number_current}>{animatedValue}°</div>
                    <div className={s.dash_line}></div>
                    <div className={s.number_360}>360°</div>
                </div>
            </Html>
        </mesh>
    )
}


IndustriesSlider.propTypes = {
    position: PropTypes.object
};