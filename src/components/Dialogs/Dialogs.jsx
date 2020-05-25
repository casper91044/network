import React from "react";
import style from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={style.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={style.message}>{props.message}</div>
}

export const Dialogs = (props) => {
    let dialogs = [
        {id: 1,name: "Nikita"},
        {id: 2,name: "Stas"},
        {id: 3,name: "Turbo"},
        {id: 4,name: "DushaMetelkin"},
        {id: 5,name: "Art"}
    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)


    let messages = [
        {id: 1,message: "Hello world!"},
        {id: 2,message: "How are you?"},
        {id: 3,message: "Thank you"},
        {id: 4,message: "I am fine!"}
    ]

    let messagesElements = messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
}