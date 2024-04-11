package com.example.demo.services;

import com.example.demo.models.Truck;
import com.example.demo.repositories.TruckRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TruckService {

    @Autowired
    TruckRepository truckRepository;

    public List<Truck> getAllTrucks(){
        return truckRepository.findAll();
    }

    public Optional<Truck> getTruckById(Long id){
        return truckRepository.findById(id);
    }
}
