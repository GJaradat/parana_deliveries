import React,{ createElement, useEffect, useRef, useState } from "react";
import mapboxgl, {Marker} from "mapbox-gl";
import "../styles/RouteMapStyles.css";

const RouteMap = ( { routes, deliveries } ) => {
    
    const mapContainerRef = useRef(null);
    const map = useRef(null);
    // Starting lattitude and longitude states (aka the 'warehouse' location)
    const [lat,setLat] = useState(51.501476);
    const [lng,setLng] = useState(-0.140634);
    const [zoom, setZoom] = useState(12);
    const [optRoutes, setOptRoutes] = useState([]);

    // const [routes, setRoutes] = useState(null);

    mapboxgl.accessToken = `${process.env.REACT_APP_MAPBOX_KEY}`;


    useEffect(() => {

        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [lng, lat],
          zoom: zoom
        });
        }, []);
        
    useEffect(() => {
        if (routes !== null){
            routes.forEach((route)=> {
                displayMarkers(route.deliveries);
            })
        }
    },[routes])

    useEffect(() => {
        if (deliveries !== null){
            displayMarkers(deliveries);
        }
    },[deliveries])

    useEffect(() => {
        if(optRoutes){
            optRoutes.map( (optRoute, index) => {
                displayRoutes(optRoute, index);
            })
        }
    }, [optRoutes]);

    const generateCoordinates = (route) => {
        
        const coordinatesArray = ["-0.140634,51.501476"];  // first coordinates are always warehouse

        route.deliveries.forEach((delivery) => {
            const lng = delivery.location.longitude;
            const lat = delivery.location.latitude;
            coordinatesArray.push(lng+","+lat);
        })
        return coordinatesArray.join(";");
    }

    const routeColours = ["#009e73", "#F0BA19", "#0071b2", "#e69d00", "#d55c00", "#f079a7", "#000000"]

    const chooseColour = (index) => {
        const colourIndex = index % routeColours.length;
        return routeColours[colourIndex];
    }

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
              'line-color': `${chooseColour(index)}`,
              'line-width': 4
            }
          });

    }

    const displayMarkers = (deliveries) => {
        // Create a HTML element for each marker
        deliveries.forEach(delivery => {
            const el = createElement('div', {className: 'marker'});
            let coord = [delivery.location.longitude,delivery.location.latitude]

            // Find which route has the delivery - to display on pop-up
            let thisRouteId;
            if (typeof(delivery.route) === "undefined"){
                thisRouteId = routes.find((route) => route.deliveries.includes(delivery)).id;
            } else{
                thisRouteId = delivery.route.id;
            }

            // Make a popup to attach to marker
            const popup = new mapboxgl.Popup().setHTML(  
                `<h3>Delivery #${delivery.location.id}</h3>
                <h4>${delivery.location.address}</h4>
                <p>${delivery.isDelivered ? 'Delivered' : `Out for delivery on Route ${thisRouteId}`}</p>` 
               );  

            // Make a marker for each coordinate and add to the map
            new mapboxgl.Marker(el).setLngLat(coord).addTo(map.current).setPopup(popup);
        })
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

    return ( 
        <>
            <div>
                <div ref={mapContainerRef} className="map-container" />
            </div>
            {routes && routes.length > 0 && <button onClick={calculateRoutes}>make routes</button>}
        </>
     );
}
 
export default RouteMap;