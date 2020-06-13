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

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let  onPostChange = () => {
        let text = newPostElement.current.value;
        let action = newPostTextActionCreator(text);
        props.dispatch(action);
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
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={style.myposts}>
                {postsElements}
            </div>
        </div>

    )
}

