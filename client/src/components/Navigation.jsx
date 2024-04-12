import { Link, Outlet} from "react-router-dom";

const Navigation = () => {
    return ( 
        <>
            <li>
                 <Link to="/fleet">Fleet</Link>
            </li> 

            <li>
                <Link to="/routes">Routes</Link>
            </li>

            <li>
                <Link to="/deliveries">Deliveries</Link>
            </li>

            <Outlet />
        </>
     );
}
 
export default Navigation;