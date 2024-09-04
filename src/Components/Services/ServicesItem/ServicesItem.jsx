import { useTranslation } from "react-i18next";
import { useCollapse } from 'react-collapsed';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import TextField from '../../TextField/TextField';

import s from '../Services.module.scss';
export default function ServicesItem({ index, title, colapse, currentService, setCurrentService }) {
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    const { t } = useTranslation();
    const isFirstRender = useRef(true);

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
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        setExpanded(currentService === index);
    }, [currentService, index]);

    return (
        <li
            {...getToggleProps({
                onClick: () => handler(),
            })}
            className={isExpanded ? s.active : null}
        >
            <div className={s.title} dangerouslySetInnerHTML={{ __html: t(title) }} />
            <div {...getCollapseProps()} className={s.colapse}>
                <div className={s.colapse__wrapper}>
                    <TextField texts={colapse} />
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