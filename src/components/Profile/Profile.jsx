import React from "react";
import style from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";



export function Profile(props) {
    return <div className={style.profile}>
        <ProfileInfo/>
        <MyPosts posts={props.state.posts}/>
    </div>
}

