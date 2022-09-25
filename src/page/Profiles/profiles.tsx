import React, { useState, useEffect } from 'react';
import User, { PropsUser } from '../../components/Profile/user/user';
import Order from '../../components/Profile/order/order';
import Address from '../../components/Profile/address/address';
import Ticket from '../../components/Profile/ticket/ticket';
import TicketClick from '../../components/Profile/tickketClick/ticketClick';
import axios from 'axios';

function Profile() {
    const [user, setUser] = useState<PropsUser | null>(null);

    const getData = async () => {
        const data = await axios.get('https://632d1d290d7928c7d24518bd.mockapi.io/users/3');
        setUser(data.data);
    };

    useEffect(() => {
        getData();
    }, []);

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

    const [ticketDetail, setTicketDetail] = useState('');

    const ticketClickHandler = (index: string) => {
        setTicketDetail(index);
    };

    const findTicket = (no: string) => {
        for (let i = 0; i < tickets.length; i++) {
            if (tickets[i].TicketNo === no) return i;
        }
        return -1;
    };

    return (
        <>
            <nav style={{ height: '66.5px' }}></nav>
            {user && <User avatar={user.avatar} background={user.background} name={user.name} id={user.id} />}
            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '150px' }}>
                <Order orders={orders} />
                <Address addresses={addresses} />
                <Ticket tickets={tickets} onClick={ticketClickHandler} />
            </div>
            {ticketDetail && (
                <TicketClick ticketDetail={tickets[findTicket(ticketDetail)]} setTicketDetail={setTicketDetail} />
            )}
        </>
    );
}

export default Profile;
