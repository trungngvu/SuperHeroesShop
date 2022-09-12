import User from '../../components/Profile/user/user';
import React, { useState } from 'react';

function Profile() {
    const [user, setUser] = useState({
        name: 'Yoann TERUEL',
        id: '#1651651651465',
        avatar: '../../components/Profile/images/teruel.jpg',
        background: '../../components/Profile/images/background_teruel.jpg',
    });

    return <User />;
}

export default Profile;
