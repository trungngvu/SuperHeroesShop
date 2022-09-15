import styles from './header.module.scss';
import classNames from 'classnames/bind';
import Login from './login/login';
import Loggedin from './loggedin/loggedin';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Header({ onclick, isLoggedIn }) {
    const log = () => {
        if (isLoggedIn) return <Loggedin />;
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
                            <a className={cx('navber-item_links')}>News</a>
                        </li>
                        <li className={cx('navbar-item')}>
                            <a className={cx('navber-item_links')}>Series</a>
                        </li>
                        <li className={cx('navbar-item')}>
                            <a className={cx('navber-item_links')}>Characters</a>
                        </li>
                    </ul>
                    {log()}
                </div>
            </div>
        </header>
    );
}

export default Header;
