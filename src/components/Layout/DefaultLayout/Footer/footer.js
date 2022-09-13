import styles from './footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('app-container')}>
            <div className={cx('footer')}>
                <div className={cx('footer_app')}>
                    <div className={cx('logo')}>
                        <div className={cx('logo_main')}>Logo</div>
                        <div className={cx('logo_list')}>
                            <div className={cx('logo_list-content')}>
                                <p>Copyright 2022 Super-Heroes Shop</p>
                            </div>
                            <ul className={cx('logo_list-item')}>
                                <li className={cx('logo_list-item-icon')}>
                                    <i className={cx('fa-brands fa-instagram')}></i>
                                </li>
                                <li className={cx('logo_list-item-icon')}>
                                    <i className={cx('fa-brands fa-twitter')}></i>
                                    {/* <FontAwesomeIcon icon={faInstagram} /> */}
                                </li>
                                <li className={cx('logo_list-item-icon')}>
                                    <i className={cx('fa-brands fa-facebook')}></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('list')}>
                        <ul className={cx('list-item')}>
                            <li className={cx('list-item_infor', 'list-item_infor1')}>Menu</li>
                            <li className={cx('list-item_infor')}>Home</li>
                            <li className={cx('list-item_infor')}>News</li>
                            <li className={cx('list-item_infor')}>Characters</li>
                        </ul>
                        <ul className={cx('list-item')}>
                            <li className={cx('list-item_infor', 'list-item_infor1')}>Company</li>
                            <li className={cx('list-item_infor')}>Managenment</li>
                            <li className={cx('list-item_infor')}>Out story</li>
                            <li className={cx('list-item_infor')}>Career</li>
                        </ul>
                        <ul className={cx('list-item')}>
                            <li className={cx('list-item_infor', 'list-item_infor1')}>Support</li>
                            <li className={cx('list-item_infor')}>Support Center</li>
                            <li className={cx('list-item_infor')}>Transaction</li>
                            <li className={cx('list-item_infor')}>Contact us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
