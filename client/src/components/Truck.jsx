import { useState } from 'react';
import '../styles/TruckStyle.css';
import ReactModal from 'react-modal';
const Truck = ({ truck, patchTrucks }) => {

    const[availabilityState, setAvailabilityState] = useState(truck.availability);
    const [modalIsOpen, setIsOpen] = useState(false);

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
            toggleModal();
            return null;
        }

        patchTrucks(newTruck);
        alert("Truck availability cannot be updated: deliveries still in progress")
        
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

    const toggleModal = () => {
        setIsOpen(!modalIsOpen)
    }

    
    return ( 
        <>
            <section className='truck'>
                <h3>{truck.name} Truck</h3>
                <img id="truckImage" src={truck.imageURL} alt="truck picture"/> 
                <p>Capacity: {truck.capacity} kg</p>

                <article id='availabilityContainer'>
                    <p>Availability: </p>

                    <select name="editAvailabilityDropdown" 
                    className="updateStatusDropdown" 
                    defaultValue={truck.availability} 
                    onChange={(e) => setAvailabilityState(e.target.value)}
                    >
                        <option value="IN_DEPOT"> In Depot</option>
                        <option value="OUT_FOR_DELIVERY">Out For Delivery</option>
                        <option value="UNDER_MAINTENANCE"> Under Maintenance</option>
                    </select>
                    <button id="availabilityButton" onClick={handleClick}>Update</button>
                </article>
              
            </section>

            <ReactModal 
                    portalClassName="modal"
                    isOpen={modalIsOpen}
                    onRequestClose={toggleModal}
                    contentLabel="Update Status Message"
                    style={
                        {content: {
                            height: "10%",
                            width: "20%",
                            margin: "auto"
                        }}
                    }
                >
                    <div className="update-message">
                        <h4>Truck availability successfully updated!</h4>
                    </div>
                </ReactModal>

                
        </>
     );
}
 
export default Truck;