import { Cylinder } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { BackSide, DoubleSide, FrontSide, TextureLoader } from "three";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import gsap from "gsap";

import useStoreMobileScroll from '../../../store/useStoreMobileScroll';

export default function Slide({ index, image, size }) {
    const activeModel = useStoreMobileScroll((state) => state.activeModel);
    const texture = useLoader(TextureLoader, image);
    const borderHeight = 0.01;
    const borderColor = '#F8A86A';
    const slideWidth = 4;
    const slideHeight = 5;
    const [animation, setAnimation] = useState({ theta: 0, height: 0 });
    const [isActive, setIsActive] = useState(false);
    const test = { theta: 0, height: 0 };
    useEffect(() => {
        setIsActive(activeModel === 3)
    }, [activeModel])

    useEffect(() => {
        const tl = gsap.timeline();
        if (isActive) {
            tl
                .to(test, {
                    height: slideHeight,
                    duration: 0.4,
                    ease: "power1.out",
                    delay: .4,
                    onUpdate: () => setAnimation({ theta: test.theta, height: test.height })
                }, "<")
                .to(test, {
                    theta: size - 0.06,
                    duration: 0.4,
                    ease: "power1.out",
                    onUpdate: () => setAnimation({ theta: test.theta, height: test.height })
                });
        } else {
            tl
                .to(test, {
                    theta: 0,
                    duration: 0.4,
                    ease: "power1.out",
                    onUpdate: () => setAnimation({ theta: test.theta, height: test.height })
                }, "<")
                .to(test, {
                    height: 0,
                    duration: 0.4,
                    ease: "power1.out",
                    onUpdate: () => setAnimation({ theta: test.theta, height: test.height })
                });
        }

        return () => tl.kill();
    }, [isActive, size]);

    return (
        <>
            <Cylinder args={[slideWidth, slideWidth, borderHeight, 60, 1, true, size * index + 2 * borderHeight, animation.theta + borderHeight]} position={[0, (5 + borderHeight) / 2, 0]}>
                <meshBasicMaterial side={DoubleSide} color={borderColor} />
            </Cylinder>
            <Cylinder args={[slideWidth, slideWidth, borderHeight, 60, 1, true, size * index + 2 * borderHeight, animation.theta + borderHeight]} position={[0, -(5 + borderHeight) / 2, 0]}>
                <meshBasicMaterial side={DoubleSide} color={borderColor} />
            </Cylinder>
            <Cylinder args={[slideWidth, slideWidth, animation.height, 60, 1, true, size * index + 2 * borderHeight, borderHeight / 2]} position={[0, 0, 0]}>
                <meshBasicMaterial side={DoubleSide} color={borderColor} />
            </Cylinder>
            <Cylinder args={[slideWidth, slideWidth, animation.height, 60, 1, true, size * index + size - 3.5 * borderHeight, borderHeight / 2]}>
                <meshBasicMaterial side={DoubleSide} color={borderColor} />
            </Cylinder>
            <Cylinder args={[slideWidth, slideWidth, animation.height, 60, 1, true, size * index + 2.5 * borderHeight, animation.theta]}>
                <meshBasicMaterial attach="material" side={BackSide} color={'#453C41'} />
            </Cylinder>
            <Cylinder args={[slideWidth, slideWidth, animation.height, 60, 1, true, size * index + 2.5 * borderHeight, animation.theta]} >
                <meshBasicMaterial attach="material" side={FrontSide} map={texture} />
            </Cylinder>
        </>
    );
}

Slide.propTypes = {
    index: PropTypes.number,
    image: PropTypes.string,
    size: PropTypes.number,
    activeModel: PropTypes.number
};