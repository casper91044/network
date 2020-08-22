import React from "react";
import {newMassageBodyActionCreator, sendMessageActionCreator} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage : () => {
            dispatch(sendMessageActionCreator());
        },
        updateNewMassageBody : (body) => {
            dispatch(newMassageBodyActionCreator(body));
        }
    }
}

export const DialogsContainer = connect (mapStateToProps,mapDispatchToProps) (Dialogs);