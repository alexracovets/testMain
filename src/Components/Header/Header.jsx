import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";

import s from './Header.module.scss';
import FullMenu from "./FullMenu/FullMenu";

export default function Header() {
    return (
        <header>
            <div className={s.wrapper}>
                <div className={s.header}>
                    <Logo />
                    <Navigation />
                </div>
            </div>
            <FullMenu />
        </header>
    )
} 
