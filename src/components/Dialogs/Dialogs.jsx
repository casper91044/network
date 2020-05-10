import React from "react";
import style from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

export const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/1">Nikita</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/2">Sasha</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/3">Stas</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/4">Turbo</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/5">DushaMetelkin</NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hello</div>
                <div className={style.message}>How are you?</div>
                <div className={style.message}>I am fine!</div>
            </div>
        </div>
    )
}