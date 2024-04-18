import "../styles/HomePageStyle.css";
import crown from "../assets/crown.png";
import { Link } from "react-router-dom";
import logo from "../assets/logo_vertical_parana.png";
import {useEffect} from "react";

import React from 'react';
// import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
// import {BackgroundVideo} from './src/components/VideoBackground';

// const background = require('./src/assets/backgroundVid.mp4');


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

{/*         
             <BackgroundVideo source={background} />
     <View style={styles.overlay} />
     <SafeAreaView style={styles.contentWrapper}>
       <StatusBar
         backgroundColor="transparent"
         translucent={true}
         hidden={false}
       />
       </SafeAreaView> */}

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