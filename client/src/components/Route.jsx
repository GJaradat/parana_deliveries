import { useState } from "react";
import DeliveryList from "./DeliveryList";
import "../styles/Route.css";

const Route = ({route, patchRoutes}) => {

    const [expandButtonStatus, setExpandButtonStatus] = useState(false)

    const[routeStatus, setRouteStatus] = useState(route.status);

    const handleClick = (e) => {
        e.preventDefault();
        let newRoute = {
            id: route.id,
            deliveries: route.deliveries,
            status: routeStatus,
            truck: route.truck
        }
        patchRoutes(newRoute);
        alert("Route status successfully updated!")
    }

    const handleExpandStatus = () => {
        setExpandButtonStatus((expandButtonStatus) => !expandButtonStatus);
    }

    const toggleButtonLable = () => {
        return expandButtonStatus ? "Less" : "More";
    }

    const handleDisplayButton = () => {
        
    }

    return ( 
        <>
        <main>
        <section className="route-container">
            <h3>Route {route.id}</h3>
           
            <article id="statusContainer">
                <p>Status: </p>
                <select 
                    className="updateStatusDropdown"
                    defaultValue={route.status}
                    onChange={(e) => {setRouteStatus(e.target.value)}}
                    >
                    <option value="PENDING">Pending</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="COMPLETED">Completed</option>
                </select>
                <button className="update-status-button" onClick={handleClick}>Update Status</button>
            </article>
                <p id="truck">Truck: {route.truck.name}</p>
            <button className="dark-button" onClick={handleExpandStatus}>{toggleButtonLable()}</button>
            <button className="dark-button" onClick={handleDisplayButton}>Display route</button>
            {expandButtonStatus && <>
                    <div className="delivery-list">
                        <DeliveryList deliveries = {route.deliveries} />
                    </div> </> }
        </section>
        </main>
        </>
     );
}
 
export default Route;
