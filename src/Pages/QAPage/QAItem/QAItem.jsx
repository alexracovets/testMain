import { useCollapse } from 'react-collapsed';
import PropTypes from 'prop-types';
import { useState } from 'react';


import s from '../QAPage.module.scss';

export default function QAItem({ title, content }) {
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

    return (
        <div className={s.item} {...getToggleProps({ onClick: () => setExpanded((prevExpanded) => !prevExpanded) })}>
            <h3 className={isExpanded ? s.title + " " + s.active : s.title}>
                {title}
            </h3>
            <div className={s.content}  {...getCollapseProps()}>
                <div className={s.content__wrapper}>
                    {content.map((item, idx) => {
                        if (item.type === 'text') {
                            return <p key={idx}>{item.value}</p>
                        } else if (item.type === 'html') {
                            return <div key={idx}>{item.value}</div>
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

QAItem.propTypes = {
    title: PropTypes.string,
    content: PropTypes.array
};
