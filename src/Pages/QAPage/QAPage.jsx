import { Scrollbar } from "react-scrollbars-custom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import ReactGA from "react-ga4";

import QAItem from "./QAItem/QAItem";
import useScrollPageNavigation from '../../store/useScrollPageNavigation';
import q_aData from "../../data/q_aData";

import s from './QAPage.module.scss';
export default function QAPage() {
    const setIsScrollAllowed = useScrollPageNavigation((state) => state.setIsScrollAllowed);
    const setIsTopScroll = useScrollPageNavigation((state) => state.setIsTopScroll);
    const setIsBottomScroll = useScrollPageNavigation((state) => state.setIsBottomScroll);
    const setIsScrollOnPage = useScrollPageNavigation((state) => state.setIsScrollOnPage);

    ReactGA.send({
        hitType: "pageview",
        page: "/q&a",
        title: "Q&A Page"
    });

    const wheelPointer = (scroll) => {
        setIsTopScroll(false);
        setIsBottomScroll(false);
        const isScrollBotoom = scroll.contentScrollHeight - scroll.clientHeight - scroll.scrollTop < 2;
        const isScrollTop = scroll.scrollTop === 0;

        if (isScrollBotoom) {
            setIsBottomScroll(true);
            setIsScrollAllowed(true);
        } else if (isScrollTop) {
            setIsTopScroll(true);
            setIsScrollAllowed(true);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setIsScrollOnPage(true);
            setIsTopScroll(true);
        }, 300);
    }, [setIsScrollOnPage, setIsTopScroll])

    return (
        <motion.div className={s.wrapper}
            initial={{ opacity: 0, x: '-40%' }}
            animate={{ opacity: 1, x: '0%' }}
            transition={{ duration: 0.5, delay: .1 }}
            exit={{ opacity: 0, x: '-20%' }}
        >
            <section>
                <h2> Q&A </h2>
                <Scrollbar
                    className={'scroll'}
                    onUpdate={(prevScrollValues) => wheelPointer(prevScrollValues)}
                >
                    <div className={s.question}
                        onMouseEnter={() => setIsScrollAllowed(false)}
                        onMouseLeave={() => setIsScrollAllowed(true)}
                    >
                        {q_aData.map((colapse) => {
                            return (
                                <QAItem key={colapse.idx} title={colapse.title} content={colapse.colapse} />
                            )
                        })}
                    </div>
                </Scrollbar>
            </section>
        </motion.div>
    )
}