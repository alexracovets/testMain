import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import s from './Keys.module.scss';
export default function Keys({ content }) {
    const [expandedIndex, setExpandedIndex] = useState(0);
    const [texts, setTexts] = useState(null);
    const { t } = useTranslation();

    const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? -1 : index);
    };

    useEffect(() => {
        const text = [];
        content.map((element) => {
            const elem = {};
            elem.name = t(element.name);
            elem.id = element.id;
            elem.content = [];
            element.content.map((content) => {
                if (content.type === "text") {
                    elem.content.push({
                        type: content.type,
                        value: t(content.value),
                    })
                } else if (content.type === "list") {
                    const list = []
                    content.list.map((li) => {
                        list.push(t(li))
                    })
                    elem.content.push({
                        type: content.type,
                        list: list
                    })
                } else if (content.type === "q_a") {
                    elem.content.push({
                        type: content.type,
                        answer: t(content.answer),
                        question: t(content.question),
                    })
                }

            })
            text.push(elem)
        })
        setTexts(text)
    }, [content, t])

    return (
        <>
            {texts ? <div className={s.keys}>
                <div className={s.titles}>
                    {texts.map((list) => {
                        return (
                            <div
                                className={expandedIndex === list.id ? s.item + ' ' + s.active : s.item}
                                onClick={() => handleToggle(list.id)}
                                key={list.id}
                            >
                                {t(list.name)}
                            </div>
                        )
                    })}
                </div>
                <div className={s.info}>
                    {texts.map((list) => {
                        return (
                            <div key={list.id} className={expandedIndex === list.id ? s.item + ' ' + s.active : s.item}>
                                {list.content.map((item, idx) => {
                                    if (item.type === 'text') {
                                        return <p key={idx} dangerouslySetInnerHTML={{ __html: t(item.value) }} />

                                    } else if (item.type === 'list') {
                                        return <ul key={idx}>{item.list.map((li, idx) => {
                                            const text = t(li);
                                            return <li key={idx}><p dangerouslySetInnerHTML={{ __html: text }} /></li>
                                        }
                                        )}</ul>
                                    } else if (item.type === 'q_a') {
                                        return (
                                            <div key={idx} className={s.q_a}>
                                                <p dangerouslySetInnerHTML={{ __html: t(item.question) }} className={s.question} />
                                                <p dangerouslySetInnerHTML={{ __html: t(item.answer) }} className={s.answer} />
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        )
                    })}
                </div>
                <div className={s.info + ' ' + s.mask}>
                    {texts.map((list) => {
                        return (
                            <div key={list.id} className={expandedIndex === list.id ? s.item + ' ' + s.active : s.item}>
                                {list.content.map((item, idx) => {
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
                                })}
                            </div>
                        )
                    })}
                </div>
            </div >
                : null}
        </>

    );
}

Keys.propTypes = {
    content: PropTypes.array
};
