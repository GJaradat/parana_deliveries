const Truck = ({ truck }) => {
    
    
    const availabilityStatus = () => {
        if(truck.availability === "IN_DEPOT"){
            return "In Depot"
        }

        if(truck.availability === "OUT_FOR_DELIVERY"){
            return "Out For Delivery"
        }

        if(truck.availability === "UNDER_MAINTENANCE"){
            return "Under Maintenance"
        }
    }
    
    return ( 
        <>
            <h3>Truck: {truck.name}</h3>
            <p>Capacity: {truck.capacity}</p>
            <p>Availability: {availabilityStatus()}</p>
        </>
     );
}
 
export default Truck;