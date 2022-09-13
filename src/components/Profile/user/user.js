import React from 'react';
import styles from './profile.module.scss';

const User = ({ background, avatar, name, id }) => {
    const av = require('../../../images/profile/teruel.jpg');
    const bg = require('../../../images/profile/background_teruel.jpg');
    return (
        <>
            <img className={styles.background_cover} alt="background" src={bg} />
            <div className={`${styles.box} ${styles.user_box}`}>
                <img src={av} alt="User avatar" className={styles.user_avatar} />
                <div className={styles.user_detail}>
                    <div className={styles.user_name}>{name}</div>
                    <div className={styles.user_id}>{id}</div>
                    <button className={styles.edit_profile}>Edit my profile</button>
                </div>
            </div>
        </>
    );
};

export default User;
