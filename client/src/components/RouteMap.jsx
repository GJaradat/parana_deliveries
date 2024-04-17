import React,{ createElement, useEffect, useRef, useState } from "react";
import mapboxgl, {Marker} from "mapbox-gl";
import "../styles/RouteMapStyles.css";

const RouteMap = ( { routes, deliveries, optRoutes, displayedRoutes } ) => {
    
    const mapContainerRef = useRef(null);
    const map = useRef(null);
    // Starting lattitude and longitude states (aka the 'warehouse' location)
    const [lat,setLat] = useState(51.501476);
    const [lng,setLng] = useState(-0.140634);
    const [zoom, setZoom] = useState(10);
    const [displayedMarkers, setDisplayedMarkers] = useState([]);
    const [displayedRouteLayers, setDisplayedRouteLayers] = useState([]);

    const [isAnimating, setIsAnimating] = useState(false);
    const [currentPosition, setCurrentPosition] = useState(0);


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


        map.current.on('load', () => {

            const point = {
                'type': 'FeatureCollection',
                'features': [
                    {
                        'type': 'Feature',
                        'properties': {},
                        'geometry': {
                            'type': 'Point',
                            'coordinates': origin
                        }
                    }
                ]
            };
        
            map.current.addSource('point', {
                'type': 'geojson',
                'data': point
            });
    
            map.current.loadImage(
                'https://i.ibb.co/MCy52Yr/truck-svgrepo-com-fotor-20240416105953.png',
                (error, image) => {
                    if (error) throw error;
        
                    map.current.addImage('truck', image);
                
        

                map.current.addLayer({
                    'id': 'point',
                    'source': 'point',
                    'type': 'symbol',
                    'layout': {
                        'icon-image': 'truck',
                        'icon-size': 0.05,
                        'icon-rotate': ['get', 'bearing'],
                        'icon-rotation-alignment': 'map',
                        'icon-allow-overlap': true,
                        'icon-ignore-placement': true
                    }
                });
            })
        });
    
        
        
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

    
    const chooseColour = (index) => {
        const routeColours = ["#009e73", "#F0BA19", "#0071b2", "#e69d00", "#d55c00", "#f079a7", "#000000"]
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
                `<h3>Delivery #${delivery.location.id}</h3>
                <h4>${delivery.location.address}</h4>
                <p>${delivery.delivered ? 'Delivered' : `Out for delivery on Route ${thisRouteId}`}</p>` 
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

    const animatePoint = () => {
        const steps = 50;
        if (!isAnimating) {
            setIsAnimating(true);
            const interval = setInterval(() => {
                setCurrentPosition(prevPosition => prevPosition + 1);

                // Deliver delivery
                routes[0].deliveries.forEach(delivery => {
                    const pointCoordinates = optRoutes[0].trips[0].geometry.coordinates[currentPosition];
                    const deliveryCoordinates = [delivery.location.longitude, delivery.location.latitude];
                    const distance = calculateDistance(pointCoordinates, deliveryCoordinates);
    
                    if (distance) {
                        // The point is near the delivery location, deliver the delivery
                        if(delivery.delivered === false){
                            console.log(delivery)
                            deliverDelivery(delivery);
                        }
                    }
                });
                if (currentPosition >= steps) {
                    clearInterval(interval);
                    setIsAnimating(false);
                }
            }, 250); // Adjust the interval as needed
        }
    };

    const calculateDistance = (pointCoordinates, deliveryCoordinates) => {
        const deltaLat = (Math.abs(pointCoordinates[1] - deliveryCoordinates[1]));
        const deltaLng = (Math.abs(pointCoordinates[0] - deliveryCoordinates[0]));
        const threshold = 0.25;
        if ((deltaLat <= threshold)&&(deltaLng <= threshold)){
            console.log(true)
            return true;
        }
        return false;
    }

    useEffect(() => {
        if (map.current && isAnimating) {
            const newCoordinates = optRoutes[0].trips[0].geometry.coordinates[currentPosition];
            const pointData = {
                'type': 'FeatureCollection',
                'features': [
                    {
                        'type': 'Feature',
                        'geometry': {
                            'type': 'Point',
                            'coordinates': newCoordinates
                        }
                    }
                ]
            };
            map.current.getSource('point').setData(pointData);
        }
    }, [currentPosition, isAnimating]);
    
    const deliverDelivery = async (delivery) => {
        const response = await fetch(`http://localhost:8080/deliveries/${delivery.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        }
    });
    }
    

    return ( 
        <>
            <div>
                {routes && routes.length > 0 && <button id='make-route-button'>Display All Routes</button>}
                <div ref={mapContainerRef} className="map-container" />
            </div>
            <button onClick={animatePoint}>Animate Point</button>
        </>
     );
}
 
export default RouteMap;