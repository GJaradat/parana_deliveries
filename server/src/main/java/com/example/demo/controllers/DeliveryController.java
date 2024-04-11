package com.example.demo.controllers;

import com.example.demo.models.Delivery;
import com.example.demo.services.DeliveryService;
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
@RequestMapping("deliveries")
public class DeliveryController {

    @Autowired
    DeliveryService deliveryService;

    @GetMapping
    private ResponseEntity<List<Delivery>> getAllDeliveries(){
        return new ResponseEntity<>(deliveryService.getAllDeliveries(), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    private ResponseEntity<Delivery> getDeliveryById(@PathVariable long id){
        Optional<Delivery> delivery = deliveryService.getDeliveryById(id);
        if(delivery.isPresent()){
            return new ResponseEntity<>(delivery.get(), HttpStatus.FOUND);
        }
        return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }


}
