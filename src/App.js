import { publicRoutes } from "./routes/routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./components/Layout/layout";
import Scrolltotop from "./components/scrolltotop/scrolltotop";
import { Fragment } from "react";
function App() {
  return (
    <Router>
      <Scrolltotop/>
      <div>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            const Layout = route.layout === null ? Fragment : DefaultLayout;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
