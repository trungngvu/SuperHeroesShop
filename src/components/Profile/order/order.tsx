import React from 'react';
import styles from './order.module.scss';

type Props = {
    orders: {
        OrderNo: string;
        ShippingAt: string;
        OrderMadeOn: string;
    }[];
};

const order = ({ orders }: Props) => {
    const listOrder = orders.map((order, index) => {
        return (
            <tr className={styles.user_order_row} key={index}>
                <td>{order.OrderNo}</td>
                <td>{order.ShippingAt}</td>
                <td>{order.OrderMadeOn}</td>
            </tr>
        );
    });

    return (
        <div className={styles.user_order}>
            <div className={styles.title_lg}>Orders</div>
            <table className={styles.order_table}>
                <tbody>
                    <tr className={styles.table_header}>
                        <td>
                            Order N<span className={styles.superscript}>o</span>
                        </td>
                        <td>Shipping at</td>
                        <td>Order made on</td>
                    </tr>
                    {listOrder}
                </tbody>
            </table>
            <div>
                <button className={`${styles.edit_profile} ${styles.see_all}`}>See all</button>{' '}
            </div>
        </div>
    );
};

export default order;
