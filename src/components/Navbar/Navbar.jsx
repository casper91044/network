import React from "react";
import style from "./Navbar.module.css"

export function Navbar() {
    return <nav className={style.app_nav}>
        <div>
            <a href="#">Profile</a>
        </div>
        <div>
            <a href="#">Messages</a>
        </div>
        <div>
            <a href="#">News</a>
        </div>
        <div>
            <a href="#">Music</a>
        </div>
        <div>
            <a href="#">Settings</a>
        </div>
    </nav>
}