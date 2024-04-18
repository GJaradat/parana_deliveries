import React,{ createElement, useEffect, useRef, useState } from "react";
import mapboxgl, {Marker} from "mapbox-gl";
import "../styles/RouteMapStyles.css";

const RouteMap = ( { routes, deliveries, optRoutes, displayedRoutes, routesVisible, handleDisplayAll } ) => {
    
    const mapContainerRef = useRef(null);
    const map = useRef(null);
    // Starting lattitude and longitude states (aka the 'warehouse' location)
    const [lat,setLat] = useState(51.501476);
    const [lng,setLng] = useState(-0.140634);
    const [zoom, setZoom] = useState(10);

    const [displayedMarkers, setDisplayedMarkers] = useState([]);
    const [displayedRouteLayers, setDisplayedRouteLayers] = useState([]);

    mapboxgl.accessToken = `${process.env.REACT_APP_MAPBOX_KEY}`;

    useEffect(() => {

        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [lng, lat],
          zoom: zoom
        });
        
        // Warehouse marker
        new mapboxgl.Marker({ className:"marker-warehouse", color:"none"}).setLngLat([lng,lat]).addTo(map.current);
        }, []);

    useEffect(() => {
        if (deliveries !== null){
            displayMarkers(deliveries);
        }
    },[deliveries])

    useEffect(() => {
        // So map can render on deliveries page
        if (!routes) return;

        // Logic for toggling routes
        if(displayedRoutes.length >= 0){
            if (displayedRouteLayers.length > 0){
                clearRoutes();
            }

            displayedRoutes.forEach( (dispRouteIdx) => {
                if (!displayedRouteLayers.includes(dispRouteIdx)){
                    displayRoutes(dispRouteIdx);
                    displayMarkers(routes[dispRouteIdx-1].deliveries);
                    setDisplayedRouteLayers(displayedRouteLayers => [...displayedRouteLayers, dispRouteIdx])
                }
            })
        }
    }, [displayedRoutes]);

    const routeColours = ["#009e73", "#F0D319", "#0071B2", "#E69D00", "#F079A7", "#D55C00", "#000000"]

    const chooseColour = (index) => {
        const colourIndex = index % routeColours.length;
        return routeColours[colourIndex];
    }

    const displayRoutes = (dispRouteIdx) => {
       
        const tripLine = optRoutes[dispRouteIdx-1].trips[0].geometry;

        // Check if the source already exists and remove it if it does
        if (map.current.getSource(`route${dispRouteIdx}`)) {
            map.current.removeSource(`route${dispRouteIdx}`);
        }

        // Check if the layer already exists and remove it if it does
        if (map.current.getLayer(`route-line${dispRouteIdx}`)) {
            map.current.removeLayer(`route-line${dispRouteIdx}`);
        }
        map.current.addSource(`route${dispRouteIdx}`, {
            'type':'geojson',
            'data':tripLine
        });

        map.current.addLayer({
            'id': `route-line${dispRouteIdx}`,
            'type': 'line',
            'source': `route${dispRouteIdx}`,
            'paint': {
              'line-color': `${chooseColour(dispRouteIdx)}`,
              'line-width': 4
            }
          });
    }

    const displayMarkers = (deliveries) => {
        // Create a HTML element for each marker
        deliveries.forEach(delivery => {
            const markercolor = delivery.isDelivered === true ? '#007B63' : '#F0BA19';
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
                `<h3>Delivery #${delivery.id}</h3>
                <h4>${delivery.location.address}</h4>
                <p>${delivery.delivered ? `Delivered (Route ${thisRouteId})` : `Out for delivery on Route ${thisRouteId}`}</p>` 
               );  

            // Make a marker for each coordinate and add to the map
            const marker = new mapboxgl.Marker({color: `${delivery.delivered ? '#007B63' : '#F0BA19'}`}).setLngLat(coord).addTo(map.current).setPopup(popup);
            setDisplayedMarkers(prevMarkers => [...prevMarkers, { id: delivery.id, marker: marker }]);
        })
    }

    const clearMarkers = (clearedDeliveries) => {
        
        displayedMarkers.forEach( displayedMarker => {
            if (clearedDeliveries.some(delivery => delivery.id === displayedMarker.id)){
                displayedMarker.marker.remove();
                setDisplayedMarkers(prevMarkers => prevMarkers.filter(marker => marker.id !== displayedMarker.id));
            }
        })
    }
    
    const clearRoutes = () => {
        
        displayedRouteLayers.forEach((dispRouteIdx) => {

            if (!(displayedRoutes.includes(dispRouteIdx))){
                map.current.removeLayer(`route-line${dispRouteIdx}`);
                map.current.removeSource(`route${dispRouteIdx}`);
                setDisplayedRouteLayers(prevLayers => prevLayers.filter(layerIdx => layerIdx !== dispRouteIdx));

                // remove markers
                clearMarkers(routes[dispRouteIdx-1].deliveries);
            }
        });
    }

    

    return ( 
        <>
            <div>
                {routes && routes.length > 0 && <button id='make-route-button' onClick={handleDisplayAll}>{ routesVisible ? "Hide All Routes" : "Show All Routes" }</button>}
                <div ref={mapContainerRef} className="map-container" />
            </div>
        </>
     );
}
 
export default RouteMap;