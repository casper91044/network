import React from "react";
import style from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {newMassageBodyActionCreator, sendMessageActionCreator} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";


export const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(newMassageBodyActionCreator(body))
    }

    return <Dialogs updateNewMassageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state}
    />
}