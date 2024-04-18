import { useEffect, useState } from 'react';
import RouteList from '../components/RouteList'
import RouteMap from '../components/RouteMap';
import RouteSort from '../components/RouteSort';
import RouteSearch from '../components/RouteSearch';
import mapboxgl from 'mapbox-gl';

import "../styles/RoutesContainerStyles.css"

const RoutesContainer = () => {
    const [sortValue, setSortValue] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [routes, setRoutes] = useState([]);
    const [optRoutes, setOptRoutes] = useState([]);
    const [displayedRoutes, setDisplayedRoutes] = useState([]);

    const [routesLoaded, setRoutesLoaded] = useState(false);
    const [routesVisible, setRoutesVisible] = useState(false);

    mapboxgl.accessToken = `${process.env.REACT_APP_MAPBOX_KEY}`;

    const loadRoutes = async () => {
        const response = await fetch("http://localhost:8080/routes");
        const jsonData = await response.json();
        setRoutes(jsonData);
        setRoutesLoaded(true);
    }

    useEffect(()=> {
        loadRoutes();
    }, []);

    useEffect(()=> {
        if (routesLoaded){
            calculateRoutes();
        }
    }, [routesLoaded]);

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

    const generateCoordinates = (route) => {
        
        const coordinatesArray = ["-0.140634,51.501476"];  // first coordinates are always warehouse

        route.deliveries.forEach((delivery) => {
            const lng = delivery.location.longitude;
            const lat = delivery.location.latitude;
            coordinatesArray.push(lng+","+lat);
        })
        return coordinatesArray.join(";");
    }

    const calculateRoutes = async () => {
        // Optimise each route
        const routeRequests = routes.map( async ( route ) => {
            const coordinate = generateCoordinates(route);
            
            const currentOptRoute = await fetch (`https://api.mapbox.com/optimized-trips/v1/mapbox/driving/${coordinate}?access_token=${mapboxgl.accessToken}&geometries=geojson`);
            return await currentOptRoute.json();
        })
        const currentOptRoutes = await Promise.all(routeRequests);
        setOptRoutes(currentOptRoutes);
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

    const handleDisplayAll = () => {

        const displayAll = filteredRoutes.map( ( route ) => {
            if (routesVisible) {
                setDisplayedRoutes(displayedRoutes => displayedRoutes.filter(id => id !== route.id));
            } else {
                setDisplayedRoutes(displayedRoutes => [...displayedRoutes, route.id]);
            }
        })
        const finished = Promise.all(displayAll)
        setRoutesVisible(!routesVisible);

    }
    
    return ( 

        <section className='main'>
            <section className='RoutesContainer'>
                    <h2 className='page_title'>Delivery Routes</h2>
                        <div>
                        <RouteSearch setSearchValue={setSearchValue}/>
                        <RouteSort setSortValue={setSortValue}/>
                        </div>
                        
                <div id='Routes-content'>
                    <RouteList routes={filteredRoutes} patchRoutes={patchRoutes} displayedRoutes={displayedRoutes} setDisplayedRoutes={setDisplayedRoutes}/>
                    <RouteMap routes={filteredRoutes} deliveries={null} optRoutes={optRoutes} displayedRoutes={displayedRoutes} setDisplayedRoutes={setDisplayedRoutes}/>
                </div>
            </section>
        </section>
     );
}
 
export default RoutesContainer;