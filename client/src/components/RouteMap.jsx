import { useEffect, useRef, useState } from "react";
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

    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;  //parana_routes no secret scopes

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [lng, lat],
          zoom: zoom
        });
    
    }, []);

    const calculateRoutes = async () => {
        const response = await fetch(`https://api.mapbox.com/optimized-trips/v2?access_token=${mapboxgl.accessToken}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(payload)
            }
        );
        console.log(response);
    }
    
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