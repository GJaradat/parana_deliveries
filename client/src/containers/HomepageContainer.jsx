import Navigation from "../components/Navigation";
import logo from "../assets/logo_vertical_parana.png"
import {useEffect} from "react"


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
        <>
            <div id="logo-container">
                <img src={logo} alt="logo" id="home-logo"></img>
            </div>
            <p>Hello from Homepage Container</p>
            < Navigation/>
        </>
     );
}
 
export default HomepageContainer;