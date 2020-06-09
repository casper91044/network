const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


export let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi,how are you?", likes: 12},
                {id: 2, message: "It is my first post!", likes: 16},
                {id: 3, message: "YO!", likes: 100}
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Nikita"},
                {id: 2, name: "Stas"},
                {id: 3, name: "Turbo"},
                {id: 4, name: "DushaMetelkin"},
                {id: 5, name: "Art"}
            ],
            messages: [
                {id: 1, message: "Hello world!"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Thank you"},
                {id: 4, message: "I am fine!"}
            ],
            newMessageBody: ""
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }
    }
}

export let addPostActionCreator = () => ({type: ADD_POST});
export let newPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT,newText:text});

export let sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export let newMassageBodyActionCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY,body:body});





