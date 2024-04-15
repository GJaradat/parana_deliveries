import { useEffect, useState } from 'react';
import RouteList from '../components/RouteList'
import RouteMap from '../components/RouteMap';
import RouteSort from '../components/RouteSort';
import RouteSearch from '../components/RouteSearch';

const RoutesContainer = () => {
    
    const [routes, setRoutes] = useState([]);
    const [sortValue, setSortValue] = useState("");
    const [searchValue, setSearchValue] = useState("");

    const loadRoutes = async () => {
        const response = await fetch("http://localhost:8080/routes");
        const jsonData = await response.json();
        setRoutes(jsonData);
    }

    useEffect(()=> {
        loadRoutes();
    }, []);

    const patchRoutes = async (route) => {
        await fetch(`http://localhost:8080/routes/${route.id}/status`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(route.routeStatus)
        });
        await loadRoutes();
    }


    const filteredRoutes = routes.filter((route)=>{
        if(sortValue){
            return route.routeStatus.toLowerCase().includes(sortValue.toLowerCase());
        }
        if(searchValue){
            return route.truck.name.toLowerCase().includes(searchValue.toLowerCase());
        }
        return route;
    })
    
    return ( 
        <>
            <h2>Delivery Routes</h2>
            <RouteSearch setSearchValue={setSearchValue}/>
            <RouteSort setSortValue={setSortValue}/>
            <RouteList routes={filteredRoutes} patchRoutes={patchRoutes} />
            <RouteMap />
        </>
     );
}
 
export default RoutesContainer;