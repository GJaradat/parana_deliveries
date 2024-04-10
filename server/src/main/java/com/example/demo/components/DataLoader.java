package com.example.demo.components;

import com.example.demo.repositories.DeliveryRepository;
import com.example.demo.repositories.LocationRepository;
import com.example.demo.repositories.RouteRepository;
import com.example.demo.repositories.TruckRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    DeliveryRepository deliveryRepository;

    @Autowired
    LocationRepository locationRepository;

    @Autowired
    TruckRepository truckRepository;

    @Autowired
    RouteRepository routeRepository;


    @Override
    public void run(ApplicationArguments args) throws Exception {






    }
}
