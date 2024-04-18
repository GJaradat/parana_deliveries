import "../styles/HomePageStyle.css";
import crown from "../assets/crown.png";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import logo from "../assets/logo_vertical_parana.png";
import {useEffect} from "react";


const HomepageContainer = () => {
    
    const generateRoutes = async () => {
        const response = await fetch("http://localhost:8080/routes/generateRoutes",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
    })
    }

    useEffect(() => {
        generateRoutes();
        document.body.classList.add('hide-header');

        // Cleanup function to remove the class when the component unmounts
        return () => {
          document.body.classList.remove('hide-header');
        };
     }, []);

    return ( 
        <section id="homepage">
        {/* <div id="crown">
            <img src={crown} alt="crown"/>
        </div> */}
            <div id="logoContainer">
                <img src={logo} alt="logo" id="home-logo"></img>
            </div>
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
        </section>
     );
}
 
export default HomepageContainer;