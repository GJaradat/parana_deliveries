import Route from './Route'
import "../styles/RouteList.css"

const RouteList = ({routes, patchRoutes, displayedRoutes, setDisplayedRoutes, routesVisible}) => {

    const mappedRoutes = routes.sort((a, b) => a.id - b.id).map((route)=>{
        return <Route 
                    key={route.id} 
                    route={route} 
                    patchRoutes={patchRoutes} 
                    displayedRoutes={displayedRoutes} 
                    setDisplayedRoutes={setDisplayedRoutes} 
                    routesVisible={routesVisible}
                />
    });

    return ( 
        <>
        <div className="scroll-bar">
            {mappedRoutes}
        </div>
        </>
     );
}
 
export default RouteList;