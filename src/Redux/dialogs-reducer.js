const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};


export const dialogsReducer = (state = initialState,action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return  {...state,newMessageBody : action.body};
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return  {...state,
                newMessageBody : '',
                messages: [...state.messages,{id: 6, message: body}]
            };
        default:
            return state;
    }
}
export let sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export let newMassageBodyActionCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY,body:body});