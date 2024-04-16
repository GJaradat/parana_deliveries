import React,{ useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "../styles/RouteMapStyles.css";

const RouteMap = ( {} ) => {
    
    const mapContainerRef = useRef(null);
    const map = useRef(null);
    // Starting lattitude and longitude states (aka the 'warehouse' location)
    const [lat,setLat] = useState(51.501476);
    const [lng,setLng] = useState(-0.140634);
    const [zoom, setZoom] = useState(12);
    const [optRoutes, setOptRoutes] = useState([]);

    const [routes, setRoutes] = useState(null);

    mapboxgl.accessToken = `${process.env.REACT_APP_MAPBOX_KEY}`;


    useEffect(() => {
       
        if (routes === null){
        generateRoutes();
        }

        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [lng, lat],
          zoom: zoom
        });
        getRoutes();
        }, []);
        
    useEffect(() => {
        if (routes !== null){
        
        routes.forEach(route => {
                // Create a HTML element for each marker
                route.deliveries.forEach(delivery => {
                    const el = document.createElement('div');
                    el.className = 'marker'; 
                    let coord = [delivery.location.longitude,delivery.location.latitude]
                    // Make a popup to attach to marker
                    const popup = new mapboxgl.Popup().setHTML(  
                        `<h3>Delivery #${delivery.location.id}</h3>
                        <p>${delivery.location.address}</p>` 
                       );  

                    // Make a marker for each coordinate and add to the map
                    new mapboxgl.Marker(el).setLngLat(coord).addTo(map.current).setPopup(popup);
                })
            
            });
        }
    },[routes])

    const generateRoutes = async () => {
        const response = await fetch("http://localhost:8080/routes/generateRoutes");
        const jsonData = await response.json();
    }

    const getRoutes = async () => {
        const response = await fetch("http://localhost:8080/routes");
        const jsonData = await response.json();
        setRoutes(jsonData);
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
    
    const randomHexColorCode = () => {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        return '#' + n.slice(0, 6);
      };

    const displayRoutes = (optRoute, index) => {
       
        const tripLine = optRoute.trips[0].geometry;

        map.current.addSource(`route${index}`, {
            'type':'geojson',
            'data':tripLine
        });

        map.current.addLayer({
            'id': `route-line${index}`,
            'type': 'line',
            'source': `route${index}`,
            'paint': {
              'line-color': `${randomHexColorCode()}`,
              'line-width': 4
            }
          });

    }

    const calculateRoutes = async () => {
        // Optimise each route
        const routeRequests = routes.map( async ( route ) => {
            const coordinate = generateCoordinates(route);
            console.log(coordinate);
            const currentOptRoute = await fetch (`https://api.mapbox.com/optimized-trips/v1/mapbox/driving/${coordinate}?access_token=${mapboxgl.accessToken}&geometries=geojson`);
            return await currentOptRoute.json();
        })
        const currentOptRoutes = await Promise.all(routeRequests);
        setOptRoutes(currentOptRoutes);
    
    }
        
    useEffect(() => {
        if(optRoutes){
            optRoutes.map( (optRoute, index) => {
                displayRoutes(optRoute, index);
            })
        }
    }, [optRoutes]);
    

    return ( 
        <>
            <div>
                <div ref={mapContainerRef} className="map-container" />
            </div>
            <button onClick={calculateRoutes}>make routes</button>
        </>
     );
}
 
export default RouteMap;