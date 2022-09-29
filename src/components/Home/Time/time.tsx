import styles from './time.module.scss';
import classNames from 'classnames/bind';
import React from 'react';

const cx = classNames.bind(styles);
type Props = {
    times: {
        image: string;
        time: string;
        color: string;
    }[];
};
function Times({ times }: Props) {
    return (
        <div className={cx('app-container')}>
            <div className={cx('grid')}>
                <div className={cx('grid_row')}>
                    {times.map((time, index) => (
                        <div key={index} className={cx('grid_column')}>
                            <div className={cx('category')}>
                                <div className={cx('category_img-link')}>
                                    <img src={times[index].image} alt="" className={cx('category_img')} />
                                    <div
                                        style={{ backgroundImage: `linear-gradient(#0000,${times[index].color}` }}
                                        className={cx('category-cover')}
                                    ></div>
                                    <div className={cx('catogory_time')}>
                                        <h2 className={cx('category_date')}>{times[index].time}</h2>
                                        <i
                                            className={cx(
                                                'category_date-icon',
                                                'fa-solid fa-arrow-up-right-from-square',
                                            )}
                                        ></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Times;
