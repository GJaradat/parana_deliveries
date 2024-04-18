const RouteSort = ({setSortValue}) => {
    return ( 
        <>
        <section className="sort">
                <select className="sort_text" defaultValue={"select-route-state"} onChange={(e)=>{setSortValue(e.target.value)}}>
                    <option disabled value={"select-route-state"}> Sort By Route Status</option>
                    <option value={""}> All</option>
                    <option value={"IN_PROGRESS"}>In Progress</option>
                    <option value={"COMPLETED"}>Completed</option>
                </select>
            </section>
        </>
     );
}
 
export default RouteSort;