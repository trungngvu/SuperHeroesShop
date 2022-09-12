import React from 'react';
import './profile.scss';

const User = ({ background, avatar, name, id }) => {
    return (
        <img className="background_cover" src={background}>
            <div className="box user_box">
                <img src={avatar} alt="User avatar" className="user_avatar" />
                <div className="user_detail">
                    <div className="user_name">{name}</div>
                    <div className="user_id">{id}</div>
                    <button className="edit_profile">Edit my profile</button>
                </div>
            </div>
        </img>
    );
};

export default User;
