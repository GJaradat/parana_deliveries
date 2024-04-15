package com.example.demo.services;

import com.example.demo.models.AvailabilityEnum;
import com.example.demo.models.Truck;
import com.example.demo.models.TruckDTO;
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

    public Optional<Truck> changeTruckAvailability(AvailabilityEnum truckStatus, long id) {
        Optional<Truck> truckToUpdate = truckRepository.findById(id);
        truckToUpdate.get().setAvailability(truckStatus);
        truckRepository.save(truckToUpdate.get());
        return  truckToUpdate;
    }

    public Truck createTruck(TruckDTO truckDTO){
        Truck newTruck = new Truck(truckDTO.getName(), truckDTO.getCapacity());
        truckRepository.save(newTruck);
        return newTruck;

    }
}
