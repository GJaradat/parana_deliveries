import { useEffect, useState } from "react";
import DeliveryList from "./DeliveryList";
import "../styles/Route.css";
import ReactModal from "react-modal";

const Route = ({route, patchRoutes, displayedRoutes, setDisplayedRoutes, routesVisible}) => {

    const [expandButtonStatus, setExpandButtonStatus] = useState(false)

    const[routeStatus, setRouteStatus] = useState(route.status);
    const [routeVisible, setRouteVisible] = useState(false);

    const [modalIsOpen, setIsOpen] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        let newRoute = {
            id: route.id,
            deliveries: route.deliveries,
            status: routeStatus,
            truck: route.truck
        }
        patchRoutes(newRoute);
        toggleModal();
    }

    const handleExpandStatus = () => {
        setExpandButtonStatus((expandButtonStatus) => !expandButtonStatus);
    }

    const toggleButtonLabel = () => {
        return expandButtonStatus ? "Less" : "More";
    }

    const handleDisplayButton = () => {
        if (displayedRoutes.includes(route.id)) {
            setDisplayedRoutes(displayedRoutes => displayedRoutes.filter(id => id !== route.id));
        } else {
            setDisplayedRoutes(displayedRoutes => [...displayedRoutes, route.id]);
        }
        setRouteVisible(!routeVisible);
    }

    const toggleModal = () => {
        setIsOpen(!modalIsOpen)
    }

    useEffect(()=>{
        if (routesVisible){
            setRouteVisible(true);
        } else {
            setRouteVisible(false);
        }
    }, [routesVisible])

    const modalStyle = {content: {
        height: "10%",
        width: "20%",
        margin: "auto",
        textAlign: "center",
        color:"#11464A",
        backgroundColor: "white"
    },
    overlay: {
        backgroundColor: 'rgba(64,46,83, 0.65)'
    }}

    return ( 
        <>
        <main>
        <section className="route-container">
            <h3>Route {route.id}</h3>
            <article id="statusContainer">
                <p>Status: </p>
                <select 
                    className="updateStatusDropdown"
                    defaultValue={route.status}
                    onChange={(e) => {setRouteStatus(e.target.value)}}
                    >
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="COMPLETED">Completed</option>
                </select>
                <button className="update-status-button" onClick={handleClick}>Update Status</button>
            </article>
                <p id="truck">Truck: {route.truck.name}</p>
            <button className="dark-button" onClick={handleExpandStatus}>{toggleButtonLabel()}</button>
            <button className="dark-button" onClick={handleDisplayButton}>{ routeVisible ? "Hide Route" : "Show Route" }</button>
            {expandButtonStatus && <>
                    <div className="delivery-list">
                        <DeliveryList deliveries = {route.deliveries} />
                    </div> </> }
                <ReactModal 
                    portalClassName="modal"
                    isOpen={modalIsOpen}
                    onRequestClose={toggleModal}
                    contentLabel="Update Status Message"
                    style={modalStyle}
                >
                    <div className="update-message">
                        <h3>Route status successfully updated!</h3>
                    </div>
                </ReactModal>


        </section>
        </main>
        </>
     );
}
 
export default Route;
