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
    let dialogsData = [
        {id: 1,name: "Nikita"},
        {id: 2,name: "Stas"},
        {id: 3,name: "Turbo"},
        {id: 4,name: "DushaMetelkin"},
        {id: 5,name: "Art"}
    ]
    let messagesData = [
        {id: 1,message: "Hello world!"},
        {id: 2,message: "How are you?"},
        {id: 3,message: "Thank you"},
        {id: 4,message: "I am fine!"}
    ]


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name="Turbo" id="3"/>
                <DialogItem name="DushaMetelkin" id="4"/>
                <DialogItem name="Art" id="5"/>
            </div>
            <div className={style.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
                <Message message="I am fine!"/>
            </div>
        </div>
    )
}