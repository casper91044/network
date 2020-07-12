import React from "react";
import style from "./Header.module.css"
import {NavLink} from "react-router-dom";

export function Header(props) {
    return <header className={style.app_header}>
        <img src="https://i.pinimg.com/236x/45/0d/99/450d99f65c3158d90b7825e0bbbf5d0b--eat.jpg" alt="logo"/>
        <div className={style.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

