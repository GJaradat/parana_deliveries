import Route from './Route'

const RouteList = ({routes, patchRoutes}) => {

    const mappedRoutes = routes.sort((a, b) => a.id - b.id).map((route)=>{
        return <Route key={route.id} route={route} patchRoutes={patchRoutes} />
    });

    return ( 
        <>
            {mappedRoutes}
        </>
     );
}
 
export default RouteList;