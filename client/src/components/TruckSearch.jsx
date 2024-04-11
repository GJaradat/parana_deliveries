const TruckSearch = ( {setSearchValue} ) => {
    return ( 
        <>
            <form>
                <input 
                    type="text"
                    placeholder="Search Truck Name..."
                    onChange={(event)=>{setSearchValue(event.target.value)}}
                />
            </form>
        </>
     );
}
 
export default TruckSearch;