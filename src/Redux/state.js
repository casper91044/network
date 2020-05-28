export let state = {
    profilePage: {
        posts: [
            {id: 1,message: "Hi,how are you?", likes:12},
            {id: 2,message: "It is my first post!", likes:16},
            {id: 3,message: "YO!" , likes:100}
        ],
    },
    messagesPage: {
        dialogs: [
            {id: 1,name: "Nikita"},
            {id: 2,name: "Stas"},
            {id: 3,name: "Turbo"},
            {id: 4,name: "DushaMetelkin"},
            {id: 5,name: "Art"}
        ],
        messages: [
            {id: 1, message: "Hello world!"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Thank you"},
            {id: 4, message: "I am fine!"}
        ]
    }
}
