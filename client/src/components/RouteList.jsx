import Route from './Route'

const RouteList = ({routes, patchRoutes}) => {

    const mappedRoutes = routes.map((route)=>{
        return <Route key={route.id} route={route} patchRoutes={patchRoutes} />
    });

    return ( 
        <>
            {mappedRoutes}
        </>
     );
}
 
export default RouteList;