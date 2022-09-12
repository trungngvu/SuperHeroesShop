// import '../../../css/style.css';
function Footer() {
    return (
        <div className="footer">
            <div className="footer_app">
                <div className="logo">
                    <div className="logo_main">Logo</div>
                    <div className="logo_list">
                        <div className="logo_list-content">
                            <p>Copyright 2022 Super-Heroes Shop</p>
                        </div>
                        <ul className="logo_list-item">
                            <li className="logo_list-item-icon">
                                <i className="fa-brands fa-instagram"></i>
                            </li>
                            <li className="logo_list-item-icon">
                                <i className="fa-brands fa-twitter"></i>
                            </li>
                            <li className="logo_list-item-icon">
                                <i className="fa-brands fa-facebook"></i>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="list">
                    <ul className="list-item">
                        <li className="list-item_infor list-item_infor1">Menu</li>
                        <li className="list-item_infor">Home</li>
                        <li className="list-item_infor">News</li>
                        <li className="list-item_infor">Characters</li>
                    </ul>
                    <ul className="list-item">
                        <li className="list-item_infor list-item_infor1">Company</li>
                        <li className="list-item_infor">Managenment</li>
                        <li className="list-item_infor">Out story</li>
                        <li className="list-item_infor">Career</li>
                    </ul>
                    <ul className="list-item">
                        <li className="list-item_infor list-item_infor1">Support</li>
                        <li className="list-item_infor">Support Center</li>
                        <li className="list-item_infor">Transaction</li>
                        <li className="list-item_infor">Contact us</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
