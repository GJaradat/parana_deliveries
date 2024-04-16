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
        //Adding placeholder image in case user does not bother to add a truck url
        if(truckDTO.getImageURL() == "" || truckDTO.getImageURL() == null){
            Truck newTruck = new Truck(truckDTO.getName(), "https://image.spreadshirtmedia.net/image-server/v1/products/T1459A839PA4459PT28D197361856W8333H10000/views/1,width=120,height=120,appearanceId=839,backgroundColor=F2F2F2/monster-truck-axolotl-sticker.jpg", truckDTO.getCapacity());
            truckRepository.save(newTruck);
            return newTruck;
        } else {
            Truck newTruck = new Truck(truckDTO.getName(), truckDTO.getImageURL(), truckDTO.getCapacity());
            truckRepository.save(newTruck);
            return newTruck;
        }

    }
}
