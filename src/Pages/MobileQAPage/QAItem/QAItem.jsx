import { useCollapse } from 'react-collapsed';
import PropTypes from 'prop-types';
import { useState } from 'react';

import TextField from '../../../Components/TextField/TextField';

import s from '../MobileQAPage.module.scss';
export default function QAItem({ title, content }) {
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

    return (
        <div className={s.item} >
            <div className={isExpanded ? s.title + " " + s.active : s.title} {...getToggleProps({ onClick: () => setExpanded((prevExpanded) => !prevExpanded) })}>
                {title}
            </div>
            <div className={s.content}  {...getCollapseProps()}>
                <div className={s.content__wrapper}>
                    <TextField texts={content} />
                </div>
            </div>
        </div>
    )
}

QAItem.propTypes = {
    title: PropTypes.string,
    content: PropTypes.array
};
