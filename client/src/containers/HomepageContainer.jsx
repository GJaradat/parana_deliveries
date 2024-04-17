import Navigation from "../components/Navigation";
import logo from "../assets/logo_vertical_parana.png"
import { useEffect } from "react";


const HomepageContainer = () => {

    return ( 
        <>
            <div className="logo-container">
                <img src={logo} alt="logo" id="home-logo"></img>
            </div>
            <p>Hello from Homepage Container</p>
            < Navigation/>
        </>
     );
}
 
export default HomepageContainer;