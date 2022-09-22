import React from 'react';
import styles from './address.module.scss';
import Threedot from '../../../images/address/3dot.svg';

type Props = {
    addresses: {
        Recipient: string;
        Address: string;
        Phone: string;
    }[];
};
const address = ({ addresses }: Props) => {
    const listAdresses = addresses.map((address, index) => {
        return (
            <div key={index} className={`${styles.box} ${styles.address_box}`}>
                <div style={{ display: 'flex' }}>
                    <div className={styles.address_name}>{address.Recipient}</div>
                    <img src={Threedot} className={styles.info_icon} />
                </div>
                <div className={styles.address}>
                    {address.Address}
                    {address.Phone}
                </div>
            </div>
        );
    });

    return (
        <div className={styles.user_address}>
            <div className={styles.title_lg}>addresses</div>
            <div className={styles.address_res}>{listAdresses}</div>
            <div>
                <button className={`${styles.edit_profile} ${styles.see_all}`}>See all</button>{' '}
            </div>
        </div>
    );
};

export default address;
