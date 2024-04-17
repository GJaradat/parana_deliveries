const Delivery = ( { delivery } ) => {
    return ( 
        <>
        <div id="delivery">
            <p id="delivery-id">Delivery ID: {delivery.id}</p>
            <p>Location: {delivery.location.address}</p>
            <p>Delivery Status: {delivery.delivered ? "Delivered" : "Not delivered"}</p>
        </div>
        </>
     );
}
 
export default Delivery;