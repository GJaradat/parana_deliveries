import { useEffect, useState } from 'react';
import TruckList from '../components/TruckList'
import TruckSearch from '../components/TruckSearch';
import TruckSort from '../components/TruckSort';
import AddTruckForm from '../components/AddTruckForm';

const FleetContainer = () => {

    // UseStates
    const [trucks, setTrucks] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [sortValue, setSortValue] = useState("");

   // Fetch Requests
    const loadTrucks = async () => {
        const response = await fetch("http://localhost:8080/trucks");
        const jsonData = await response.json();
        setTrucks(jsonData);
    }

    const patchTrucks = async (truck) => {
        await fetch(`http://localhost:8080/trucks/${truck.id}/status`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(truck.availability)
        });
        await loadTrucks();
        console.log(truck.availability);
    }


    const postTruck = async (truck) => {
        const response = await fetch("http://localhost:8080/trucks", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(truck)
        });
        const savedTruck = await response.json();
        setTrucks([...trucks, savedTruck]);
    }

   
    // UseEffects
    useEffect(() => {
        loadTrucks();        
    }, []);
    
    //Other Functions

    const filteredTrucks = trucks.filter((truck)=> {
        // accounts for someone filtering by truck name AND availability status
        if(sortValue && searchValue){
            return (truck.name.toLowerCase().includes(searchValue.toLowerCase()) && truck.availability.toLowerCase().includes(sortValue.toLowerCase()));
        }
        //only sorting by availability
        if(searchValue){
            return truck.name.toLowerCase().includes(searchValue.toLowerCase());
        }
        //only sorting by truck name
        if(sortValue){
            return truck.availability.toLowerCase().includes(sortValue.toLowerCase());
        }
        return truck;
    })

    
    return ( 
        <section className='main'>
            <h2 className='page_title'>Delivery Fleet</h2>
            <section className='filteringForms'>
                <TruckSearch setSearchValue={setSearchValue} />
                <TruckSort setSortValue={setSortValue} />
            </section>
            <AddTruckForm trucks={filteredTrucks} setTrucks={setTrucks} postTruck={postTruck}/>
            <TruckList trucks={filteredTrucks} patchTrucks={patchTrucks}  />
        </section>
     );
}
 
export default FleetContainer;