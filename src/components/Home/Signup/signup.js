import classNames from 'classnames/bind';
import styles from './signup.module.scss';
const cx = classNames.bind(styles);
function Signup({ onclick, out, register }) {
    const ani = () => {
        if (out) return styles.modal_container + ' ' + styles.modal_container_out;
        else return styles.modal_container;
    };

    let check = 0;

    const clickin = () => {
        check = 1;
    };
    const clickout = () => {
        if ((check === 1)) check = 0;
        else check = 2;
        if ((check === 2)) onclick();
    };


    return (
        <div onClick={clickout} className={cx('modal')}>
            <div onClick={clickin} className={ani()}>
                <i onClick={onclick} className={cx('button_close', 'fa-solid fa-xmark')}></i>
                <div className={cx('modal_container-body')}>
                    <h1 className={cx('modal_container-title')}>Signup</h1>
                    <span className={cx('modal_container-content')}>
                        Already have an account?
                        <a href="" className={cx('modal_container-link')}>
                            Sign in
                        </a>
                    </span>
                    <input className={cx('modal_input')} type="text" placeholder="Account" />
                    <div className={cx('modal_container-body-name')}>
                        <input
                            className={cx('modal_input', 'modal_input-name1')}
                            type="text"
                            placeholder="First name"
                        />
                        <input className={cx('modal_input', 'modal_input-name2')} type="text" placeholder="Last name" />
                    </div>
                    <input className={cx('modal_input')} type="text" placeholder="E-mail" />
                    <input className={cx('modal_input')} type="text" placeholder="Password" />
                    <button
                        onClick={() => {
                            register();
                            onclick();
                        }}
                        className={cx('modal_button', 'modal_input', 'js-modal_button')}
                    >
                        Register
                    </button>
                    <div className={cx('check_box')}>
                        <input type="checkbox" />
                        <span className={cx('check_box-content')}>
                            I have read and agree to the
                            <a href="">Terms of Service</a>
                        </span>
                    </div>
                </div>
                <div className={cx('modal_container-foot')}></div>
            </div>
        </div>
    );
}

export default Signup;
