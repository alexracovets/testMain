import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import s from '../ContactsForm.module.scss';
export default function ContactsFormInput({ name, label, placeholder, type, setUserForm, userForm }) {
    const [isValid, setIsValid] = useState(true);
    const [valueData, setValueData] = useState(userForm[name].value);

    const validateInput = (value) => {
        if (name === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value);
        } else if (name === 'full_name') {
            return value.length > 3;
        }
        return true;
    }

    const changeHandler = (e) => {
        let value = e.target.value;
        if (type === 'text') {
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
                <div className={!isValid ? s.required + ' ' + s.active : s.required}>This field is required</div>
            </div>
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={valueData}
                onChange={(e) => changeHandler(e)}
                className={!isValid ? s.invalid : ''}
            />
            <div className={!isValid ? s.required_mobile + ' ' + s.active : s.required_mobile}>This field is required</div>
        </div>
    );
}

ContactsFormInput.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    setUserForm: PropTypes.func,
    userForm: PropTypes.object
};