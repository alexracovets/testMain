import { useTranslation } from "react-i18next";
import { useCollapse } from 'react-collapsed';
import { useEffect, useState } from 'react';

import ai from '/image/icons/strengths/ai_icon.svg';
import mob from '/image/icons/strengths/mob_icon.svg';
import srmBpm from '/image/icons/strengths/srmBpm_icon.svg';
import xr from '/image/icons/strengths/xr_icon.svg';
import web from '/image/icons/strengths/web_icon.svg';
import eCom from '/image/icons/strengths/eCom_icon.svg';
import dm from '/image/icons/strengths/dm_icon.svg';
import bots from '/image/icons/strengths/bots_icon.svg';
import analytics from '/image/icons/strengths/analytics_icon.svg';
import cyber from '/image/icons/strengths/cyber_icon.svg';


import s from './Strengths.module.scss';
export default function Strengths() {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 430);
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    const { t } = useTranslation();

    const strengths = [
        {
            name: 'AI Bots Integrations',
            img: ai
        },
        {
            name: 'UX/UI',
            img: mob
        },
        {
            name: 'Website development',
            img: srmBpm
        },
        {
            name: 'AR-VR-XR',
            img: xr
        },
        {
            name: 'Digital Marketing',
            img: web
        },
        {
            name: 'Cybersecurity',
            img: cyber
        },
        {
            name: 'Web applications',
            img: dm
        },
        {
            name: 'E-Commerce',
            img: bots
        },
        {
            name: 'MVP Launch',
            img: analytics
        },
    ]

    useEffect(() => {
        setIsDesktop(window.innerWidth > 430);
        function handleResize() {
            setIsDesktop(window.innerWidth > 430);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {isDesktop ?
                <ul className={s.strengths}>
                    {strengths.map((strength, i) => {
                        return (
                            <li key={i}>
                                <img src={strength.img} alt={strength.name} />
                                <span>{strength.name}</span>
                            </li>
                        )
                    })}
                </ul> :
                <>
                    <button {...getToggleProps({ onClick: () => setExpanded(!isExpanded) })} className={s.expertiseBtn}>{t("about.expertise")}</button>
                    <ul {...getCollapseProps()} className={s.strengths}>
                        {strengths.map((strength, i) => {
                            return (
                                <li key={i}>
                                    <img src={strength.img} alt={strength.name} />
                                    <span>{strength.name}</span>
                                </li>
                            )
                        })}
                    </ul>
                    <div {...getToggleProps({ onClick: () => setExpanded(!isExpanded) })} className={s.lines}>
                        <div className={s.line}></div>
                        <div className={s.circle}>
                            <div className={s.dot}></div>
                        </div>
                        <div className={s.line}></div>
                    </div>
                </>
            }

        </>
    )
}