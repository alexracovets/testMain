import { BackSide, DoubleSide, FrontSide, TextureLoader, VideoTexture } from "three";
import { Cylinder } from "@react-three/drei";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import gsap from "gsap";

export default function Slide({ index, image, size, isActive, video }) {
    const [texture, setTexture] = useState(null)

    useEffect(() => {
        if (image) {
            const textureLoader = new TextureLoader();
            textureLoader.load(image, (loadedTexture) => {
                setTexture(loadedTexture);
            });
        } else if (video) {
            const videoElement = document.createElement('video');
            videoElement.src = video;
            videoElement.crossOrigin = 'anonymous';
            videoElement.loop = true;
            videoElement.muted = true;
            videoElement.play();
            const videoTexture = new VideoTexture(videoElement);
            setTexture(videoTexture);
        }
    }, [image, video]);

    const borderHeight = 0.02;
    const borderColor = '#FEC532';
    const slideWidth = 4;
    const slideHeight = 6;
    const [animation, setAnimation] = useState({ theta: 0, height: 0 });
    const test = { theta: 0, height: 0 };

    useEffect(() => {
        const tl = gsap.timeline({
            onUpdate: () => setAnimation({
                theta: test.theta, height: test.height,
                duration: 0.4,
                ease: "power1.out"
            })
        });

        isActive ? tl.to(test, { height: slideHeight, delay: 1 }, "<").to(test, { theta: size - 0.06 }) : tl.to(test, { theta: 0 }, "<").to(test, { height: 0 })
    }, [isActive, size]);

    return (
        <>
            <Cylinder args={[slideWidth, slideWidth, borderHeight, 60, 1, true, size * index + 2 * borderHeight, animation.theta + borderHeight]} position={[0, (slideHeight + borderHeight) / 2, 0]}>
                <meshBasicMaterial side={DoubleSide} color={borderColor} />
            </Cylinder>
            <Cylinder args={[slideWidth, slideWidth, borderHeight, 60, 1, true, size * index + 2 * borderHeight, animation.theta + borderHeight]} position={[0, -(slideHeight + borderHeight) / 2, 0]}>
                <meshBasicMaterial side={DoubleSide} color={borderColor} />
            </Cylinder>
            <Cylinder args={[slideWidth, slideWidth, animation.height, 60, 1, true, size * index + 2 * borderHeight, borderHeight / 2]} position={[0, 0, 0]}>
                <meshBasicMaterial side={DoubleSide} color={borderColor} />
            </Cylinder>
            <Cylinder args={[slideWidth, slideWidth, animation.height, 60, 1, true, size * index + size - 0.5 * borderHeight, borderHeight / 2]}>
                <meshBasicMaterial side={DoubleSide} color={borderColor} />
            </Cylinder>
            <Cylinder args={[slideWidth, slideWidth, animation.height, 60, 1, true, size * index + 2.5 * borderHeight, animation.theta]}>
                <meshBasicMaterial attach="material" side={BackSide} color={'#292929'} transparent opacity={.5} />
            </Cylinder>
            <Cylinder args={[slideWidth, slideWidth, animation.height, 60, 1, true, size * index + 2.5 * borderHeight, animation.theta]} >
                <meshBasicMaterial attach="material" side={FrontSide} map={texture} needsUpdate={true} />
                {/* <meshBasicMaterial map={textureVideo} toneMapped={false} /> */}
            </Cylinder>
        </>
    );
}

Slide.propTypes = {
    index: PropTypes.number,
    size: PropTypes.number,
    isActive: PropTypes.bool
};