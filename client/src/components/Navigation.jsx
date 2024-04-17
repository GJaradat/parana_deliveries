import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo-horizontal-filled3.png";
import "../styles/Navigation.css";

const Navigation = () => {
    return ( 
        <>
        <header>
            <img id="headerLogo" src={logo} alt="logo" />
            <nav>
                <ul id="navbar">
                    <li>
                        <Link className="navButton" to="/fleet">Fleet</Link>
                    </li> 

                    <li>
                        <Link className="navButton" to="/routes">Routes</Link>
                    </li>

                    <li>
                        <Link className="navButton" to="/deliveries">Deliveries</Link>
                    </li>
                </ul>
            </nav>
      </header>
    <Outlet /> 

    </>
     );
}
 
export default Navigation;