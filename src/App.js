import React, {Component} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app_wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app_wrapper_content">
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/login'
                           render={() => <Login/>}/>
                </div>
            </div>
        )

    }

}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);