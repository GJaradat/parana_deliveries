package com.example.demo.controllers;

import com.example.demo.models.Truck;
import com.example.demo.services.TruckService;

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
@RequestMapping(value = "/trucks")
public class TruckController {

    @Autowired
    TruckService truckService;


    @GetMapping
    public ResponseEntity<List<Truck>> getAllTrucks(){
        List<Truck> truck = truckService.getAllTrucks();
        return new ResponseEntity<>(truck, HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Optional<Truck>> getTruckById(@PathVariable long id){
        Optional<Truck> truck = truckService.getTruckById(id);
        if(truck.isEmpty()){
            return new ResponseEntity<>(truck, HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(truck, HttpStatus.OK);
        }
    }
}
