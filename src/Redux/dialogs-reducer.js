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
};


export const dialogsReducer = (state = initialState,action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return  {...state,
                messages: [...state.messages,{id: 6, message: body}]
            };
        default:
            return state;
    }
}
export let sendMessageActionCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});
