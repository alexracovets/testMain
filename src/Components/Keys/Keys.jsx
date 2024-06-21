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
                        <div key={list.id} className={expandedIndex === list.id ? s.item + ' ' + s.active : s.item}>
                            {list.content.map((item, idx) => {
                                if (item.type === 'text') {
                                    return <p key={idx} dangerouslySetInnerHTML={{ __html: item.value }} />
                                } else if (item.type === 'list') {
                                    return <ul key={idx}>{item.li.map((li, idx) => <li key={idx}><p dangerouslySetInnerHTML={{ __html: li }} /></li>)}</ul>
                                } else if (item.type === 'q_a') {
                                    return (
                                        <div key={idx} className={s.q_a}>
                                            <p dangerouslySetInnerHTML={{ __html: item.question }} className={s.question} />
                                            <p dangerouslySetInnerHTML={{ __html: item.answer }} className={s.answer} />
                                        </div>
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
                        <div key={list.id} className={expandedIndex === list.id ? s.item + ' ' + s.active : s.item}>
                            {list.content.map((item, idx) => {
                                if (item.type === 'text') {
                                    return <p key={idx} dangerouslySetInnerHTML={{ __html: item.value }} />
                                } else if (item.type === 'list') {
                                    return <ul key={idx}>{item.li.map((li, idx) => <li key={idx}><p dangerouslySetInnerHTML={{ __html: li }} /></li>)}</ul>
                                } else if (item.type === 'q_a') {
                                    return (
                                        <div key={idx} className={s.q_a}>
                                            <p dangerouslySetInnerHTML={{ __html: item.question }} className={s.question} />
                                            <p dangerouslySetInnerHTML={{ __html: item.answer }} className={s.answer} />
                                        </div>
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

Keys.propTypes = {
    content: PropTypes.array
};
