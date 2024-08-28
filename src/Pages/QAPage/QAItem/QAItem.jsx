import { useCollapse } from 'react-collapsed';
import PropTypes from 'prop-types';
import { useState } from 'react';

import TextFieldI18 from '../../../Components/TextField/TextFieldI18';

import s from '../QAPage.module.scss';
export default function QAItem({ title, content }) {
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    
    return (
        <div className={s.item} {...getToggleProps({ onClick: () => setExpanded((prevExpanded) => !prevExpanded) })}>
            <h3 className={isExpanded ? s.title + " " + s.active : s.title}>
                <TextFieldI18 texts={title} />
            </h3>
            <div className={s.content}  {...getCollapseProps()}>
                <div className={s.content__wrapper}>
                    <TextFieldI18 texts={content} />
                </div>
            </div>
        </div>
    )
}

QAItem.propTypes = {
    title: PropTypes.string,
    content: PropTypes.array
};
