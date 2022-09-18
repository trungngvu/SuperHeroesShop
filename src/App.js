import { publicRoutes, privateRoutes } from './routes/routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import DefaultLayout from './components/Layout/layout';
import Scrolltotop from './components/scrolltotop/scrolltotop';
import { Fragment, useState } from 'react';

function App() {
    const [isAuth, setIsAuth] = useState(false);

    const auth = (c) => {
        if (c) setIsAuth(true);
        else setIsAuth(false);
    };

    const CheckAuth = ({ children }) => {
        if (isAuth) return children;
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
                                <Layout logged={auth}>
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
                                <Layout logged={auth}>
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
