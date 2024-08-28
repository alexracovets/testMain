import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

export default function TextField({ texts }) {
    const { t } = useTranslation();

    return (
        <>
            {texts.map((item, idx) => {
                if (item.type === 'textList') {
                    return <div key={idx}>
                        {item.value.map((element, index) => {
                            if (t(element) === "") return null;
                            return <p key={index} dangerouslySetInnerHTML={{ __html: t(element) }} />
                        })}
                    </div>
                } else if (item.type === 'text') {
                    if (t(item.value) === "") return null;
                    return <p key={idx} dangerouslySetInnerHTML={{ __html: t(item.value) }} />
                } else if (item.type === 'list') {
                    return <ul key={idx}  >
                        {item.list.map((li, index) => {
                            if (t(li) === "") return null;
                            return <li key={index}> <p key={idx} dangerouslySetInnerHTML={{ __html: t(li) }} /></li>
                        })}
                    </ul>
                } else if (item.type === 'html') {
                    if (item.value === "") return null;
                    return <div key={idx}>{item.value}</div>
                }
            })}
        </>
    )
}

TextField.propTypes = {
    texts: PropTypes.array
};