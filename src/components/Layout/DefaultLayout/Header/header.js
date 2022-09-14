import styles from './header.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Header({ onclick }) {
    return (
        <header className={cx('header')}>
            <div className={cx('grid')}>
                <div className={cx('navbar')}>
                    <div className={cx('navbar-logo')}>
                        <a href="" className={cx('navbar-logo_link')}>
                            Logo
                        </a>
                    </div>
                    <ul className={cx('navbar-item-menu')}>
                        <li className={cx('navbar-item')}>
                            <a href="" className={cx('navber-item_links')}>
                                News
                            </a>
                        </li>
                        <li className={cx('navbar-item')}>
                            <a href="" className={cx('navber-item_links')}>
                                Series
                            </a>
                        </li>
                        <li className={cx('navbar-item')}>
                            <a href="" className={cx('navber-item_links')}>
                                Characters
                            </a>
                        </li>
                    </ul>
                    <div className={cx('navbar-login')}>
                        <a className={cx('navbar-login_button', 'navbar-login_button_signin')}>Signin</a>
                        <svg
                            className={cx('navbar-login_img')}
                            width="39"
                            height="39"
                            viewBox="0 0 44 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M42.4373 21.317C42.3028 10.1722 33.2275 1.17969 22.0516 1.17969C11.1758 1.17969 2.29715 9.69615 1.70731 20.4271C1.72801 20.0235 1.7694 19.62 1.81079 19.2164C1.75905 19.62 1.72801 20.0235 1.70731 20.4271C1.69697 20.5616 1.69697 20.6962 1.68662 20.841V20.9445C1.68662 21.0273 1.68662 21.1101 1.67627 21.1929V22.1552C1.67627 22.2173 1.67627 22.2898 1.68662 22.3518C2.09019 33.2484 11.0516 41.9511 22.0516 41.9511C32.4514 41.9511 41.03 34.159 42.2717 24.1007L42.3028 23.7902C42.3131 23.7178 42.3131 23.6454 42.3235 23.5729C42.3338 23.4384 42.3545 23.2935 42.3649 23.159C42.3649 23.1383 42.3649 23.1073 42.3752 23.0866C42.4063 22.6726 42.427 22.2587 42.427 21.8448V21.4309C42.4373 21.3895 42.4373 21.3584 42.4373 21.317Z"
                                fill="#010202"
                            />
                            <path
                                d="M26.2634 28.2192C27.0291 29.0263 27.9398 29.6058 29.0884 29.5954C30.8269 29.5851 32.2032 28.7676 33.1862 27.3913C35.2248 24.5559 35.4007 21.3998 34.5625 18.1194C34.4797 17.8711 34.4073 17.6227 34.3038 17.3744C34.2521 17.2295 34.1589 17.1053 34.0762 16.9708C33.6829 16.3189 33.5691 16.2982 32.8551 16.5983C31.1787 17.3123 29.6679 18.316 28.1985 19.3922C26.9153 20.3339 25.6735 21.317 24.6594 22.5588C24.2144 23.1072 24.0592 23.6867 24.2248 24.38C24.5973 25.8391 25.2389 27.1326 26.2634 28.2192ZM12.1693 28.5503C14.0216 29.8438 16.0084 29.6989 17.6124 28.126C18.5851 27.174 19.1956 26.0047 19.6509 24.7318C20.0028 23.7488 19.8062 22.9313 19.1128 22.1759C17.0122 19.8683 14.5493 18.0159 11.8071 16.5672C10.4308 15.8429 10.4722 15.7601 9.77889 17.3226C8.67164 19.7855 8.84756 22.3414 9.47879 24.5766C10.0997 26.3565 10.8654 27.6397 12.1693 28.5503Z"
                                fill="white"
                                stroke="black"
                                strokeWidth="0.25"
                                strokeMiterlimit="10"
                            />
                            <path
                                d="M16.1223 8.62C16.1637 8.70278 16.3086 8.76487 16.4017 8.77522C18.3161 8.90974 20.1477 8.58895 21.8241 7.61623C21.969 7.53345 22.0932 7.29544 22.1035 7.11953C22.1449 6.56073 22.1242 6.00193 22.1345 5.44314C22.1449 4.3152 22.1656 3.19761 22.1759 2.04897C19.2681 2.02827 16.5362 2.63881 13.9182 3.83919C13.9182 3.90128 13.9078 3.93232 13.9182 3.94267C14.6425 5.50523 15.3773 7.06779 16.1223 8.62ZM22.8796 7.81285C24.4008 8.64069 26.0358 8.97183 27.7535 8.94079C28.0743 8.94079 28.2503 8.82696 28.3744 8.52687C28.54 8.12329 28.7573 7.74041 28.9539 7.34718C29.492 6.25029 30.0405 5.16374 30.5993 4.0358C28.0226 2.77334 25.3424 2.12141 22.4864 2.05932C22.476 2.21454 22.4657 2.32837 22.4657 2.4422C22.445 3.96336 22.445 5.48453 22.3932 6.99535C22.3726 7.42997 22.5381 7.62658 22.8796 7.81285ZM28.54 9.27193C29.2023 10.9276 30.5579 11.7244 32.1929 12.159C32.2757 12.1797 32.493 12.0349 32.5137 11.9417C32.5964 11.3933 32.7206 10.8345 32.6585 10.2964C32.5757 9.49958 32.3481 8.70278 32.1929 7.91633C32.2136 7.90598 32.2343 7.89563 32.255 7.87494C32.9069 8.77522 33.5485 9.66515 34.2107 10.5861C34.9972 9.90316 35.763 9.22019 36.5494 8.52687C34.9041 6.69526 33.0311 5.25687 30.8373 4.13928C30.0612 5.73288 29.2954 7.27475 28.5503 8.82696C28.4883 8.96148 28.4883 9.14775 28.54 9.27193ZM14.5908 33.0208C13.9492 31.6031 12.9765 30.5372 11.4139 30.144C11.2691 30.1129 11.0621 30.1647 10.9379 30.2578C10.3481 30.6924 9.7686 31.1581 9.18911 31.6134C8.41301 32.2136 7.64725 32.8241 6.8608 33.4347C8.29918 35.2042 9.93417 36.6633 11.8796 37.8533C12.8006 36.3321 13.7009 34.8524 14.5908 33.3622C14.6529 33.2691 14.6322 33.1139 14.5908 33.0208ZM32.3895 30.4234C30.9201 30.7649 29.9473 31.7169 29.2437 33.0001C29.0988 33.2588 29.1091 33.4761 29.254 33.7244C29.6265 34.3453 29.9784 34.9765 30.3302 35.6078L31.7686 38.112C33.7244 36.9841 35.3904 35.5767 36.8598 33.8693C35.4939 32.7207 34.1693 31.6031 32.8241 30.5062C32.731 30.4234 32.5344 30.3923 32.3895 30.4234ZM12.159 7.71971C12.1797 7.69902 12.2004 7.68867 12.2107 7.66797V7.74041C12.1073 8.13364 12.0038 8.51652 11.9107 8.90974C11.6933 9.82037 11.4346 10.7414 11.7968 11.6727C11.8382 11.7762 12.0141 11.921 12.0969 11.9003C13.6388 11.5485 14.9219 10.8241 15.7291 9.38575C15.905 9.06496 15.8947 8.80626 15.7394 8.48547C15.0565 7.08848 14.3942 5.68114 13.7319 4.27381C13.6181 4.02545 13.5146 3.98406 13.2869 4.12893C12.2107 4.82225 11.0932 5.45349 10.0583 6.19855C9.28224 6.78839 8.58892 7.49206 7.84386 8.15433C8.66136 8.90974 9.40642 9.60306 10.1308 10.2757C10.8241 9.40645 11.4967 8.55791 12.159 7.71971ZM19.0508 34.842C17.9436 33.7658 16.588 33.3622 15.0772 33.3933C14.9737 33.3933 14.8495 33.4968 14.7874 33.5899C13.8975 35.0386 13.0282 36.4977 12.128 37.9878C14.0217 39.1158 16.0188 39.8919 18.1402 40.3161C18.223 40.3368 18.4092 40.1713 18.4299 40.0781C18.7197 38.588 18.9784 37.0875 19.2785 35.5974C19.3509 35.2663 19.2785 35.0593 19.0508 34.842ZM28.6435 33.5692C27.4948 33.5071 26.398 33.7555 25.4045 34.3453C24.6905 34.7696 24.1938 35.2766 24.5353 36.1976C24.5767 36.3218 24.587 36.4563 24.6077 36.5805C24.8147 37.8637 25.0217 39.1468 25.2286 40.461C27.4741 40.0885 29.5645 39.3434 31.5306 38.2569C30.6821 36.7564 29.8646 35.3077 29.0264 33.8589C28.9436 33.7244 28.778 33.5795 28.6435 33.5692ZM33.0311 29.6783C32.8448 29.8128 32.7517 30.0716 33.0414 30.2992C33.5071 30.651 33.9417 31.0443 34.3867 31.4168C35.2662 32.1515 36.1458 32.8966 37.0565 33.652C38.6708 31.7065 39.8297 29.5645 40.6058 27.1637C39.1571 26.7188 37.7291 26.2842 36.2804 25.8495C35.4939 27.3914 34.4487 28.6953 33.0311 29.6783ZM10.6792 29.2747C9.65477 28.509 8.84763 27.557 8.20605 26.4601C8.04048 26.1703 7.94734 25.7357 7.70934 25.6322C7.47133 25.5287 7.08845 25.7357 6.76766 25.8185C5.66042 26.1186 4.55318 26.4394 3.38384 26.7602C4.11856 29.1402 5.19476 31.2616 6.70557 33.1863C8.06117 32.1308 9.38573 31.1064 10.6999 30.0716C11.0725 29.7922 11.0621 29.5541 10.6792 29.2747ZM23.9455 35.3077C22.8796 34.9455 21.7931 34.8213 20.6858 35.0179C19.6614 35.2042 19.651 35.2145 19.4544 36.239C19.1853 37.6256 18.937 39.0123 18.6783 40.4196C20.7686 40.7922 22.8175 40.8025 24.9285 40.5128C24.6595 38.8053 24.4111 37.1393 24.1421 35.4732C24.1317 35.4112 24.0179 35.3387 23.9455 35.3077ZM3.59081 26.4083C4.35656 26.2117 5.12232 25.9944 5.88808 25.7771C6.45722 25.6219 7.01602 25.4563 7.45064 25.3321C7.12985 23.7075 6.82975 22.1553 6.51931 20.541C5.31893 20.4582 4.00473 20.3651 2.66983 20.2719C2.54565 22.3312 2.75261 24.318 3.27002 26.2635C3.28036 26.3359 3.49767 26.429 3.59081 26.4083ZM41.4751 20.9859C41.4751 20.9135 41.2992 20.7893 41.206 20.7997C40.0471 20.8411 38.8777 20.8928 37.7187 20.9342C37.4704 20.9446 37.429 21.048 37.3979 21.2757C37.2738 22.1656 37.1496 23.0659 36.9633 23.9455C36.8392 24.5043 36.6115 25.0424 36.4252 25.6012C37.8429 26.0358 39.2399 26.4601 40.6886 26.8947C41.2681 24.9389 41.5268 22.9831 41.4751 20.9859ZM7.51272 15.5739C7.53342 15.5015 7.48168 15.3255 7.41959 15.3049C6.35374 14.8185 5.27754 14.3528 4.1703 13.8665C3.31141 15.8326 2.8354 17.8608 2.68018 19.9925L6.67453 20.2719C6.71592 18.6266 7.01602 17.0847 7.51272 15.5739ZM36.7253 15.9775C37.1289 17.4366 37.4186 18.906 37.4186 20.4271C37.4186 20.4996 37.5428 20.6445 37.6049 20.6445C38.8777 20.6031 40.1505 20.541 41.4647 20.4892C41.3509 18.3782 40.9473 16.3707 40.1505 14.4046C39.0536 14.8392 37.9774 15.2635 36.9116 15.6981C36.8185 15.7291 36.7046 15.905 36.7253 15.9775ZM34.4901 11.1035C34.8834 11.8693 35.318 12.6247 35.6905 13.4008C36.0217 14.0838 36.2907 14.7874 36.6011 15.5118C37.7498 15.0462 38.8881 14.5805 40.0471 14.1148C39.1985 12.1383 38.143 10.3585 36.7253 8.76487C35.9596 9.44784 35.2145 10.0894 34.4901 10.7517C34.428 10.8034 34.4384 11.0001 34.4901 11.1035ZM9.90313 10.7C9.93417 10.6379 9.91348 10.493 9.86174 10.4413C9.14772 9.75829 8.42335 9.09601 7.68864 8.41304C6.26061 9.96525 5.15336 11.6727 4.27378 13.6078C5.42241 14.1148 6.54001 14.6012 7.55412 15.0461C8.35092 13.5767 9.13737 12.1383 9.90313 10.7Z"
                                fill="#C01918"
                            />
                            <path
                                d="M16.3085 9.06489C16.7845 10.0583 17.2088 10.9793 17.6641 11.8899C17.7365 12.0244 17.9228 12.1693 18.0676 12.1797C19.3301 12.2417 20.5512 12.0451 21.6791 11.4346C21.824 11.3518 22.031 11.2069 22.031 11.0931C22.0723 10.0169 22.0723 8.95106 22.0827 7.82312C20.2925 8.83723 18.3988 9.19941 16.3085 9.06489ZM22.5587 11.4036C23.7177 12.0762 24.9802 12.3349 26.3151 12.2728C26.4185 12.2728 26.5634 12.1797 26.6048 12.0865C27.0808 11.1552 27.5465 10.2239 28.0432 9.22011C25.9943 9.29255 24.1213 8.89932 22.3828 7.85416C22.3724 8.97176 22.3517 10.0376 22.3517 11.1035C22.3621 11.2069 22.4656 11.3415 22.5587 11.4036ZM23.1072 18.8335C22.4035 18.5851 21.6895 18.5851 20.9858 18.8024C20.8616 18.8438 20.7271 18.8956 20.6133 18.968C20.3856 19.1129 20.1787 19.2888 19.951 19.413C19.6509 19.5682 19.5681 19.8579 19.7751 20.1373C20.158 20.6651 20.5615 21.1825 20.8927 21.7413C21.1824 22.238 21.5239 22.7347 21.348 23.397C21.141 24.1938 21.1721 24.1938 21.9896 24.2248C22.093 24.2248 22.1965 24.2559 22.3104 24.2559C22.6518 24.2765 22.8691 24.1317 22.745 23.7798C22.4759 23.0037 22.745 22.3622 23.1692 21.7516C23.5418 21.2135 23.9557 20.7065 24.3282 20.1787C24.4007 20.0752 24.4317 19.9304 24.4938 19.7648C24.3282 19.6303 24.2041 19.5371 24.0799 19.444C23.8936 19.3095 23.697 19.1646 23.5004 19.0404C23.3866 18.9576 23.252 18.8852 23.1072 18.8335ZM12.1899 12.2107C12.9867 12.9558 13.7422 13.6698 14.5079 14.3734C14.5803 14.4459 14.7666 14.4769 14.8597 14.4355C15.4806 14.1354 16.1533 13.8871 16.7017 13.4732C17.5088 12.8626 17.5502 12.4384 17.157 11.5277C17.1363 11.476 17.1156 11.4139 17.0846 11.3622C16.7638 10.6999 16.443 10.0376 16.0912 9.30289C15.2737 10.9586 13.887 11.745 12.1899 12.2107ZM28.2501 9.38568C27.7534 10.4101 27.2774 11.3518 26.8325 12.3142C26.7807 12.4177 26.8221 12.5936 26.8842 12.7074C27.3913 13.7319 28.2812 14.2907 29.347 14.6011C29.4505 14.6322 29.6057 14.6218 29.6782 14.5701C30.475 13.8871 31.2614 13.1834 32.0893 12.4487C30.3818 11.9623 29.0263 11.1035 28.2501 9.38568ZM20.0027 31.634C20.0234 31.5409 19.9406 31.4064 19.8682 31.3339C19.1025 30.5578 18.1504 30.2163 17.0742 30.2267C16.9604 30.2267 16.7948 30.2888 16.7431 30.3819C16.1946 31.2615 15.6565 32.1514 15.0874 33.0931C16.7638 33.1138 18.2125 33.5588 19.4232 34.8109C19.6199 33.7036 19.8268 32.6688 20.0027 31.634ZM28.6848 33.269C28.1363 32.3273 27.6396 31.4271 27.1119 30.5475C27.0498 30.444 26.8532 30.3405 26.7497 30.3612C26.1081 30.4647 25.4458 30.5164 24.856 30.7544C23.8522 31.1477 23.7901 31.3753 23.966 32.4515C24.0902 33.2276 24.2041 34.0141 24.3386 34.8523C25.5596 33.6519 27.0291 33.238 28.6848 33.269ZM24.0592 35.0282C23.904 33.983 23.7384 33.0103 23.6142 32.0376C23.5728 31.7168 23.4383 31.5512 23.1175 31.5202C22.538 31.4685 21.9689 31.3546 21.3894 31.365C20.4063 31.3857 20.3442 31.4581 20.158 32.4101C19.9924 33.238 19.8475 34.0762 19.6923 34.9558C21.1721 34.5004 22.6001 34.5936 24.0592 35.0282Z"
                                fill="#C01918"
                            />
                            <path
                                d="M22.0516 11.6312C21.3583 11.8692 20.7167 12.1486 20.0544 12.2935C19.3818 12.4383 18.6781 12.459 17.9641 12.5315C18.4091 13.4732 18.8644 14.4355 19.3301 15.3979C19.3611 15.4496 19.4646 15.5014 19.537 15.5014C20.3442 15.5428 21.1203 15.4186 21.8343 15.015C21.9171 14.9633 22.0102 14.8391 22.0102 14.746C22.0309 13.7215 22.0413 12.697 22.0516 11.6312ZM23.6763 15.5014C23.728 15.5117 23.7694 15.5117 23.8211 15.5221C24.8456 15.6773 24.8352 15.6773 25.2906 14.7563C25.6424 14.0423 26.0046 13.3283 26.3875 12.5729C24.918 12.6143 23.6038 12.3349 22.3414 11.6208L22.3103 13.8353C22.2793 15.1288 22.3931 15.2634 23.6763 15.5014ZM14.8907 14.7253C15.6979 15.4807 16.4533 16.174 17.2087 16.8673C17.2605 16.9087 17.3432 16.9501 17.395 16.9398C18.0159 16.7949 18.5436 16.5155 18.9368 15.9981C19.2576 15.5842 18.9265 15.2841 18.7816 14.9633C18.4401 14.2079 18.0676 13.4525 17.6951 12.6557C17.0845 13.8043 16.1222 14.3734 14.8907 14.7253ZM26.2736 16.888C26.6151 17.0846 26.9152 17.1157 27.205 16.7638C27.4223 16.5051 27.7224 16.3085 27.9707 16.0809C28.395 15.698 28.8296 15.3151 29.2746 14.9219C27.7017 14.2803 27.3395 14.0113 26.5634 12.7902C26.1598 13.6284 25.7873 14.4045 25.4044 15.1806C25.0733 15.8532 25.125 16.0912 25.7252 16.5569C25.9011 16.6811 26.0874 16.7742 26.2736 16.888ZM23.0243 28.2916C22.9726 27.888 22.7967 27.7638 22.4448 27.7018C21.3376 27.4948 21.0375 27.6707 20.8512 28.7055C20.696 29.5437 20.5408 30.3716 20.4063 31.1063C21.4307 31.1373 22.4241 31.158 23.4693 31.1891C23.3244 30.2784 23.1382 29.285 23.0243 28.2916ZM20.6339 28.2502C20.7478 27.65 20.6339 27.4534 20.1476 27.2775C19.2887 28.2088 18.4608 29.1091 17.7572 29.8748C18.4505 30.1853 19.2887 30.5682 20.1372 30.951C20.2821 30.1335 20.458 29.1919 20.6339 28.2502ZM20.5718 18.0987C20.7685 18.6058 21.0892 18.5644 21.4618 18.4299C21.648 18.3678 21.9378 18.2333 21.9378 18.1091C21.9895 17.1778 21.9792 16.2464 21.9895 15.3669C21.172 15.5428 20.3649 15.7187 19.537 15.8946C19.8889 16.619 20.2717 17.3433 20.5718 18.0987ZM23.7177 30.9614C24.5662 30.6096 25.4044 30.2784 26.2115 29.9473C25.3837 29.4092 24.6593 28.6124 24.1419 27.65C23.8936 27.1947 23.6866 27.2775 23.4176 27.5465C23.3244 27.6397 23.252 27.8052 23.2623 27.9294C23.3348 28.5813 23.4486 29.2229 23.5417 29.8645C23.6142 30.2681 23.6763 30.6716 23.7177 30.9614ZM23.6038 18.1919C23.7694 17.8607 23.9246 17.5296 24.0902 17.1985C24.3075 16.7742 24.5455 16.3603 24.7525 15.9877C23.8729 15.7911 23.0864 15.6049 22.2896 15.4289L22.2586 18.1712C22.2586 18.2126 22.2689 18.2643 22.2896 18.3057C22.5483 18.6472 23.4176 18.5748 23.6038 18.1919ZM20.189 18.968C20.3235 18.8645 20.4684 18.5851 20.4166 18.4609C20.0751 17.6434 19.6819 16.8466 19.3404 16.1223C18.7713 16.5155 18.2228 16.9087 17.664 17.3019C18.2746 17.8711 18.9162 18.5023 19.6095 19.0818C19.7026 19.1646 20.0337 19.0715 20.189 18.968ZM23.7384 18.6058C23.697 18.6989 23.7901 18.9162 23.8832 18.9783C24.0384 19.0818 24.3489 19.2267 24.4317 19.1542C25.156 18.5748 25.839 17.9539 26.4806 17.3847C25.9321 16.9811 25.4251 16.6086 24.8973 16.2154C24.5248 16.9708 24.1212 17.778 23.7384 18.6058ZM22.0413 24.5352C21.8964 24.5249 21.6273 24.5973 21.6066 24.6801C21.41 25.5804 21.2445 26.491 21.0789 27.381L22.8588 27.4431C22.7242 26.5635 22.6104 25.6425 22.4448 24.7422C22.4345 24.6491 22.1861 24.5456 22.0413 24.5352ZM30.7957 30.682C29.823 30.9614 28.6951 30.9717 27.4947 30.5992C27.9707 31.4478 28.4157 32.2342 28.8193 32.9379C29.5126 32.1411 30.1955 31.3546 30.7957 30.682ZM20.1993 26.9463C20.3856 27.0705 20.5718 27.205 20.7995 27.3603C20.9651 26.4496 21.141 25.57 21.2962 24.6801C21.3066 24.5973 21.2341 24.4938 21.1824 24.3283C20.8305 25.2596 20.5201 26.0978 20.1993 26.9463ZM23.728 26.9877L22.8484 24.4111C22.7967 24.4214 22.7553 24.4318 22.7035 24.4318L23.1485 27.3706C23.3865 27.2154 23.5624 27.1016 23.728 26.9877ZM26.4599 17.7883C25.8701 18.3057 25.2699 18.8231 24.6904 19.3509C24.6283 19.4026 24.6593 19.5682 24.6283 19.8062C25.332 19.0818 25.9218 18.4713 26.5013 17.8607C26.5013 17.8297 26.4806 17.809 26.4599 17.7883ZM19.3922 19.6613C19.4646 19.3509 18.7092 18.523 18.1918 18.3264C18.6057 18.7817 18.9782 19.206 19.3922 19.6613ZM14.8804 32.8861C15.3771 32.0686 15.8428 31.2925 16.3602 30.444C15.2012 30.7855 14.1353 30.7337 13.0798 30.4854C13.0384 30.4957 12.9867 30.4957 12.9453 30.5061L13.0384 30.5682C13.8352 31.158 14.4044 31.9445 14.8804 32.8861Z"
                                fill="#C01918"
                            />
                        </svg>
                        <a
                            onClick={() => onclick(true)}
                            className={cx('navbar-login_button', 'navbar-login_button_signup')}
                        >
                            Signup
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
