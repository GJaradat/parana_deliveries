import Truck from './Truck'

const TruckList = ( { trucks, patchTrucks } ) => {
   
   const mappedTrucks = trucks.sort((a, b) => a.id - b.id).map((truck) => {
    return <Truck truck={truck} key={truck.id} patchTrucks={patchTrucks}/>
   })
   
    return ( 
        <>
            <section className='trucklist'>{mappedTrucks}</section>
        </>
     );
}
 
export default TruckList;