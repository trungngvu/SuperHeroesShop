import Header from './DefaultLayout/Header/header';
import Footer from './DefaultLayout/Footer/footer';
function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}
export default DefaultLayout;
