import { useState } from 'react';
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
                {content.map((list) => {
                    return (
                        <div
                            className={expandedIndex === list.id ? s.item + ' ' + s.active : s.item}
                            onClick={() => handleToggle(list.id)}
                            key={list.id}
                        >
                            {list.name}
                        </div>
                    )
                })}
            </div>
            <div className={s.info}>
                {content.map((list) => {
                    return (
                        <div
                            key={list.id}
                            className={expandedIndex === list.id ? s.item + ' ' + s.active : s.item}
                        >
                            {list.content.map((item, idx) => {
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
                    )
                })}
            </div>
            <div className={s.info + ' ' + s.mask}>
                {content.map((list) => {
                    return (
                        <div
                            key={list.id}
                            className={expandedIndex === list.id ? s.item + ' ' + s.active : s.item}
                        >
                            {list.content.map((item, idx) => {
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
                    )
                })}
            </div>
        </div >
    );
}

function CollapseItem({ isExpanded, content }) {
    return (
        <div className={isExpanded ? s.item + ' ' + s.active : s.item}>
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
