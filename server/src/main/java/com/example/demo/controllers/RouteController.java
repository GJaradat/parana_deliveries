package com.example.demo.controllers;

import com.example.demo.models.Route;
import com.example.demo.services.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
        return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
    }

}
