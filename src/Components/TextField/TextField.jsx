import PropTypes from 'prop-types';

import s from './TextField.module.scss';

export default function TextField({ texts }) {
    return (
        <>
            {texts.map((item, idx) => {
                if (item.type === 'textList') {
                    return <div className={s.text_list} key={idx}>
                        {item.value.map((element, index) => <p key={index} dangerouslySetInnerHTML={{ __html: element }} />)}
                    </div>
                } else if (item.type === 'text') {
                    return <p key={idx} dangerouslySetInnerHTML={{ __html: item.value }} />
                } else if (item.type === 'list') {
                    return <ul key={idx} className={s.list}>
                        {item.list.map((li, index) => <li key={index}> <p key={idx} dangerouslySetInnerHTML={{ __html: li }} /></li>)}
                    </ul>
                }
            })}
        </>
    )
}

TextField.propTypes = {
    texts: PropTypes.array
};