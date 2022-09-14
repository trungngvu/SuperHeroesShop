import React from 'react';
import styles from './ticket.module.scss';

const ticket = ({ tickets, onClick }) => {
    const listTicket = tickets.map((ticket) => {
        return (
            <tr
                className={styles.user_order_row}
                key={ticket.TicketNo}
                onClick={() => {
                    onClick(ticket.TicketNo);
                }}
            >
                <td>{ticket.TicketNo}</td>
                <td>{ticket.Object}</td>
                <td>{ticket.CreateAt}</td>
            </tr>
        );
    });

    return (
        <div className={styles.user_order}>
            <div className={styles.title_lg}>Open tickets</div>
            <table className={styles.order_table}>
                <tbody>
                    <tr className={styles.table_header}>
                        <td>
                            Ticket N<span className={styles.superscript}>o</span>
                        </td>
                        <td>Object</td>
                        <td>Created at</td>
                    </tr>
                    {listTicket}
                </tbody>
            </table>
            <div>
                <button className={`${styles.edit_profile} ${styles.see_all}`}>See all</button>{' '}
            </div>
        </div>
    );
};

export default ticket;
