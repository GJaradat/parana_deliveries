import { useEffect, useState } from 'react';
import TruckList from '../components/TruckList'

const FleetContainer = () => {
    
    const [trucks, setTrucks] = useState([]);

    const loadTrucks = async () => {
        const response = await fetch("http://localhost:8080/trucks");
        const jsonData = await response.json();
        setTrucks(jsonData);
    }


    useEffect(() => {
        loadTrucks();        
    }, []);
    
    console.log(trucks);
    
    return ( 
        <>
            <p>Hello from Fleet Container</p>
            <TruckList trucks={trucks} />
        </>
     );
}
 
export default FleetContainer;