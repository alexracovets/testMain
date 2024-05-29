import { useState } from 'react';
import { useCollapse } from 'react-collapsed';
import PropTypes from 'prop-types';

import s from './Keys.module.scss';
export default function Keys({ content }) {
    const [expandedIndex, setExpandedIndex] = useState(0);

    const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? -1 : index);
    };

    return (
        <div className={s.keys}>
            <div className={s.titles}>
                <div className={expandedIndex === 0 ? s.item + ' ' + s.active : s.item} onClick={() => handleToggle(0)}>
                    Key Facts
                </div>
                <div className={expandedIndex === 1 ? s.item + ' ' + s.active : s.item} onClick={() => handleToggle(1)}>
                    Applications for Drivers
                </div>
                <div className={expandedIndex === 2 ? s.item + ' ' + s.active : s.item} onClick={() => handleToggle(2)}>
                    Technical due diligence
                </div>
            </div>
            <div className={s.info}>
                <CollapseItem isExpanded={expandedIndex === 0} content={content} />
                <CollapseItem isExpanded={expandedIndex === 1} content={content} />
                <CollapseItem isExpanded={expandedIndex === 2} content={content} />
            </div>
        </div >
    );
}

function CollapseItem({ isExpanded, content }) {
    const { getCollapseProps } = useCollapse({ isExpanded });
    return (
      <div {...getCollapseProps()} className={s.item}>
                {content.map((item, idx) => {
                    if (item.type === 'text') {
                        return (
                            <p key={idx}>
                                {item.value}
                            </p>
                        )
                    } else if (item.type === 'list') {
                        return (
                            <ul key={idx}>
                                {item.li.map((li, idx) => {
                                    return <li key={idx}>
                                        {li}
                                    </li>
                                })}
                            </ul>
                        )
                    }
                })}
            </div>
    );
}


Keys.propTypes = {
    content: PropTypes.array
};

CollapseItem.propTypes = {
    isExpanded: PropTypes.bool,
    content: PropTypes.array
};
