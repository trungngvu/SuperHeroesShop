import Header from './DefaultLayout/Header/header';
import Footer from './DefaultLayout/Footer/footer';
import Signup from '../Home/Signup/signup';
import React, { useState, useEffect } from 'react';

type Props = {
    children: JSX.Element,
    logged: (c: boolean)=>void,
}

function DefaultLayout({ children, logged }: Props) {
    const [modals, setModals] = useState(false);
    const [out, setOut] = useState(false);
    const [isLoggedIn, setIsLoggedin] = useState(localStorage.getItem('isLoggedin') === 'true');

    useEffect(() => {
        logged(isLoggedIn);
    });

    const signup = (click: boolean) => {
        setModals(click);
    };

    const closed = () => {
        setOut(true);
        setTimeout(() => {
            setModals(false);
            setOut(false);
        }, 600);
    };

    const logout = () => {
        setIsLoggedin(false);
        localStorage.setItem('isLoggedin', 'false');
    };

    return (
        <>
            <div className="wrapper">
                <Header onclick={signup} isLoggedIn={isLoggedIn} logout={logout} />
                <div className="container">
                    <div className="content">{children}</div>
                </div>
                <Footer />
            </div>
            {modals && (
                <Signup
                    onclick={closed}
                    out={out}
                    register={() => {
                        setIsLoggedin(true);
                        localStorage.setItem('isLoggedin', 'true');
                    }}
                />
            )}
        </>
    );
}
export default DefaultLayout;
