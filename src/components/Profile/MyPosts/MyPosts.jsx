import React from "react";
import {Post} from "./Post/Post";
import style from "./MyPosts.module.css"
export const MyPosts = () => {
    let postData = [
        {id: 1,message: "Hi,how are you?", likes:12},
        {id: 2,message: "It is my first post!", likes:16},
        {id: 3,message: "YO!" , likes:100}
    ]
    return(
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <div className={style.myposts}>
                <Post message={postData[0].message} likes={postData[0].likes}/>
                <Post message={postData[1].message} likes={postData[1].likes}/>
                <Post message={postData[2].message} likes={postData[2].likes}/>
            </div>
        </div>

    )
}

