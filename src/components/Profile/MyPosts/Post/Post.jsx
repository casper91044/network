import React from "react";
import style from "./Post.module.css";



export const Post = (props) => {

    return <div className={style.item}>
        <img src="https://html5css.ru/w3images/avatar2.png" alt="avatar"/>
        {props.message}
        <div>
            <span>like</span>
        </div>
    </div>
}