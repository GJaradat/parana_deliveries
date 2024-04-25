import { useState } from "react";
import "../styles/AddTruckFormStyles.css"

const AddTruckForm = ({postTruck}) => {
    const[truckName, setTruckName] = useState("");
    const[capacity, setCapacity] = useState(0);
    const[URL,setURL] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
   
        let newTruck = {
            name : truckName,
            imageURL: URL,
            capacity: capacity 
        }
        postTruck(newTruck);
        setTruckName(0);
        setCapacity("");
        setURL("");
    }



    return ( 
        <section id="addTruckContainer">
        <h3 id="addtruckTitle">Add New Animal (Truck):</h3>
            <form id="truck-form" onSubmit={handleSubmit}>
                <label htmlFor="newTruckName"> New Truck Name: </label>
                <input id="newTruckName"type="text" required value={truckName} onChange={(e)=>{setTruckName(e.target.value)}} />

                <label htmlFor="newTruckImage"> Image URL (optional): </label>
                <input id="newTruckImage"type="text" value={URL}  onChange={(e)=>{setURL(e.target.value)}} />

                <label htmlFor="newTruckCapacity"> Capacity: </label>
                <input id="newTruckCapacity"type="number" min={0}  value={capacity} required onChange={(e)=>{setCapacity(e.target.value)}} />
                <input className="dark-button"type="submit" />

            </form>
        </section>
     );
}
 
export default AddTruckForm;