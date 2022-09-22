import React from 'react';
import styles from './profile.module.scss';

interface Props {
    background: string;
    avatar: string;
    name: string;
    id: string;
}

const User = ({ background, avatar, name, id }: Props) => {
    return (
        <>
            <img className={styles.background_cover} alt="background" src={background} />
            <div className={`${styles.box} ${styles.user_box}`}>
                <img src={avatar} alt="User avatar" className={styles.user_avatar} />
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
