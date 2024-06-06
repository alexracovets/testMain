
import s from '../ContactsForm.module.scss';
export default function ContactsFormTextArea({ name, label, placeholder, setUserForm, userForm }) {

    return (
        <div className={s.input__wraper}>
            <div className={s.label_wrapper}>
                <label htmlFor={name}>{label}</label>
                <div className={s.required}>This field is required</div>
            </div>

            <textarea name={name} id={name} placeholder={placeholder}></textarea>
        </div>
    );
}  
