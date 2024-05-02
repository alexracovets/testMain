import ai from '/image/icons/strengths/ai_icon.svg';
import mob from '/image/icons/strengths/mob_icon.svg';
import srmBpm from '/image/icons/strengths/srmBpm_icon.svg';
import xr from '/image/icons/strengths/xr_icon.svg';
import web from '/image/icons/strengths/web_icon.svg';
import eCom from '/image/icons/strengths/eCom_icon.svg';
import dm from '/image/icons/strengths/dm_icon.svg';
import bots from '/image/icons/strengths/bots_icon.svg';
import analytics from '/image/icons/strengths/analytics_icon.svg';

import s from './Strengths.module.scss';
export default function Strengths() {

    const strengths = [
        {
            name: 'Artificial Intelligence',
            img: ai
        },
        {
            name: 'Mobile Applications',
            img: mob
        },
        {
            name: 'CRM/BPM',
            img: srmBpm
        },
        {
            name: 'Extended Reality',
            img: xr
        },
        {
            name: 'Web Applications',
            img: web
        },
        {
            name: 'E-Commerce',
            img: eCom
        },
        {
            name: 'Digital Marketing',
            img: dm
        },
        {
            name: 'Social Apps & Bots',
            img: bots
        },
        {
            name: 'Tech Analytics',
            img: analytics
        },
    ]

    return (
        <ul className={s.strengths}>
            {strengths.map((strength, i) => {
                return (
                    <li key={i}>
                        <img src={strength.img} alt={strength.name} />
                        <span>{strength.name}</span>
                    </li>
                )
            })}
        </ul>
    )
}