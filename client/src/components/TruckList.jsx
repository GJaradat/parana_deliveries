import Truck from './Truck'

const TruckList = ( { trucks } ) => {
   
   const mappedTrucks = trucks.map((truck) => {
    return <Truck truck={truck} key={truck.id} />
   })
   
    return ( 
        <>
            <section className='trucklist'>{mappedTrucks}</section>
        </>
     );
}
 
export default TruckList;