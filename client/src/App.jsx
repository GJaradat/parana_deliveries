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
    { path: "/",
      element: <Navigation/>,
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
      ]
    }
  ]);

  const displayPrivacyNotice = () => {
    alert("We literally know where you live")
  }

  const cookieTime = () => {
    alert("Have a cookie 🍪")
  }

  return (
    <>
      <main>
      <RouterProvider router={pageRoutes} />
      </main>

      <footer>
        <audio controls>
            <source src="Rainforest.mp3" type="audio/mpeg"/>
        </audio>
        <section className='footer-links'>
          <p>T&Cs</p>
          <button onClick={displayPrivacyNotice} className='footer-link'>Privacy Notice</button>
          <button onClick={cookieTime} className='footer-link'>Cookies Notice</button>
          <p>Accessibility</p>
          <p>© 1997-2024 Paraná Inc. or its affiliates</p>
        </section>
        
      </footer>
    </>
  );
}

export default App;
