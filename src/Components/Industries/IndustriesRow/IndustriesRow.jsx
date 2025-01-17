import { useCollapse } from 'react-collapsed';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import IndustriesItem from '../IndustriesItem/IndustriesItem';
import useStoreIndustries from '../../../store/useStoreIndustries';
import useStoreMobileScroll from '../../../store/useStoreMobileScroll';

import s from '../Industries.module.scss';
export default function IndustriesRow({ industries, idx }) {
    const currentRowIndustry = useStoreIndustries((state) => state.activeRow);
    const trigeredScroll = useStoreMobileScroll((state) => state.trigeredScroll);
    const [isExpanded, setExpanded] = useState(false);
    const [detailText, setDetailText] = useState(null);
    useEffect(() => {
        setExpanded(idx === currentRowIndustry)
    }, [currentRowIndustry, idx])

    const { getCollapseProps } = useCollapse({ isExpanded })
    useEffect(() => {
        trigeredScroll(true);
    }, [getCollapseProps, trigeredScroll])
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
