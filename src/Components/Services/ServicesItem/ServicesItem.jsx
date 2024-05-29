import { useCollapse } from 'react-collapsed';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import s from '../Services.module.scss';

export default function ServicesItem({ index, title, colapse, currentService, setCurrentService, list }) {
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
                {colapse.map((text, key) => {
                    return (
                        <p key={key}>
                            {text}
                        </p>
                    )
                })}
                <ul>
                    {list && list.map((li, key) => {
                        return (
                            <li key={key}>
                                {li}
                            </li>
                        )
                    })}
                </ul>

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
