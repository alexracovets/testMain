import { useCollapse } from 'react-collapsed';
import PropTypes from 'prop-types';
import { useState } from 'react';


import s from '../QAPage.module.scss';

export default function QAItem({ title, content }) {
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

    return (
        <div className={s.item} >
            <div className={isExpanded ? s.title + " " + s.active : s.title} {...getToggleProps({ onClick: () => setExpanded((prevExpanded) => !prevExpanded) })}>
                {title}
            </div>
            <div className={s.content}  {...getCollapseProps()}>
                {content.map((item, idx) => {
                    if (item.type === 'text') {
                        return <p key={idx}>{item.value}</p>
                    } else if (item.type === 'html') {
                        return <div key={idx}>{item.value}</div>
                    }
                })}
            </div>
        </div>
    )
}

QAItem.propTypes = {
    title: PropTypes.string,
    content: PropTypes.array
};
