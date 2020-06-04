import React from "react";
import {Post} from "./Post/Post";
import style from "./MyPosts.module.css"
export const MyPosts = (props) => {


    let postsElements = props.posts.map( p => <Post message={p.message} likes={p.likes}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return(
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}>

                    </textarea>
                </div>
                <div><button onClick={addPost}>Add post</button></div>
            </div>
            <div className={style.myposts}>
                {postsElements}
            </div>
        </div>

    )
}

