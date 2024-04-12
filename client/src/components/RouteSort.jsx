const RouteSort = ({setSortValue}) => {
    return ( 
        <>
        <select className="RouteSort" defaultValue={"select-route-state"} onChange={(e)=>{setSortValue(e.target.value)}}>
            <option disabled value={"select-route-state"}> Sort By Route Status</option>
            <option value={""}> All</option>
            <option value={"PENDING"} > Pending</option>
            <option value={"IN_PROGRESS"}>In Progress</option>
            <option value={"COMPLETED"}>Completed</option>
        </select>
        </>
     );
}
 
export default RouteSort;