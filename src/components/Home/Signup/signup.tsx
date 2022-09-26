import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './signup.module.scss';
const cx = classNames.bind(styles);

interface signup {
    onclick: () => void;
    out: boolean;
    login: () => void;
}

function Signup({ onclick, out, login }: signup) {
    const [formData, setFormData] = useState({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        axios
            .post('https://632d1d290d7928c7d24518bd.mockapi.io/users', formData)
            .then(() => {
                console.log('POST success');
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const ani = () => {
        if (out) return styles.modal_container + ' ' + styles.modal_container_out;
        else return styles.modal_container;
    };

    let check = 0;

    const clickin = () => {
        check = 1;
    };
    const clickout = () => {
        if (check === 1) check = 0;
        else onclick();
    };

    return (
        <div onClick={clickout} className={cx('modal')}>
            <div onClick={clickin} className={ani()}>
                <i onClick={onclick} className={cx('button_close', 'fa-solid fa-xmark')}></i>
                <div className={cx('modal_container-body')}>
                    <h1 className={cx('modal_container-title')}>Signup</h1>
                    <span className={cx('modal_container-content')}>
                        <pre style={{ display: 'inline' }}>Already have an account? </pre>
                        <span onClick={login} className={cx('modal_container-link')}>
                            Sign in
                        </span>
                    </span>
                    <form>
                        <input
                            name="name"
                            onChange={handleChange}
                            className={cx('modal_input')}
                            type="text"
                            placeholder="User name"
                        />
                        <div className={cx('modal_container-body-name')}>
                            <input
                                className={cx('modal_input', 'modal_input-name1')}
                                type="text"
                                placeholder="First name"
                                name="firstName"
                                onChange={handleChange}
                            />
                            <input
                                className={cx('modal_input', 'modal_input-name2')}
                                type="text"
                                placeholder="Last name"
                                name="lastname"
                                onChange={handleChange}
                            />
                        </div>
                        <input
                            name="email"
                            onChange={handleChange}
                            className={cx('modal_input')}
                            type="text"
                            placeholder="E-mail"
                        />
                        <input
                            name="password"
                            onChange={handleChange}
                            className={cx('modal_input')}
                            type="text"
                            placeholder="Password"
                        />
                        <button
                            onClick={(e) => {
                                onclick();
                                handleSubmit(e);
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
                    </form>
                </div>
                <div className={cx('modal_container-foot')}></div>
            </div>
        </div>
    );
}

export default Signup;
