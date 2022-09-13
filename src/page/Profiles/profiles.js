import React, { useState } from 'react';
import User from '../../components/Profile/user/user';
import Order from '../../components/Profile/order/order';
import Address from '../../components/Profile/address/address';

function Profile() {
    const [user, setUser] = useState({
        name: 'Yoann TERUEL',
        id: '#1651651651465',
        avatar: '../../../images/profile/teruel.jpg',
        background: '../../../images/profile/background_teruel.jpg',
    });

    const [orders, setOrders] = useState([
        {
            OrderNo: '1326546',
            ShippingAt: '31 av.des Timbertines, 75000 Paris',
            OrderMadeOn: '05/31/22',
        },
        {
            OrderNo: '1326546',
            ShippingAt: '31 av.des Timbertines, 75000 Paris',
            OrderMadeOn: '05/31/22',
        },
        {
            OrderNo: '1326546',
            ShippingAt: '31 av.des Timbertines, 75000 Paris',
            OrderMadeOn: '05/31/22',
        },
    ]);

    const [addresses, setAddresses] = useState([
        {
            Recipient: 'Yoann TERUEL',
            Address: '44 rue Blancherive BAT B, APP 789 BORDECIEL, Skyrim 99999 France',
            Phone: '+33606060606'
        },
        {
            Recipient: 'Yoann TERUEL',
            Address: '44 rue Blancherive BAT B, APP 789 BORDECIEL, Skyrim 99999 France',
            Phone: '+33606060606'
        },

    ])

    return (
        <>
            <nav style={{ height: '66.5px' }}></nav>
            <User avatar={user.avatar} background={user.background} name={user.name} id={user.id} />
            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '150px' }}>
                <Order orders={orders} />
                <Address addresses={addresses} />
            </div>
        </>
    );
}

export default Profile;
