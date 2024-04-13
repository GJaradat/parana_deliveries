import React,{ useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "../styles/RouteMapStyles.css";
import payload from "../samplePayload.JSON";

const RouteMap = ( {} ) => {
    const mapContainerRef = useRef(null);
    const map = useRef(null);
    // Starting lattitude and longitude states (aka the 'warehouse' location)
    const [lat,setLat] = useState(51.501476);
    const [lng,setLng] = useState(-0.140634);
    const [zoom, setZoom] = useState(12);
    const [route, setRoute] = useState(null);
    const [optRoute, setOptRoute] = useState(null);

    mapboxgl.accessToken = `${process.env.REACT_APP_MAPBOX_KEY}`;

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [lng, lat],
          zoom: zoom
        });
        getRoute();
    }, []);

    const getRoute = async () => {
        const response = await fetch("http://localhost:8080/routes/1");
        const jsonData = await response.json();
        setRoute(jsonData);
    }

    const generateCoordinates = () => {
        
        
        const coordinatesArray = [-0.140634, 51.501476];  // first coordinates are always warehouse

        const routesCoordinates = route.deliveries.forEach((delivery) => {
            const lng = delivery.location.longitude;
            const lat = delivery.location.latitude;
            coordinatesArray.push(lng,lat);
        })

        let pushedCoordinates = "";
        for (let i = 0; i < coordinatesArray.length; i+=2){
            if (i < coordinatesArray.length - 2){
                pushedCoordinates += coordinatesArray[i] + ',' + coordinatesArray[i+1] + ';';
            } 
            if (i >= coordinatesArray.length - 2){
                pushedCoordinates += coordinatesArray[i] + ',' + coordinatesArray[i+1];
            }
        }
        return pushedCoordinates;
    }

    const getRoutesFromAPI = async (pushedCoordinates) => {
        const response = await fetch (`https://api.mapbox.com/optimized-trips/v1/mapbox/driving/${pushedCoordinates}?access_token=${mapboxgl.accessToken}`);
        const jsonData = await response.json();
        
        setOptRoute(jsonData);
    }

    const calculateRoutes = () => {
        // Need A semicolon-separated list of {longitude},{latitude} coordinates.
        const coordinates = generateCoordinates();
        
        //Make GET request to Optimization API 
        getRoutesFromAPI(coordinates); 

        // Display route on map
       
    }

    useEffect(() => {
        console.log(optRoute);
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