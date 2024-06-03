import { useCollapse } from 'react-collapsed';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import s from '../Services.module.scss';

export default function ServicesItem({ index, title, colapse, currentService, setCurrentService }) {
    const [isExpanded, setExpanded] = useState(currentService === index);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

    const handler = () => {
        if (currentService !== index) {
            setExpanded(true);
            setCurrentService(index);
        } else if ((currentService === index) && !isExpanded) {
            setExpanded(true);
        } else {
            setExpanded(false);
        }
    }

    useEffect(() => {
        if (currentService !== index) {
            setExpanded(false);
        } else {
            setExpanded(true);
        }
    }, [currentService, index]);

    return (
        <li
            {...getToggleProps({
                onClick: () => handler(),
            })}
            className={isExpanded ? s.active : null}
        >
            <div className={s.title}>
                {title}
            </div>
            <div {...getCollapseProps()} className={s.colapse}>
                <div className={s.colapse__wrapper}>
                    {colapse.map((item, idx) => {
                        if (item.type === 'bold') {
                            return (
                                <b key={idx}>{item.value}</b>
                            )
                        } else if (item.type === 'text') {
                            return (
                                <p key={idx}>{item.value}</p>
                            )
                        } else if (item.type === 'list') {
                            return (
                                <ul key={idx}>
                                    {item.value.map((li, index) => {
                                        console.log(li)
                                        return (
                                            <li key={index}>
                                                <p> {li.map((text, id) => {
                                                    if (text.type === 'bold') {
                                                        return (
                                                            <b key={id}>{text.value}</b>
                                                        )
                                                    } else if (text.type === 'text') {
                                                        return (
                                                            <span key={id}>{text.value}</span>
                                                        )
                                                    }
                                                })}
                                                </p>
                                            </li>
                                        )
                                    })}
                                </ul>
                            )
                        }
                    })}
                </div>
            </div>
        </li>
    )
}

ServicesItem.propTypes = {
    index: PropTypes.number,
    colapse: PropTypes.array,
    list: PropTypes.array,
    title: PropTypes.string,
    currentService: PropTypes.number,
    setCurrentService: PropTypes.func
};
