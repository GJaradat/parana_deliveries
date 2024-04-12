const Delivery = ( { delivery } ) => {
    return ( 
        <>
            <p>Location: {delivery.location.address}</p>
            <p>Delivery Status: {delivery.isDelivered ? "Delivered" : "Not delivered"}</p>
        </>
     );
}
 
export default Delivery;