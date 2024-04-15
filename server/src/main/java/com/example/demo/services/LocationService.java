package com.example.demo.services;


import com.example.demo.models.Location;
import com.example.demo.repositories.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LocationService {

    @Autowired
    LocationRepository locationRepository;

    public Location saveLocation(Location newLocation){
        locationRepository.save(newLocation);
        return newLocation;
    };


}
