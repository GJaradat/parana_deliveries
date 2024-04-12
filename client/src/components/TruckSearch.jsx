const TruckSearch = ( {setSearchValue} ) => {
    return ( 
        <>
            <form >
                <input 
                    className="truck_search"
                    type="text"
                    placeholder="Search Truck Name..."
                    onChange={(event)=>{setSearchValue(event.target.value)}}
                />
            </form>
        </>
     );
}
 
export default TruckSearch;