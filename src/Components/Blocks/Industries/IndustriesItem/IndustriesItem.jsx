import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import s from '../Industries.module.scss';
import { changeActiveIndusry } from '../../../../store/reducers/stateIndustries';
import { useEffect, useState } from 'react';

export default function IndustriesItem({ industry, rowIndustry, setDetailText }) {
    const currentIndexIndustry = useSelector((state) => state.stateIndustries.activeIndustry);
    const currentRowIndustry = useSelector((state) => state.stateIndustries.activeRow);
    const isDetailIndustry = useSelector((state) => state.stateIndustries.isDetail);
    const [status, setStatus] = useState(null);

    const dispatch = useDispatch(false);

    const handler = (numberIndustry) => {
        dispatch(changeActiveIndusry({ numberIndustry, rowIndustry }));
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
