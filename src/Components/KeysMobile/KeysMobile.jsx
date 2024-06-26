import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import s from './KeysMobile.module.scss';
import { useCollapse } from 'react-collapsed';

export default function KeysMobile({ content }) {
    const [currentItem, setCurrentItem] = useState(0);

    return (
        <ul className={s.keys}>
            {content.map((item) => {
                return (
                    <KeyItem
                        key={item.id}
                        index={item.id}
                        title={item.name}
                        colapse={item.content}
                        currentItem={currentItem}
                        setCurrentItem={setCurrentItem}
                    />
                );
            })}
        </ul>
    );
}

const KeyItem = ({ index, title, colapse, currentItem, setCurrentItem }) => {
    const isExpanded = currentItem === index;
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

    const handler = () => {
        setCurrentItem(isExpanded ? null : index);
    };

    return (
        <div className={s.item}>
            <div className={isExpanded ? `${s.title} ${s.active}` : s.title} {...getToggleProps({ onClick: handler })}>
                {title}
            </div>
            <div className={s.colapse} {...getCollapseProps()}>
                <div className={s.content}>
                    {colapse.map((item, idx) => {
                        if (item.type === 'text') {
                            return <p key={idx} dangerouslySetInnerHTML={{ __html: item.value }} />
                        } else if (item.type === 'list') {
                            return <ul key={idx}>{item.list.map((li, idx) => <li key={idx}><p dangerouslySetInnerHTML={{ __html: li }} /></li>)}</ul>
                        } else if (item.type === 'q_a') {
                            return (
                                <div key={idx} className={s.q_a}>
                                    <p dangerouslySetInnerHTML={{ __html: item.question }} className={s.question} />
                                    <p dangerouslySetInnerHTML={{ __html: item.answer }} className={s.answer} />
                                </div>
                            )
                        }
                        return null;
                    })}
                </div>
            </div>
        </div>
    );
};

KeysMobile.propTypes = {
    content: PropTypes.array
};

KeyItem.propTypes = {
    index: PropTypes.number,
    title: PropTypes.string,
    colapse: PropTypes.array,
    currentItem: PropTypes.number,
    setCurrentItem: PropTypes.func
};
