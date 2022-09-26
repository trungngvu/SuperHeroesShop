import classNames from 'classnames/bind';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './signin.module.scss';
import { PropsUser } from '../../../components/Profile/user/user';
const cx = classNames.bind(styles);

interface signin {
    onclick: () => void;
    out: boolean;
    signup: () => void;
    userID: (p: string) => void;
}

function Signin({ onclick, out, signup, userID }: signin) {
    const [checkUser, setCheckUser] = useState<number>(-1);

    interface User extends PropsUser {
        password: string;
    }

    const [formData, setFormData] = useState<User>({
        background: '',
        avatar: '',
        name: '',
        id: '',
        password: '',
    });

    const getData = async () => {
        const data = await axios.get('https://632d1d290d7928c7d24518bd.mockapi.io/users');
        return data.data;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const checkcre = (name: string, password: string, users: User[]) => {
        let check = 0;
        users.forEach((user) => {
            if (user.name === name) {
                check = 1;
                if (user.password === password) {
                    userID(user.id);
                    return (check = 2);
                }
            }
        });
        return check;
    };

    const error = () => {
        if (checkUser === 0) return 'User not Found';
        if (checkUser === 1) return 'Wrong password';
        return '';
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        getData().then((data) => {
            const check = checkcre(formData.name, formData.password, data);
            setCheckUser(check);
            if (check === 2) onclick();
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
                    <h1 className={cx('modal_container-title')}>Signin</h1>
                    <span className={cx('modal_container-content')}>
                        <pre style={{ display: 'inline' }}>Don't have an account? </pre>
                        <span onClick={signup} className={cx('modal_container-link')}>
                            Sign up
                        </span>
                    </span>
                    <div className={cx('login_error')}>{error()}</div>
                    <form>
                        <input
                            name="name"
                            onChange={handleChange}
                            className={cx('modal_input')}
                            type="text"
                            placeholder="User name"
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
                                // register();
                                // onclick();
                                handleSubmit(e);
                            }}
                            className={cx('modal_button', 'modal_input', 'js-modal_button')}
                        >
                            Sign In
                        </button>
                    </form>
                </div>
                <div className={cx('modal_container-foot')}></div>
            </div>
        </div>
    );
}

export default Signin;
