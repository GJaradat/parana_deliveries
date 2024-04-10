import { Outlet} from "react-router-dom";

const Navigation = () => {
    return ( 
        <>
            <p> Hello from Navigation Component</p>
            <Navigation/>
            <Outlet />
        </>
     );
}
 
export default Navigation;