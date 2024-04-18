import { useState } from 'react';
import '../styles/TruckStyle.css';
const Truck = ({ truck, patchTrucks }) => {

    const[availabilityState, setAvailabilityState] = useState(truck.availability);

    const handleClick = (e) =>{
        e.preventDefault();
        let newTruck = {
            id: truck.id,
            name: truck.name,
            availability: availabilityState,
            capacity: truck.capacity,
            routes: truck.routes
        };

        if(availabilityState !== "OUT_FOR_DELIVERY" && !allRoutesComplete()){
            alert("Truck availability cannot be updated: deliveries still in progress");
            return null;
        }

        patchTrucks(newTruck);
        alert("Truck availability successfully updated!")
    }

    const allRoutesComplete = () => {
        let value = true;
        truck.routes.forEach(route => {
            if(route.status !== "COMPLETED"){
                value = false;
            }
        });
        return value;
    }

    const handleAudioClick = () => {
        let audio = new Audio();
        audio.src= "Rainforest.mp3";
        audio.play();
    }

    return ( 
        <>
            <article className='truck'>
                <h3>{truck.name} Truck</h3>
                <img id="truckImage" src={truck.imageURL} alt="truck picture"/> 
                <p>Capacity: {truck.capacity} kg</p>

                <article id='availabilityContainer'>
                    <p>Availability: </p>

                    <select name="editAvailabilityDropdown" 
                    className="updateStatusDropdown" 
                    defaultValue={truck.availability} 
                    onChange={(e)=>{setAvailabilityState(e.target.value)}}
                    >
                        <option value="IN_DEPOT"> In Depot</option>
                        <option value="OUT_FOR_DELIVERY">Out For Delivery</option>
                        <option value="UNDER_MAINTENANCE"> Under Maintenance</option>
                    </select>
                    <button id="availabilityButton" onClick={handleClick}>Update</button>
                </article>
                <button id="sound-button" onClick={handleAudioClick}>Play</button>
              
            </article>

        </>
     );
}
 
export default Truck;