import { useEffect, useState } from 'react';
import DeliveryList from '../components/DeliveryList';
import RouteMap from "../components/RouteMap"
import "../styles/DeliveryStyles.css"


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

        <section className='main'>
            <h2 className='page_title'>Deliveries</h2>
            <section id="deliveries-map">
                <RouteMap routes={null} deliveries={deliveries}/>
            </section>
        </section>
    );
}
 
export default DeliveriesContainer;