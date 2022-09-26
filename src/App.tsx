import { publicRoutes, privateRoutes } from './routes/routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import DefaultLayout from './components/Layout/layout';
import Scrolltotop from './components/scrolltotop/scrolltotop';
import { Fragment, useState } from 'react';
import React from 'react';

const App: React.FC = () => {
    const [userID, setUserID] = useState(localStorage.getItem('userID'));

    const auth = (p: string) => {
        localStorage.setItem('userID', p);
        setUserID(localStorage.getItem('userID'));
    };
    type Props = {
        children: JSX.Element;
    };
    const CheckAuth = ({ children }: Props) => {
        if (userID!=='') return children;
        return <Navigate to="/" />;
    };

    return (
        <Router>
            <Scrolltotop />
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    const Layout = route.layout === null ? Fragment : DefaultLayout;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout userID={userID} logged={auth}>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
                {privateRoutes.map((route, index) => {
                    const Page = route.component;
                    const Layout = route.layout === null ? Fragment : DefaultLayout;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout userID={userID} logged={auth}>
                                    <CheckAuth>
                                        <Page />
                                    </CheckAuth>
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
