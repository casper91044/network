import React from "react";
import {newMassageBodyActionCreator, sendMessageActionCreator} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMassageBody : () => {
            dispatch(sendMessageActionCreator());
        },
        sendMessage : (body) => {
            dispatch(newMassageBodyActionCreator(body));
        }
    }
}

export const DialogsContainer = connect (mapStateToProps,mapDispatchToProps) (Dialogs);