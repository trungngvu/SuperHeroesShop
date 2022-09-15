import Header from './DefaultLayout/Header/header';
import Footer from './DefaultLayout/Footer/footer';
import Signup from '../Home/Signup/signup';
import React, { useState } from 'react';
function DefaultLayout({ children }) {
    const [modals, setModals] = useState(false);
    const [out, setOut] = useState(false);
    const [isLoggedIn, setIsLoggedin] = useState(false);

    const signup = (click) => {
        setModals(click);
    };

    const closed = () => {
        setOut(true);
        setTimeout(() => {
            setModals(false);
            setOut(false);
        }, 600);
    };

    return (
        <>
            <div className="wrapper">
                <Header onclick={signup} isLoggedIn={isLoggedIn}/>
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
                    }}
                />
            )}
        </>
    );
}
export default DefaultLayout;
