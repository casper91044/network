import React from "react";
import style from "./ProfileInfo.module.css"
import {Preloader} from "../../common/Preloader/Preloader";

export function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div className={style.profileinfo}>
        <div>
            <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt="content image"/>
        </div>
        <div>
            <img src={props.profile.photos.small}/>
            avatar + description
        </div>
    </div>
}

