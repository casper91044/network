import React from "react";
import style from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export function Profile() {
    return <div className={style.profile}>
        <ProfileInfo/>
        <MyPosts />
    </div>
}

