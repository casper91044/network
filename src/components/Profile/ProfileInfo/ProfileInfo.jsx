import React from "react";
import style from "./ProfileInfo.module.css"
import {Preloader} from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

export function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={style.profileinfo}>
            <div>
                <img src={props.profile.photos.small}/>
                <ProfileStatusWithHooks status={props.status}
                               updateStatus={props.updateStatus}
                />
            </div>
        </div>
    )
}

