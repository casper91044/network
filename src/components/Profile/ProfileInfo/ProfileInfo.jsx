import React from "react";
import style from "./ProfileInfo.module.css"
import {Preloader} from "../../common/Preloader/Preloader";
import {Profile} from "../Profile";
import ProfileStatus from "./ProfileStatus"

export function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={style.profileinfo}>
            <div>
                <img src={props.profile.photos.small}/>
                <ProfileStatus status={"xxx"}/>
            </div>
        </div>
    )
}

