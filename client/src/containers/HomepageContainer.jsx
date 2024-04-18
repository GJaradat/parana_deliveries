import "../styles/HomePageStyle.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo_vertical_parana.png";
import {useEffect} from "react";
import React from 'react';


const HomepageContainer = () => {
    
    const generateRoutes = async () => {
        const response = await fetch("http://localhost:8080/routes/generateRoutes",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
    })
    }

    useEffect(() => {
        generateRoutes();},
    []);

    return ( 
        <section id="homepage">
            <div id="logoContainer">
                <img src={logo} alt="logo" id="home-logo"></img>
            </div>
            <nav>
                <ul id ="homepageNav">
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