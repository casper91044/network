import React from "react";
import {Post} from "./Post/Post";
import style from "./MyPosts.module.css"
export const MyPosts = () => {
    return(
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={style.myposts}>
                <Post message="Hi,how are you?" likes='0'/>
                <Post message="It is my first post!" likes='21'/>

            </div>
        </div>

    )
}

