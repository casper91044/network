const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: "Hi,how are you?", likes: 12},
        {id: 2, message: "It is my first post!", likes: 16},
        {id: 3, message: "YO!", likes: 100}
    ],
    newPostText: ""
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            };
            return  {...state,
                posts : [...state.posts,newPost],
                newPostText : ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return  {...state,newPostText : action.newText};
        }
        default:
            return state;
    }

}
export let addPostActionCreator = () => ({type: ADD_POST});
export let newPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT,newText:text});