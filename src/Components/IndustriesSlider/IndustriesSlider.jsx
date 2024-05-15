import { useEffect, useMemo, useRef, useState } from "react";
import { Html, Plane } from "@react-three/drei";
import { events, useFrame, useThree } from "@react-three/fiber";
import { usePrevious } from 'react-use'
import PropTypes from 'prop-types';
import { easing } from 'maath';

import Slide from "./Slide/Slide";
import useStoreMobileScroll from '../../store/useStoreMobileScroll';

const slides = [
    { image: './image/slider/1.jpg' },
    { image: './image/slider/2.jpg' },
    { image: './image/slider/3.jpg' },
    { image: './image/slider/4.jpg' },
    { image: './image/slider/5.jpg' },
    { image: './image/slider/6.jpg' }
];
const slidesCount = 6;
const nearestAngleMultiplier = 2 * Math.PI / slidesCount;

import s from './IndustriesSlider.module.scss';
import { Vector3 } from "three";
export default function IndustriesSlider() {
    const currentPercentage = useStoreMobileScroll((state) => state.currentPercentage);
    const scrollDistance = useStoreMobileScroll((state) => state.scrollHeight);
    const headerHeight = useStoreMobileScroll((state) => state.headerHeight);
    const activeModel = useStoreMobileScroll((state) => state.activeModel);
    const pageHeight = useStoreMobileScroll((state) => state.pageHeight);
    const [changedPosition, setChangedPosition] = useState({ x: 0, y: 0, z: 0 });
    const [animatedValue, setAnimatedValue] = useState(0);
    const { size, viewport } = useThree();
    const slidesRef = useRef(null);
    const sliderRef = useRef();

    const isDown = useRef(false);
    const startX = useRef(0);
    const progress = useRef(0);
    const speedDrag = 0.1;


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
        const mouseProgress = (x - startX.current) * speedDrag
        progress.current = progress.current + mouseProgress
        startX.current = x
    }

    useEffect(() => {
        setChangedPosition({
            x: 0,
            y: viewport.height / 2 - 0.5 - currentPercentage / 100 * viewport.height + ((((currentPercentage * scrollDistance / 100) - (pageHeight + headerHeight)) * viewport.height) / size.height),
            z: 0
        })
    }, [currentPercentage, headerHeight, pageHeight, scrollDistance, size, viewport]);

    function normalizeAngle(angle) {
        const nearestAngle = Math.round(angle / nearestAngleMultiplier) * nearestAngleMultiplier;
        return nearestAngle;
    }

    useFrame((state, delta) => {
        if (slidesRef.current) {
            const normalizedAngle = normalizeAngle(progress.current);
            const rotationVector = new Vector3(0, normalizedAngle, 0);
            easing.damp3(slidesRef.current.rotation, rotationVector, 0.5, delta);
        }
        if (sliderRef.current) {
            easing.damp3(sliderRef.current.position, changedPosition, 0.5, delta);
        }
    });

    return (
        <mesh ref={sliderRef} scale={0.35}>
            <Plane
                args={[10, 15]}
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
                    <Slide key={index} index={index} image={item.image} size={nearestAngleMultiplier} activeModel={activeModel} />
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