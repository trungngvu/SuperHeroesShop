import styles from './loggedin.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Loggedin({ logout }) {
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
            <div className={cx('dropdown')}>
                <i className={cx('navbar-login_icon', 'fa-solid fa-chevron-down')}></i>
                <ul className={cx('dropdown-content')}>
                    <Link to="/profile" style={{ textDecoration: 'none' }}>
                        <li className={cx('content')}>Profile</li>
                    </Link>
                    <li onClick={logout} className={cx('content')} style={{ color: 'red' }}>
                        Logout
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Loggedin;
