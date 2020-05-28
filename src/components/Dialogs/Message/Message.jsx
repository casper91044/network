import React from "react";
import style from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export const Message = (props) => {
    return <div className={style.message}>{props.message}</div>
}