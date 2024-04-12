const Delivery = ( { delivery } ) => {
    return ( 
        <>
            <p>Delivery ID: {delivery.id}</p>
            <p>Location: {delivery.location.address}</p>
            <p>Delivery Status: {delivery.isDelivered ? "Delivered" : "Not delivered"}</p>
        </>
     );
}
 
export default Delivery;