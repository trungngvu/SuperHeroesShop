import React, { useState } from 'react';
import User from '../../components/Profile/user/user';
import Order from '../../components/Profile/order/order';
import Address from '../../components/Profile/address/address';
import Ticket from '../../components/Profile/ticket/ticket';
import TicketClick from '../../components/Profile/tickketClick/ticketClick';

function Profile() {
    const [user, setUser] = useState({
        name: 'Yoann TERUEL',
        id: '#1651651651465',
        avatar: require('../../images/profile/teruel.jpg'),
        background: require('../../images/profile/background_teruel.png'),
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
            Phone: '+33606060606',
        },
        {
            Recipient: 'Yoann TERUEL',
            Address: '44 rue Blancherive BAT B, APP 789 BORDECIEL, Skyrim 99999 France',
            Phone: '+33606060606',
        },
    ]);

    const [tickets, setTickets] = useState([
        {
            TicketNo: '1326546',
            Object: '31 av.des Timbertines, 75000 Paris',
            CreateAt: '05/31/22',
        },
        {
            TicketNo: '1326547',
            Object: '31 av.des Timbertines, 75000 Paris',
            CreateAt: '05/31/22',
        },
        {
            TicketNo: '1326548',
            Object: '31 av.des Timbertines, 75000 Paris',
            CreateAt: '05/31/22',
        },
    ]);

<<<<<<< HEAD
    const ticketClickHandler = (index) => {};
=======
    const [ticketDetail, setTicketDetail] = useState('');

    const ticketClickHandler = (index) => {
        setTicketDetail(index);
    };
>>>>>>> 672267258e08614087efb23b4ba3c719b15aa12e

    return (
        <>
            <nav style={{ height: '66.5px' }}></nav>
            <User avatar={user.avatar} background={user.background} name={user.name} id={user.id} />
            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '150px' }}>
                <Order orders={orders} />
                <Address addresses={addresses} />
                <Ticket tickets={tickets} onClick={ticketClickHandler} />
            </div>
            {ticketDetail && <TicketClick ticketDetail={ticketDetail} setTicketDetail={setTicketDetail} />}
        </>
    );
}

export default Profile;
