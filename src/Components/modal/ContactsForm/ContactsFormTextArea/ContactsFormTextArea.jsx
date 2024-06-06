import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import s from '../ContactsForm.module.scss';
export default function ContactsFormTextArea({ name, label, placeholder, type, setUserForm, userForm }) {
    const [isValid, setIsValid] = useState(true);
    const [valueData, setValueData] = useState(userForm[name].value);

    const validateInput = (value) => {
        if (name === 'textarea') {
            return value.length > 2;
        }
        return true;
    }

    const changeHandler = (e) => {
        let value = e.target.value;
        if (type === 'textarea') {
            value = value.replace(/^\s+/, '').replace(/\s{2,}/g, ' ');
        }
        setValueData(value);
        setIsValid(validateInput(value));
    }

    useEffect(() => {
        setUserForm(prevForm => ({
            ...prevForm,
            [name]: {
                value: valueData,
                isValid: isValid
            }
        }));
    }, [valueData, name, setUserForm, isValid]);

    return (
        <div className={s.input__wraper}>
            <div className={s.label_wrapper}>
                <label htmlFor={name}>{label}</label>
                {!isValid && <div className={s.required}>Invalid {label.toLowerCase()}</div>}
            </div>

            <textarea
                name={name}
                id={name}
                placeholder={placeholder}
                value={valueData}
                onChange={(e) => changeHandler(e)}
                className={!isValid ? s.invalid : ''}
            ></textarea>
        </div>
    );
}


ContactsFormTextArea.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    setUserForm: PropTypes.func,
    userForm: PropTypes.object
};