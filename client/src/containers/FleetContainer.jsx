import { useEffect, useState } from 'react';
import TruckList from '../components/TruckList'
import TruckSearch from '../components/TruckSearch';

const FleetContainer = () => {
    
    const [trucks, setTrucks] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    const loadTrucks = async () => {
        const response = await fetch("http://localhost:8080/trucks");
        const jsonData = await response.json();
        setTrucks(jsonData);
    }


    useEffect(() => {
        loadTrucks();        
    }, []);
    
    const filteredTrucks = trucks.filter((truck)=> {
        if(searchValue){
            return truck.name.toLowerCase().includes(searchValue.toLowerCase());
        }
        return truck;
    })
    
    return ( 
        <>
            <h2>Delivery Fleet</h2>
            <TruckSearch setSearchValue={setSearchValue} />
            <TruckList trucks={filteredTrucks}  />
        </>
     );
}
 
export default FleetContainer;