const TruckSort = ( {setSortValue} ) => {
    

    return ( 
        <>
        <section className="sort">
            <select 
                    className="sort_text"
                    defaultValue="select-availability-status"
                    onChange={(event) => setSortValue(event.target.value)}>
                <option disabled value={"select-availability-status"}>Sort by Availability</option>
                <option value={""}>All</option>
                <option value={"IN_DEPOT"}>In Depot</option>
                <option value={"OUT_FOR_DELIVERY"}>Out For Delivery</option>
                <option value={"UNDER_MAINTENANCE"}>Under Maintenance</option>
            </select>
        </section>
        </>
     );
}
 
export default TruckSort;