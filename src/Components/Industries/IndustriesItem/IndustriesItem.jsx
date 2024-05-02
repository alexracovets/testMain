import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


import useStoreIndustries from '../../../store/useStoreIndustries';

import s from '../Industries.module.scss';
export default function IndustriesItem({ industry, rowIndustry, setDetailText }) {

    const currentIndexIndustry = useStoreIndustries((state) => state.activeIndustry);
    const currentRowIndustry = useStoreIndustries((state) => state.activeRow);
    const isDetailIndustry = useStoreIndustries((state) => state.isDetail);
    const changeActiveIndusry = useStoreIndustries((state) => state.changeActiveIndusry);
    const [status, setStatus] = useState(null);

    const handler = (numberIndustry) => {
        changeActiveIndusry({ numberIndustry, rowIndustry })
    }

    useEffect(() => {
        if (industry.idx === currentIndexIndustry) {
            setDetailText(industry.text)
        }
    }, [currentIndexIndustry, industry, setDetailText])

    useEffect(() => {
        if (rowIndustry === currentRowIndustry && industry.idx === currentIndexIndustry && isDetailIndustry) {
            setStatus('active')
        } else if (isDetailIndustry) {
            setStatus('hide')
        } else {
            setStatus(false)
        }
    }, [rowIndustry, industry, currentRowIndustry, currentIndexIndustry, isDetailIndustry])

    return (
        <li
            className={
                status === 'active'
                    ? s.industry + ' ' + s.active
                    : status === 'hide'
                        ? s.industry + ' ' + s.hide
                        : s.industry
            }
            onClick={() => handler(industry.idx)}
        >
            <div className={s.plus}></div>
            <span>{industry.name}</span>
        </li>
    );
}

IndustriesItem.propTypes = {
    industry: PropTypes.object,
    rowIndustry: PropTypes.number,
    setDetailText: PropTypes.func
}
