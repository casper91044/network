import React from "react";
import {Post} from "./Post/Post";
import style from "./MyPosts.module.css"
export function MyPosts() {
    return <div className={style.item}>
        My post
        <div>new post</div>
        <Post />
    </div>
}

