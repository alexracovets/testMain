import PropTypes from 'prop-types';

import s from '../Industries.module.scss';
import { useEffect, useState } from 'react';
import IndustriesItem from '../IndustriesItem/IndustriesItem';
import { useSelector } from 'react-redux';
import { useCollapse } from 'react-collapsed';



export default function IndustriesRow({ industries, idx }) {
    const currentRowIndustry = useSelector((state) => state.stateIndustries.activeRow);
    const [isExpanded, setExpanded] = useState(false);
    const [detailText, setDetailText] = useState(null);

    useEffect(() => {
        setExpanded(idx === currentRowIndustry)
    }, [currentRowIndustry, idx])

    const { getCollapseProps } = useCollapse({ isExpanded })

    return (
        <>
            <ul className={s.industries} >
                {industries.map((industry) => <IndustriesItem key={industry.idx} industry={industry} rowIndustry={idx} setDetailText={setDetailText} />)}
            </ul>
            <div {...getCollapseProps({})} className={s.detail}>
                <div className={s.text}>
                    {detailText}
                </div>
            </div>
        </>
    );
}

IndustriesRow.propTypes = {
    industries: PropTypes.array,
    idx: PropTypes.number
}
