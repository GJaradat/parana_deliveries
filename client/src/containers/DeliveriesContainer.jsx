import { useEffect, useState } from 'react';
import RouteMap from "../components/RouteMap";


const DeliveriesContainer = () => {

    const [deliveries, setDeliveries] = useState([]);

    const loadDeliveries = async () => {
        const response = await fetch("http://localhost:8080/deliveries");
        const jsonData = await response.json();
        setDeliveries(jsonData);
    }

    const postDelivery = async (deliveryDTO) => {
        const response = await fetch("http://localhost:8080/deliveries",{
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(deliveryDTO)
        });
        const savedDelivery = await response.json()
        setDeliveries([...deliveries,savedDelivery])
    }
    useEffect(() => {
        loadDeliveries();
    }, [])

    return ( 
        <>
            <RouteMap routes={null} deliveries={deliveries} postDelivery={postDelivery} />
        </> 
    );
}
 
export default DeliveriesContainer;