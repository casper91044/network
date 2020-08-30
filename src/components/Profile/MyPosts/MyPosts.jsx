import React from "react";
import {Post} from "./Post/Post";
import style from "./MyPosts.module.css"
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"}
                       component={Textarea}
                       validate={[requiredField, maxLength10]}
                       placeholder={"Post message"}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
let AddNewPostFormRedux = reduxForm({form:"ProfileAddNewPostForm"}) (AddNewPostForm);

export const MyPosts = (props) => {
    let postsElements = props.posts.map(p =>
        <Post message={p.message}
              likes={p.likes}
        />)

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }
    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={style.myposts}>
                {postsElements}
            </div>
        </div>

    )
}


