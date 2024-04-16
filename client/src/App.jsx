import './App.css';

import 'mapbox-gl/dist/mapbox-gl.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RoutesContainer from './containers/RoutesContainer';
import FleetContainer from './containers/FleetContainer';
import HomepageContainer from './containers/HomepageContainer';
import DeliveriesContainer from './containers/DeliveriesContainer';
import Navigation from './components/Navigation';
import logo from "./assets/logo_horizontal_parana.png";

function App() {

  const pageRoutes = createBrowserRouter([
    {
      path: "/",
      element:<HomepageContainer />
    },
    {
      path: "/home",
      element:<HomepageContainer />
    },
    {
      path: "/",
      element: <Navigation />,
      children: [
        {
          path: "/routes",
          element: <RoutesContainer />
        },
        {
          path: "/fleet",
          element: <FleetContainer />
        },
        {
          path: "/deliveries",
          element: <DeliveriesContainer />
        }
      ]}
  ]);

  return (
    <>
      <header>
      <img id="headerLogo" src={logo} alt="logo"></img>
      </header>

      <main>
      <RouterProvider router={pageRoutes} />
      </main>

      <footer>
        <section className='footer-links'>
          <p>Conditions of Use & Sale</p>
          <p>Privacy Notice</p>
          <p>Cookies Notice</p>
          <p>Interest-Based Ads Notice</p>
          <p>© 1996-2024, Paraná.com, Inc. or its affiliates</p>
        </section>
      </footer>
    </>
  );
}

export default App;
