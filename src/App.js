import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {addPost, updatePageText} from "./Redux/state";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className="app_wrapper_content">
                    <Route path='/profile'
                           render={() => <Profile profilePage={props.state.profilePage}
                                                  addPost={props.addPost}
                                                  updateNewPostText={props.updateNewPostText}
                           />}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                </div>
            </div>
        </BrowserRouter>)
}


export default App;
