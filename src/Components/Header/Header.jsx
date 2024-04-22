import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";

import s from './Header.module.scss';

export default function Header() {
    return (
        <header>
            <div className="wrapper">
                <div className={s.header}>
                    <Logo />
                    <Navigation />
                </div>
            </div>
        </header>
    )
} 
