import styles from './container.module.scss';
import { Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Container() {
    return (
        <div className={cx('app-container')}>
            <div className={cx('grid')}>
                <h1 className={cx('container-title')}>Latest releases</h1>
                <div className={cx('grid__row')}>
                    <div className="grid__column-4">
                        <div className={cx('category')}>
                            <div className={cx('category_img-link')}>
                                <Image
                                    source={require('../../../images/home/cate1.png')}
                                    className={cx('category_img')}
                                    style={{ width: '100%', borderRadius: 35, height: null, aspectRatio: 750 / 460 }}
                                />
                                <div className={cx('catogory_rating')}>
                                    <i className={cx('category_rating-icon', 'fa-solid fa-star')}></i>
                                    <p className={cx('category_rating-mark')}>4.5</p>
                                </div>
                            </div>
                            <div className={cx('category_spoil')}>
                                <div className={cx('category_spoil-infor')}>
                                    <h3 className={cx('category_spoil-name')}>Spiderman</h3>
                                    <p className={cx('category_spoil-comment')}>Mavel Comics</p>
                                </div>
                                <div className={cx('category_spoil-price')}>
                                    <span className={cx('category_spoil-price1')}>$ 17.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Container;
