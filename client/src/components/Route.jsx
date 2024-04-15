import { useState } from "react";
import DeliveryList from "./DeliveryList";

const Route = ({route, patchRoutes}) => {

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

    return ( 
        <>
            <h3>Route {route.id}</h3>
        <article id="statusContainer">
            <p>Status: </p>
            <select 
                className="updateStatusDropdown"
<<<<<<< HEAD
                defaultValue={route.routeStatus}
=======
                defaultValue={routeStatus}
>>>>>>> 45ed92cc99343f2bda121946b8200cf1cf090ce0
                onChange={(e) => {setRouteStatus(e.target.value)}}
                >
                <option value="PENDING">Pending</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="COMPLETED">Completed</option>
            </select>
            <button onClick={handleClick}>Update Status</button>
         </article>
            <p>Truck: {route.truck.name}</p>
                <div>
                    <DeliveryList deliveries = {route.deliveries} />
                </div>  
        </>
     );
}
 
export default Route;