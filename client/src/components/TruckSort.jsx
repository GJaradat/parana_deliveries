const TruckSort = ( {setSortValue} ) => {
    

    return ( 
        <>

            <select className="sort"
                    
                    defaultValue="select-availability-status"
                    onChange={(event) => setSortValue(event.target.value)}>
                <option disabled value={"select-availability-status"}>Sort by Availability</option>
                <option value={""}>All</option>
                <option value={"IN_DEPOT"}>In Depot</option>
                <option value={"OUT_FOR_DELIVERY"}>Out For Delivery</option>
                <option value={"UNDER_MAINTENACE"}>Under Maintenance</option>
            </select>
        </>
     );
}
 
export default TruckSort;