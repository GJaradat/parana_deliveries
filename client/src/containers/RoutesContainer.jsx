import { useEffect, useState } from 'react';
import RouteList from '../components/RouteList'
import RouteMap from '../components/RouteMap';

const RoutesContainer = () => {
    
    const [routes, setRoutes] = useState([]);

    const loadRoutes = async () => {
        const response = await fetch("http://localhost:8080/routes");
        const jsonData = await response.json();
        setRoutes(jsonData);
    }

    useEffect(()=> {
        loadRoutes();
    }, []);
    
    return ( 
        <>
            <h2>Delivery Routes</h2>
            <RouteList routes={routes} />
            <RouteMap />
        </>
     );
}
 
export default RoutesContainer;