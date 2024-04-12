import { useEffect, useState } from 'react';
import TruckList from '../components/TruckList'
import TruckSearch from '../components/TruckSearch';
import TruckSort from '../components/TruckSort';

const FleetContainer = () => {
    
    const [trucks, setTrucks] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [sortValue, setSortValue] = useState("");

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
        if(sortValue){
            return truck.availability.toLowerCase().includes(sortValue.toLowerCase());
        }
        return truck;
    })

    
    return ( 
        <>
            <h2>Delivery Fleet</h2>
            <TruckSearch setSearchValue={setSearchValue} />
            <TruckSort setSortValue={setSortValue} />
            <TruckList trucks={filteredTrucks}  />
        </>
     );
}
 
export default FleetContainer;