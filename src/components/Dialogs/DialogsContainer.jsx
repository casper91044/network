import React from "react";
import {newMassageBodyActionCreator, sendMessageActionCreator} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
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
export default compose(
    connect (mapStateToProps,mapDispatchToProps),
    withAuthRedirect
) (Dialogs);