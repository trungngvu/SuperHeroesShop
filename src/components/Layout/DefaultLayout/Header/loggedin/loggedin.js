import styles from './loggedin.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Loggedin() {
    return (
        <div className={cx('navbar-login')}>
            <div className={cx('navbar-login_cart')}>
                <i className={cx('fa-solid fa-cart-shopping', 'navbar-login_cart_icon')}>
                    <p className={cx('navbar-login_cart_amount')}>2</p>
                </i>
            </div>
            <Link to="/profile">
                <img
                    className={cx('navbar-login_user')}
                    alt=""
                    src={require('../../../../../images/profile/teruel.jpg')}
                />
            </Link>
            <i className={cx('navbar-login_icon', 'fa-solid fa-chevron-down')}></i>
        </div>
    );
}

export default Loggedin;
