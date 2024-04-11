package com.example.demo.controllers;

import com.example.demo.models.Truck;
import com.example.demo.services.TruckService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/chocolates")
public class TruckController {

    @Autowired
    TruckService truckService;


    @GetMapping
    public ResponseEntity<List<Truck>> getAllTrucks(){
        List<Truck> truck = truckService.getAllTrucks();
        return new ResponseEntity<>(truck, HttpStatus.OK);
    }
}
