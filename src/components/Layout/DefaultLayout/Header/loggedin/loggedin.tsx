import styles from './loggedin.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { PropsUser } from '../../../../Profile/user/user';
import React,{useState, useEffect} from 'react';
import axios from 'axios';
const cx = classNames.bind(styles);

type Props = {
    logout: () => void
}

function Loggedin({ logout }: Props) {
    const [user, setUser] = useState<PropsUser | null>(null);

    const getData = async () => {
        const data = await axios.get(
            `https://632d1d290d7928c7d24518bd.mockapi.io/users/${localStorage.getItem('userID')}`,
        );
        setUser(data.data);
    };

    useEffect(() => {
        getData();
    }, []);

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
                    src={user?.avatar}
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
