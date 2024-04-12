import Truck from './Truck'

const TruckList = ( { trucks } ) => {
   
   const mappedTrucks = trucks.map((truck) => {
    return <Truck truck={truck} key={truck.id} />
   })
   
    return ( 
        <>
            {mappedTrucks}   
        </>
     );
}
 
export default TruckList;