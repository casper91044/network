import React from "react";
import style from "./ProfileInfo.module.css"

export function ProfileInfo() {
    return <div className={style.profileinfo}>
        <div>
            <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt="content image"/>
        </div>
        <div>
            avatar + description
        </div>
    </div>
}

