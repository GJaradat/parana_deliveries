package com.example.demo.services;

import com.example.demo.models.AvailabilityEnum;
import com.example.demo.models.Route;
import com.example.demo.models.StatusEnum;
import com.example.demo.models.Truck;
import com.example.demo.repositories.RouteRepository;
import com.example.demo.repositories.TruckRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RouteService {

    @Autowired
    RouteRepository routeRepository;

    @Autowired
    TruckRepository truckRepository;

    public List<Route> getAllRoutes() {
        return routeRepository.findAll();
    }

    public Optional<Route> getRouteById(long id){
        Optional<Route> route = routeRepository.findById(id);
        return route;
    }

    public Route updateRouteStatus(long id, StatusEnum newStatus){
        Optional<Route> targetRoute = getRouteById(id);

        if(targetRoute.isEmpty()){
            return null;
        }
        Route routeToUpdate = targetRoute.get();
        routeToUpdate.setRouteStatus(newStatus);
        routeRepository.save(routeToUpdate);
        return routeToUpdate;
    }

    public Route createRoute(){
        // Get list of available trucks
        ArrayList<Truck> availableTrucks = truckRepository.findByAvailability(AvailabilityEnum.IN_DEPOT);
        // Check there is a truck available
        if(availableTrucks.isEmpty()){
            return null;
        }
        // create new route that will have this truck assigned to it and a status of ...PENDING
        Route newRoute = new Route(availableTrucks.get(0), StatusEnum.PENDING);
        routeRepository.save(newRoute);
        return newRoute;
    }

}
