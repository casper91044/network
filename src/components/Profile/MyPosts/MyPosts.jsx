import React from "react";
import {Post} from "./Post/Post";
import style from "./MyPosts.module.css"
import {addPostActionCreator, newPostTextActionCreator} from "../../../Redux/profile-reducer";

export const MyPosts = (props) => {

    let postsElements = props.posts.map(p =>
        <Post message={p.message}
              likes={p.likes}
        />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let  onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={style.myposts}>
                {postsElements}
            </div>
        </div>

    )
}

