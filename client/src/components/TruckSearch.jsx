const TruckSearch = ( {setSearchValue} ) => {
    return ( 
        <>
            <form >
                <input 
                    className="search"
                    type="text"
                    placeholder="Search Truck Name..."
                    onChange={(event)=>{setSearchValue(event.target.value)}}
                />
            </form>
        </>
     );
}
 
export default TruckSearch;