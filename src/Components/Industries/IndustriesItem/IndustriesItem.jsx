import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


import useStoreIndustries from '../../../store/useStoreIndustries';

import s from '../Industries.module.scss';
export default function IndustriesItem({ industry, rowIndustry, setDetailText }) {
    const changeActiveIndusry = useStoreIndustries((state) => state.changeActiveIndusry);
    const currentIndexIndustry = useStoreIndustries((state) => state.activeIndustry);
    const sliderIndusrty = useStoreIndustries((state) => state.sliderIndusrty);
    const getActiveRow = useStoreIndustries((state) => state.getActiveRow);
    const isDetailIndustry = useStoreIndustries((state) => state.isDetail);
    const [status, setStatus] = useState('normal');

    useEffect(() => {
        if (industry.idx === currentIndexIndustry) {
            setDetailText(industry.text)
        }
    }, [currentIndexIndustry, industry, setDetailText])

    useEffect(() => {
        if (sliderIndusrty === industry.idx && isDetailIndustry) {
            getActiveRow(industry.row)
            setDetailText(industry.text)
            setStatus('active')
        } else if (isDetailIndustry) {
            setStatus('hide')
        } else {
            setStatus('normal')
        }
    }, [sliderIndusrty, industry, isDetailIndustry, getActiveRow, setDetailText])

    return (
        <li
            className={`${s.industry} ${status === 'active' ? s.active : ''} ${status === 'hide' ? s.hide : ''} `}
            onClick={() => changeActiveIndusry(industry.idx, rowIndustry)}
        >
            <div className={s.plus}></div>
            <span>{industry.name}</span>
        </li >
    );
}

IndustriesItem.propTypes = {
    industry: PropTypes.object,
    rowIndustry: PropTypes.number,
    setDetailText: PropTypes.func
}
