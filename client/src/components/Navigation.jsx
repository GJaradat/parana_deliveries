import { Link, Outlet} from "react-router-dom";
import logo from "../assets/logo_horizontal_parana.png";
import "../styles/Navigation.css";

const Navigation = () => {
    return ( 
        <>
     <header>
      <img id="headerLogo" src={logo} alt="logo"></img>
      <nav>
                <ul id="navbar">
                    <li>
                        <Link id="fleetLink" to="/fleet">Fleet</Link>
                    </li> 

                    <li>
                        <Link id="routesLink" to="/routes">Routes</Link>
                    </li>

                    <li>
                        <Link id="deliveriesLink" to="/deliveries">Deliveries</Link>
                    </li>
                </ul>
            </nav>
      </header>
    <Outlet /> 

    </>
     );
}
 
export default Navigation;