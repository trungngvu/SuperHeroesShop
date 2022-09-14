import Header from './DefaultLayout/Header/header';
import Footer from './DefaultLayout/Footer/footer';
import Signup from '../Home/Signup/signup';
import React, { useState } from 'react';
function DefaultLayout({ children }) {
    const [modals, setModals] = useState(false);

    const signup = (click) => {
        setModals(click); 
    };

    return (
        <>
            <div className="wrapper">
                <Header onclick={signup} />
                <div className="container">
                    <div className="content">{children}</div>
                </div>
                <Footer />
            </div>
            {modals && <Signup onclick={signup} />}
        </>
    );
}
export default DefaultLayout;
