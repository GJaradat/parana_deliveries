import Delivery from "./Delivery";

const DeliveryList = ({ deliveries }) => {

    const mappedDeliveries = deliveries.map( delivery => {
        return <Delivery key={delivery.id} delivery={delivery}/>
    })

    return ( 
        <>
            <h4>Deliveries:</h4>
            {mappedDeliveries}
        </>
    );
}
 
export default DeliveryList;