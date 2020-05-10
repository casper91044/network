import React from "react";
import style from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={style.app_nav}>
            <div className={style.item}>
                <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs" activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <a href="#">News</a>
            </div>
            <div className={style.item}>
                <a href="#">Music</a>
            </div>
            <div className={style.item}>
                <a href="#">Settings</a>
            </div>
        </nav>
    )
}
