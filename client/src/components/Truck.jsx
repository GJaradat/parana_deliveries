import { useState } from 'react';
import '../styles/TruckStyle.css';
const Truck = ({ truck, patchTrucks }) => {

    const[availabilityState, setAvailabilityState] = useState(truck.availability);

    
    const availabilityStatus = () => {
        if(truck.availability === "IN_DEPOT"){
            return "In Depot"
        }

        if(truck.availability === "OUT_FOR_DELIVERY"){
            return "Out For Delivery"
        }

        if(truck.availability === "UNDER_MAINTENANCE"){
            return "Under Maintenance"
        }
    }

    const handleChange = async(e) =>{
        await setAvailabilityState(e.target.value);
        e.preventDefault();
        let newTruck = {
            id: truck.id,
            name: truck.name,
            availability: availabilityState,
            capacity: truck.capacity,
            routes: truck.routes
        };
        patchTrucks(newTruck);
    }

    
    return ( 
        <>
            <article className='truck'>
                <h3>Truck: {truck.name}</h3>
                <p>Capacity: {truck.capacity}</p>
                <article id='availabilityContainer'>
                    <p>Availability: </p>

                    <select name="editAvailabilityDropdown" 
                    className="updateStatusDropdown" 
                    defaultValue={truck.availability} 
                    onChange={handleChange}>
                        <option value="IN_DEPOT"> In Depot</option>
                        <option value="OUT_FOR_DELIVERY">Out For Delivery</option>
                        <option value="UNDER_MAINTENANCE"> Under Maintenance</option>
                    </select>
                </article>
              
                </article>

        </>
     );
}
 
export default Truck;