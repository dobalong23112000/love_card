
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from 'routes';
import DefaultLayout from 'components/Layouts/DefaultLayout';
import { Fragment } from 'react';
import ScrollToTop from 'helpers/ScrollToTop';
import ProtectedRoute from 'routes/ProtectedRoute';
function App() {
  const windowHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--window-height', `${window.innerHeight}px`)
  }
  window.addEventListener('resize', windowHeight);
  windowHeight();
  return (
    <Router>
      <div className='App'>
        <ScrollToTop />
        <Routes >
          {publicRoutes.map((route) => {
            let Layout = DefaultLayout
            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }
            const Page = route.component;
            return (
              <Route
                exact={true}
                key={route.path}
                path={route.path}
                element={
                  (
                    <Layout>
                      <Page />
                    </Layout>)

                } />)
          })}
          {privateRoutes.map((route) => {
            let Layout = DefaultLayout
            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }
            return (
              <Route
                exact={true}
                key={route.path}
                path={route.path}
                element={
                  (
                    <Layout>
                      <ProtectedRoute component={route.component} />
                    </Layout>)

                } />)
          })}
        </Routes>
      </div>
    </Router>


  );
}

export default App;
