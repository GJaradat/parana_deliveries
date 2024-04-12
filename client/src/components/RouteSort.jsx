const RouteSort = () => {
    return ( 
        <>
        <p>Hi from route sort</p>
        <select className="RouteSort" defaultValue={"select-route-state"}>
            <option disabled value={"select-route-state"}> Sort By Route Status</option>
            <option value={"PENDING"} > Pending</option>
            <option value={"IN_PROGRESS"}>In Progress</option>
            <option value={"COMPLETED"}>Completed</option>
        </select>
        </>
     );
}
 
export default RouteSort;