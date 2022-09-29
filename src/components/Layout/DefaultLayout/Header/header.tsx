import styles from './header.module.scss';
import classNames from 'classnames/bind';
import Login from './login/login';
import Loggedin from './loggedin/loggedin';
import { Link } from 'react-router-dom';
import React from 'react';

const cx = classNames.bind(styles);
interface Props {
    logout: () => void;
    onclick: (click: number) => void;
    userID: string | null;
}
function Header({ onclick, logout, userID }: Props) {
    const log = () => {
        if (userID !== '') return <Loggedin logout={logout} />;
        else return <Login onclick={onclick} />;
    };

    return (
        <header className={cx('header')}>
            <div className={cx('grid')}>
                <div className={cx('navbar')}>
                    <Link to="/">
                        <div className={cx('navbar-logo')}>
                            <div className={cx('navbar-logo_link')}>Logo</div>
                        </div>
                    </Link>
                    <ul className={cx('navbar-item-menu')}>
                        <li className={cx('navbar-item')}>
                            <div className={cx('navber-item_links')}>News</div>
                        </li>
                        <Link to="/comic">
                            <li className={cx('navbar-item')}>
                                <div className={cx('navber-item_links')}>Series</div>
                            </li>
                        </Link>
                        <li className={cx('navbar-item')}>
                            <div className={cx('navber-item_links')}>Characters</div>
                        </li>
                    </ul>
                    {log()}
                </div>
            </div>
        </header>
    );
}

export default Header;
