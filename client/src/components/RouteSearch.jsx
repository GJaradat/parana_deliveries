const RouteSearch = ({setSearchValue}) => {
    
    return ( 
        <>
            <input 
                type="text"
                placeholder="Search by Truck Name"
                onChange={(e)=>{setSearchValue(e.target.value)}}
            />
        </>
     );
}
 
export default RouteSearch;