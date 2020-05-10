import React from "react";
import style from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";

export function Profile() {
    return <div className={style.profile}>
        <div>
            <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt="content image"/>
        </div>
        <div>
            avatar + description
        </div>
        <MyPosts />
    </div>
}

