import { Link, Outlet} from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
    return ( 
        <>
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
        <Outlet />
    </>
     );
}
 
export default Navigation;