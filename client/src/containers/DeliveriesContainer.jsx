import { useEffect, useState } from 'react';
import DeliveryList from '../components/DeliveryList'
import RouteMap from "../components/RouteMap"

const DeliveriesContainer = () => {

    const [deliveries, setDeliveries] = useState([]);

    const loadDeliveries = async () => {
        const response = await fetch("http://localhost:8080/deliveries");
        const jsonData = await response.json();
        setDeliveries(jsonData);
    }

    useEffect(() => {
        loadDeliveries();
    }, [])

    return ( 
        <>
            <p>Hello from Deliveries Container</p>
            <DeliveryList deliveries={deliveries} />
            <RouteMap routes={null} deliveries={deliveries}/>
        </> 
    );
}
 
export default DeliveriesContainer;