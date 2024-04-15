import { useState } from 'react';
import '../styles/TruckStyle.css';
const Truck = ({ truck }) => {

    const[availability, setAvailability] = useState(truck.availability);

    
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
    
    return ( 
        <>
            <article className='truck'>
                <h3>Truck: {truck.name}</h3>
                <p>Capacity: {truck.capacity}</p>
                <p>Availability: {availabilityStatus()}</p>

                <select name="editAvailabilityDropdown" 
                id="editAvailabilityDropdown" 
                // defaultValue={truck.availability} 
                onChange={((e)=>setAvailability(e.target.value))}>
                    <option value="IN_DEPOT"> In Depot</option>
                    <option value="OUT_FOR_DELIVERY">Out For Delivery</option>
                    <option value="UNDER_MAINTENANCE"> Under Maintenance</option>
                </select>
              
                </article>

        </>
     );
}
 
export default Truck;