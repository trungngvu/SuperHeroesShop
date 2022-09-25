import Header from './DefaultLayout/Header/header';
import Footer from './DefaultLayout/Footer/footer';
import Signup from '../Home/Signup/signup';
import Signin from '../Home/Signin/signin';
import React, { useState, useEffect } from 'react';

type Props = {
    children: JSX.Element;
    logged: (c: boolean) => void;
};

function DefaultLayout({ children, logged }: Props) {
    const [modals, setModals] = useState(0);
    const [out, setOut] = useState(false);

    const sign = (click: number) => {
        setModals(click);
    };

    const closed = () => {
        setOut(true);
        setTimeout(() => {
            setModals(0);
            setOut(false);
        }, 600);
    };

    const logout = () => {
        localStorage.setItem('userID', '');
    };

    const modal = () => {
        if (modals === 1)
            return (
                <Signin
                    onclick={closed}
                    out={out}
                    signup={() => {
                        setModals(2);
                    }}
                />
            );
        if (modals === 2)
            return (
                <Signup
                    onclick={closed}
                    out={out}
                    login={() => {
                        setModals(1);
                    }}
                />
            );
        return;
    };

    return (
        <>
            <div className="wrapper">
                <Header onclick={sign} logout={logout} />
                <div className="container">
                    <div className="content">{children}</div>
                </div>
                <Footer />
            </div>
            {modal()}
        </>
    );
}
export default DefaultLayout;
