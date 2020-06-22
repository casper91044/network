import React from "react";
import styles from  "./users.module.css"

export let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([{
            id: 1,
            photoUrl: 'https://icon-icons.com/icons2/1879/PNG/72/iconfinder-7-avatar-2754582_120519.png',
            followed: true,
            fullName: 'Art',
            status: 'I am a BOSS',
            location: {city: 'Donetsk', country: 'DPR'}
        },
            {
                id: 2,
                photoUrl: 'https://icon-icons.com/icons2/1879/PNG/72/iconfinder-4-avatar-2754580_120522.png',
                followed: false,
                fullName: 'Elena',
                status: 'I am a BOSS too',
                location: {city: 'Donetsk', country: 'DPR'}
            },
            {
                id: 3,
                photoUrl: 'https://icon-icons.com/icons2/1879/PNG/72/iconfinder-10-avatar-2754575_120521.png',
                followed: false,
                fullName: 'Andru',
                status: 'Driver',
                location: {city: 'Donetsk', country: 'DPR'}
            },
            {
                id: 4,
                photoUrl: 'https://icon-icons.com/icons2/2129/PNG/72/black_man_beard_curly_hair_people_avatar_boy_person_icon_131372.png',
                followed: false,
                fullName: 'Kir',
                status: 'Pub mobile',
                location: {city: 'Donetsk', country: 'DPR'}
            },
        ])
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src= {u.photoUrl}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.unfollow(u.id) } }>Unfollow</button>
                            : <button onClick={() => {props.follow(u.id) } }>Follow</button> }
                    </div>
                    
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}