import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

export default function TextFieldI18({ texts }) {
    const { t } = useTranslation();

    return (
        <>
            {texts.map((item, idx) => {
                if (item.type === 'textList') {
                    return <div key={idx}>
                        {item.value.map((element, index) => <p key={index} dangerouslySetInnerHTML={{ __html: t(element) }} />)}
                    </div>
                } else if (item.type === 'text') {
                    return <p key={idx} dangerouslySetInnerHTML={{ __html: t(item.value) }} />
                } else if (item.type === 'list') {
                    return <ul key={idx}  >
                        {item.list.map((li, index) => <li key={index}> <p key={idx} dangerouslySetInnerHTML={{ __html: t(li) }} /></li>)}
                    </ul>
                } else if (item.type === 'html') {
                    return <div key={idx}>{item.value}</div>
                }
            })}
        </>
    )
}

TextFieldI18.propTypes = {
    texts: PropTypes.array
};