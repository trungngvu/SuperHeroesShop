import styles from './header_module.scss';
function Header() {
    return (
        <header className="header">
            <div className="grid">
                <div className="navbar">
                    <div className="navbar-logo">
                        <a href="" className="navbar-logo_link">
                            Logo
                        </a>
                    </div>
                    <ul className="navbar-item-menu">
                        <li className="navbar-item">
                            <a href="" className="navber-item_links">
                                News
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a href="" className="navber-item_links">
                                Series
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a href="" className="navber-item_links">
                                Characters
                            </a>
                        </li>
                    </ul>
                    <div className="navbar-login">
                        <a className="navbar-login_button navbar-login_button_signin">Signin</a>

                        <a className="navbar-login_button navbar-login_button_signup">Signup</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
