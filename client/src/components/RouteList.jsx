import Route from './Route'

const RouteList = ({routes}) => {

    const mappedRoutes = routes.map((route)=>{
        return <Route key={route.id} route={route} />
    });

    return ( 
        <>
            {mappedRoutes}
        </>
     );
}
 
export default RouteList;