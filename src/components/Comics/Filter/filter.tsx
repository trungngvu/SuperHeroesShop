import React from 'react';
import styles from './filter.module.scss';
import dropdown from '../../../images/comics/dropdown.svg'

const Filter = () => {
    return (
        <>
            <div className={styles.filter_sort_flex}>
                <div className={styles.filter_row}>
                    <p className={styles.filter_sort}>Filter by</p>


                    <div className={styles.flex_filter}>
                        <div className={styles.filter_by}>
                            <p className={styles.type}>Categories</p>
                            <img className={styles.dropdown} src={dropdown} alt="" />
                        </div>
                        <div className={styles.filter_by}>
                            <p className={styles.type}>Prices</p>
                            <img className={styles.dropdown} src={dropdown} alt="" />
                        </div>
                        <div className={styles.filter_by}>
                            <p className={styles.type}>Types</p>
                            <img className={styles.dropdown} src={dropdown} alt="" />
                        </div>
                        <div className={styles.filter_by}>
                            <p className={styles.type}>Characters</p>
                            <img className={styles.dropdown} src={dropdown} alt="" />
                        </div>
                    </div>
                </div>
                <div className={styles.sort_row}>
                    <p className={styles.filter_sort}>Sort by</p>
                    <img className={styles.dropdown1} src={dropdown} alt="" />
                </div>
            </div>
        </>
    );
};

export default Filter;
