import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: "Hi,how are you?", likes: 12},
        {id: 2, message: "It is my first post!", likes: 16},
        {id: 3, message: "YO!", likes: 100}
    ],
    profile:null,
    status: ""
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: action.newPostText,
                likesCount: 0
            };
            return  {...state,
                posts : [...state.posts,newPost],
                newPostText : ''
            };
        }
        case SET_STATUS: {
            return  {...state, status : action.status};
        }
        case SET_USER_PROFILE: {
            return  {...state, profile : action.profile};
        }
        default:
            return state;
    }

}
export let addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export let setUserProfile = (profile) => ({type: SET_USER_PROFILE,profile});
export let setStatus = (status) => ({type: SET_STATUS,status});
export let getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch (setUserProfile(response.data));
    });
};

export let getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch (setStatus(response.data));
    });
};
export let updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
};
