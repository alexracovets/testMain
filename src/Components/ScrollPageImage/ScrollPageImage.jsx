import { motion, AnimatePresence } from "framer-motion";

import useScrollPageNavigation from '../../store/useScrollPageNavigation';

import s from './ScrollPageImage.module.scss';
export default function ScrollPageImage() {
    const isScrollImageShown = useScrollPageNavigation((state) => state.isScrollImageShown);
    const setIsScrollImageShown = useScrollPageNavigation((state) => state.setIsScrollImageShown);

    const closeScrollImage = () => {
        setTimeout(() => {
            setIsScrollImageShown(false)
        }, 300);
    }

    return (
        <AnimatePresence>
            {isScrollImageShown ?
                <motion.div
                    className={s.scroll__wrapper}
                    animate={{ opacity: 0.7 }}
                    transition={{ duration: .5 }}
                    exit={{ opacity: 0 }}
                    onPointerMove={closeScrollImage}
                    onClick={closeScrollImage}
                >
                    <div className={s.svg_image}>
                        <svg viewBox="254.581 149.474 36 66.938" width="36" height="100" xmlns="http://www.w3.org/2000/svg">
                            <path className={s.animate_arrow + ' ' + s.first} d="M 279.181 205.012 L 272.581 211.612 L 265.981 205.012 C 265.181 204.212 263.981 204.212 263.181 205.012 C 262.381 205.812 262.381 207.012 263.181 207.812 L 271.181 215.812 C 271.581 216.212 272.081 216.412 272.581 216.412 C 273.081 216.412 273.581 216.212 273.981 215.812 L 281.981 207.812 C 282.781 207.012 282.781 205.812 281.981 205.012 C 281.181 204.212 279.981 204.212 279.181 205.012 Z" transform="matrix(1, 0, 0, 1, 0, -1.4210854715202004e-14)" />
                            <path className={s.animate_arrow + ' ' + s.second} d="M 281.981 195.191 C 281.181 194.391 279.981 194.391 279.181 195.191 L 272.581 201.791 L 265.981 195.191 C 265.181 194.391 263.981 194.391 263.181 195.191 C 262.381 195.991 262.381 197.191 263.181 197.991 L 271.181 205.991 C 271.581 206.391 272.081 206.591 272.581 206.591 C 273.081 206.591 273.581 206.391 273.981 205.991 L 281.981 197.991 C 282.781 197.191 282.781 195.991 281.981 195.191 Z" transform="matrix(1, 0, 0, 1, 0, -1.4210854715202004e-14)" />
                            <path fill="white" d="M 290.581 185.474 L 290.581 167.474 C 290.581 157.574 282.481 149.474 272.581 149.474 C 262.681 149.474 254.581 157.574 254.581 167.474 L 254.581 185.474 C 254.581 195.374 262.681 203.474 272.581 203.474 C 282.481 203.474 290.581 195.374 290.581 185.474 Z M 272.581 199.474 C 264.881 199.474 258.581 193.174 258.581 185.474 L 258.581 167.474 C 258.581 159.774 264.881 153.474 272.581 153.474 C 280.281 153.474 286.581 159.774 286.581 167.474 L 286.581 185.474 C 286.581 193.174 280.281 199.474 272.581 199.474 Z" transform="matrix(1, 0, 0, 1, 0, -1.4210854715202004e-14)" />
                            <path className={s.animate_cursor} fill="white" d="M 272.581 160.474 C 271.481 160.474 270.581 161.374 270.581 162.474 L 270.581 168.474 C 270.581 169.574 271.481 170.474 272.581 170.474 C 273.681 170.474 274.581 169.574 274.581 168.474 L 274.581 162.474 C 274.581 161.374 273.681 160.474 272.581 160.474 Z" transform="matrix(1, 0, 0, 1, 0, -1.4210854715202004e-14)" />
                        </svg>
                    </div>
                </motion.div> :
                null
            }
        </AnimatePresence>
    )
} 
