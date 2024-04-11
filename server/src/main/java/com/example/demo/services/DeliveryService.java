package com.example.demo.services;

import com.example.demo.models.Delivery;
import com.example.demo.repositories.DeliveryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DeliveryService {

    @Autowired
    DeliveryRepository deliveryRepository;


    public List<Delivery> getAllDeliveries(){
        return deliveryRepository.findAll();
    }

    public Optional<Delivery> getDeliveryById(long id){
        return deliveryRepository.findById(id);
    }

    public Delivery completeDelivery(long id){
        Delivery delivery = deliveryRepository.findById(id).get();
        delivery.setDelivered(!delivery.isDelivered());
        deliveryRepository.save(delivery);
        return delivery;
    }

}
