
import s from '../ContactsForm.module.scss';
export default function ContactsFormInput({ name, label, placeholder, type }) {

    return (
        <div className={s.input__wraper}>
            <label htmlFor={name}>{label}</label>
            <input id={name} name={name} type={type} placeholder={placeholder} />
        </div>
    );
}  
