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
            alert("Truck availability cannot be updated: deliveries still in progress")
            return null;
        }
        
        patchTrucks(newTruck);
        toggleModal();
        
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
        audio.src= `${truck.name}.mp3`;

        if(truck.id >7){
            return alert('Animal sound coming soon!')
        }
        audio.play();
    }


    const toggleModal = () => {
        setIsOpen(!modalIsOpen)
    }

    const modalStyle = {content: {
        height: "10%",
        width: "20%",
        margin: "auto",
        textAlign: "center",
        color:"#11464A",
        backgroundColor: "white"
    },
    overlay: {
        backgroundColor: 'rgba(64,46,83, 0.65)'
    }}
    
    return ( 
        <>
            <section className='truck'>
                <h3>{truck.name} Truck</h3>
                <button id="sound-button" onClick={handleAudioClick}>
                    <img id="truckImage" src={truck.imageURL} alt="truck picture"/>
                </button> 
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

            <ReactModal 
                    portalClassName="modal"
                    isOpen={modalIsOpen}
                    onRequestClose={toggleModal}
                    contentLabel="Update Status Message"
                    ariaHideApp={false}
                    style={modalStyle}
                >
                    <div id="update-message">
                        <h3>Truck availability successfully updated!</h3>
                    </div>
                </ReactModal>
            </section>
        </>
     );
}
 
export default Truck;