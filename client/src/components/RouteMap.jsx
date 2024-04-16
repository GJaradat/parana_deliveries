import React,{ createElement, useEffect, useRef, useState } from "react";
import mapboxgl, { Marker } from "mapbox-gl";
import "../styles/RouteMapStyles.css";

const RouteMap = ( {} ) => {
    
    const mapContainerRef = useRef(null);
    const map = useRef(null);
    // Starting lattitude and longitude states (aka the 'warehouse' location)
    const [lat,setLat] = useState(51.501476);
    const [lng,setLng] = useState(-0.140634);
    const [zoom, setZoom] = useState(12);
    const [route, setRoute] = useState(null);
    const [optRoute, setOptRoute] = useState(null);

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
        console.log(routes);
        getRoute();
        routes.forEach(route => {
                // Create a HTML element for each marker
                route.deliveries.forEach(delivery => {
                    console.log(delivery.location)
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


    const getRoute = async () => {
        const response = await fetch("http://localhost:8080/routes/3");
        const jsonData = await response.json();
        setRoute(jsonData);
    }

    // const getRoutes = async () => {
    //     const response = await fetch("http://localhost:8080/routes");
    //     const jsonData = await response.json();
    //     setRoutes(jsonData);
    // }

    const generateRoutes = async () => {
        const response = await fetch("http://localhost:8080/routes/generateRoutes");
        const jsonData = await response.json();
    }

    const getRoutes = async () => {
        const response = await fetch("http://localhost:8080/routes");
        const jsonData = await response.json();
        setRoutes(jsonData);
    }

    const generateCoordinates = () => {
        
        const coordinatesArray = ["-0.140634,51.501476"];  // first coordinates are always warehouse

        route.deliveries.forEach((delivery) => {
            const lng = delivery.location.longitude;
            const lat = delivery.location.latitude;
            coordinatesArray.push(lng+","+lat);
        })
        return coordinatesArray.join(";");
    }

    const getRoutesFromAPI = async (coordinates) => {
        const response = await fetch (`https://api.mapbox.com/optimized-trips/v1/mapbox/driving/${coordinates}?access_token=${mapboxgl.accessToken}&geometries=geojson`);
        const jsonData = await response.json();
        setOptRoute(jsonData);
    }

    
    const displayRoutes = () => {
       
        const tripLine = optRoute.trips[0].geometry;

        map.current.addSource('route', {
            'type':'geojson',
            'data':tripLine
        });

        map.current.addLayer({
            'id': 'route-line',
            'type': 'line',
            'source': 'route',
            'paint': {
              'line-color': '#2D304E',
              'line-width': 4
            }
          });

    }

    const displayMarkers = () => {
       
        const element = createElement('div', {className: 'marker'});
        const coordinate = generateCoordinates();
        console.log(coordinate);
        new mapboxgl.Marker(element).setLngLat(coordinate).addTo(map.current);
        
    }


    const calculateRoutes = () => {
        // Need A semicolon-separated list of {longitude},{latitude} coordinates.
        const coordinates = generateCoordinates();
        
        //Make GET request to Optimization API 
       getRoutesFromAPI(coordinates); 
    }

    
        
    useEffect(() => {
        if(optRoute){
            displayRoutes();
            displayMarkers();
           
        }
    }, [optRoute]);
    

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