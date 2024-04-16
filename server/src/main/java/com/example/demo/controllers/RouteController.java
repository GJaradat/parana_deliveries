package com.example.demo.controllers;

import com.example.demo.models.Route;
import com.example.demo.models.StatusEnum;
import com.example.demo.services.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/routes")
public class RouteController {

    @Autowired
    RouteService routeService;

    @GetMapping
    public ResponseEntity<List<Route>> getRoutes(){
        List<Route> routeList = routeService.getAllRoutes();
        return new ResponseEntity<>(routeList, HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Route> getRoute(@PathVariable long id){
        Optional<Route> targetRoute = routeService.getRouteById(id);
        if(targetRoute.isPresent()){
            return new ResponseEntity<>(targetRoute.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @PostMapping(value = "/generateRoutes")
    public ResponseEntity<List<Route>> generateRoutes(){
        List<Route> routeList = routeService.generateRoutes();
        return new ResponseEntity<>(routeList, HttpStatus.OK);
    }

    @PatchMapping(value = "/{id}/status")
    public ResponseEntity<Route> updateRouteStatus(@PathVariable long id, @RequestBody StatusEnum newStatus){
        Route updatedRoute = routeService.updateRouteStatus(id, newStatus);
        if(updatedRoute == null){
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(updatedRoute, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Route> postRoute(){
        Route newRoute = routeService.createRoute();
        if(newRoute == null){
            return new ResponseEntity<>(null, HttpStatus.SERVICE_UNAVAILABLE);
        }
        return new ResponseEntity<>(newRoute, HttpStatus.CREATED);
    }

    @DeleteMapping
    public ResponseEntity<String> deleteAllRoutes() {
        routeService.deleteAllRoutes();
        return new ResponseEntity<>("All routes deleted and truck statuses reset", HttpStatus.OK);
    }

}
