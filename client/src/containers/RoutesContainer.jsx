import { useEffect, useState } from 'react';
import RouteList from '../components/RouteList'
import RouteMap from '../components/RouteMap';
import RouteSort from '../components/RouteSort';
import RouteSearch from '../components/RouteSearch';

import "../styles/RoutesContainerStyles.css"

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
            body: JSON.stringify(route.status)
        });
        await loadRoutes();
        console.log(route.status);
    }


    const filteredRoutes = routes.filter((route)=>{
        // accounts for someone filtering by route status AND truck name
        if(sortValue && searchValue){
            return (route.truck.name.toLowerCase().includes(searchValue.toLowerCase()) && route.status.toLowerCase().includes(sortValue.toLowerCase()));
        }
        //only sorting by status
        if(sortValue){
            return route.status.toLowerCase().includes(sortValue.toLowerCase());
        }
        //only sorting by associated truck's name
        if(searchValue){
            return route.truck.name.toLowerCase().includes(searchValue.toLowerCase());
        }
        return route;
    })
    
    return ( 
        <section className='RoutesContainer'>
                <h2 className='page_title'>Delivery Routes</h2>
                    <div>
                    <RouteSearch setSearchValue={setSearchValue}/>
                    <RouteSort setSortValue={setSortValue}/>
                    </div>
                    
            <div id='Routes-content'>
                <RouteList routes={filteredRoutes} patchRoutes={patchRoutes} />
                <RouteMap routes={filteredRoutes} deliveries={null}/>
            </div>
        </section>
     );
}
 
export default RoutesContainer;