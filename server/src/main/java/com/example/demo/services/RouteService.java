package com.example.demo.services;

import com.example.demo.models.Route;
import com.example.demo.models.StatusEnum;
import com.example.demo.repositories.RouteRepository;
import com.example.demo.repositories.TruckRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RouteService {

    @Autowired
    RouteRepository routeRepository;

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

}
