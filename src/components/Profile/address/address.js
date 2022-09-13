import React from 'react';
import styles from './address.module.scss';
import Threedot from "../../../images/address/3dot.svg";

const address = ({ addresses }) => {
    return (
        <div className={styles.user_address}>
            <div className={styles.title_lg}>addresses</div>
            <div className={styles.address_res}>
                <div className={`${styles.box} ${styles.address_box}`}>
                    <div style={{ display: 'flex' }}>
                        <div className={styles.address_name}>Yoann TERUEL</div>
                        <img src={Threedot} className={styles.info_icon} />
                    </div>
                    <div className={styles.address}>
                        44 rue Blancherive BAT B, APP 789 BORDECIEL, Skyrim 99999 France Phone: +33606060606
                    </div>
                </div>
            </div>
            <div>
                <button className={`${styles.edit_profile} ${styles.see_all}`}>See all</button>{' '}
            </div>
        </div>
    );
};

export default address;
