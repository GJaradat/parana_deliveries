import logo from "../assets/logo_vertical_parana.png"

const HomepageContainer = () => {
    return ( 
        <>
            <div className="logo-container">
                <img src={logo} alt="logo" id="home-logo"></img>
            </div>
            <p>Hello from Homepage Container</p>
        </>
     );
}
 
export default HomepageContainer;