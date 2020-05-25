import React from "react";
import {Post} from "./Post/Post";
import style from "./MyPosts.module.css"
export const MyPosts = () => {
    let posts = [
        {id: 1,message: "Hi,how are you?", likes:12},
        {id: 2,message: "It is my first post!", likes:16},
        {id: 3,message: "YO!" , likes:100}
    ]

    let postsElements = posts.map( p => <Post message={p.message} likes={p.likes}/>)

    return(
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <div className={style.myposts}>
                {postsElements}
            </div>
        </div>

    )
}

