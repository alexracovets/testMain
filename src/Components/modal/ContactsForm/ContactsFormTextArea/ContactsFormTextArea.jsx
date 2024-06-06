
import s from '../ContactsForm.module.scss';
export default function ContactsFormTextArea({ name, label, placeholder }) {

    return (
        <div className={s.input__wraper}>
            <label htmlFor={name}>{label}</label>
            <textarea name={name} id={name} placeholder={placeholder}></textarea>
        </div>
    );
}  
