package com.example.demo.controllers;

import com.example.demo.models.Location;
import com.example.demo.services.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/locations")
public class LocationController {

    @Autowired
    LocationService locationService;

    @PostMapping
    public ResponseEntity<Location> addNewLocation(@RequestBody Location newLocation) {

        locationService.saveLocation(newLocation);
        return new ResponseEntity<>(newLocation, HttpStatus.CREATED);
    }

}
