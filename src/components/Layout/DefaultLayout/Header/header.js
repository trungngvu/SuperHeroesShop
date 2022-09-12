import styles from "./header_module.scss";
function Header() {
  return (
    <hearder class="header">
      <div class="grid">
        <div class="navbar">
          <div class="navbar-logo">
            <a href="" class="navbar-logo_link">
              Logo
            </a>
          </div>
          <ul class="navbar-item-menu">
            <li class="navbar-item">
              <a href="" class="navber-item_links">
                News
              </a>
            </li>
            <li class="navbar-item">
              <a href="" class="navber-item_links">
                Series
              </a>
            </li>
            <li class="navbar-item">
              <a href="" class="navber-item_links">
                Characters
              </a>
            </li>
          </ul>
          <div class="navbar-login">
            <a class="navbar-login_button navbar-login_button_signin">Signin</a>

            <a class="navbar-login_button navbar-login_button_signup">Signup</a>
          </div>
        </div>
      </div>
    </hearder>
  );
}

export default Header;
