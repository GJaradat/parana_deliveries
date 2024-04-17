import Navigation from "../components/Navigation";
import logo from "../assets/logo_vertical_parana.png";
import "../styles/HomePageStyle.css";
import { useEffect } from "react";


const HomepageContainer = () => {
    useEffect(() => {
        document.body.classList.add('hide-header');

        // Cleanup function to remove the class when the component unmounts
        return () => {
          document.body.classList.remove('hide-header');
        };
     }, []);

    return ( 
        <>
            <div id="logo-container">
                <img src={logo} alt="logo" id="home-logo"></img>
            </div>
            < Navigation/>
        </>
     );
}
 
export default HomepageContainer;