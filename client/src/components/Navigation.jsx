import { Outlet} from "react-router-dom";

const Navigation = () => {
    return ( 
        <>
            <p> Hello from Navigation Component</p>
            <Outlet />
        </>
     );
}
 
export default Navigation;