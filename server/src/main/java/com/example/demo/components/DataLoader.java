package com.example.demo.components;

import com.example.demo.models.*;
import com.example.demo.repositories.DeliveryRepository;
import com.example.demo.repositories.LocationRepository;
import com.example.demo.repositories.RouteRepository;
import com.example.demo.repositories.TruckRepository;
import org.hibernate.bytecode.internal.bytebuddy.BytecodeProviderImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

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

        Truck truck1 = new Truck("Leopard", 3000);
        Truck truck2 = new Truck("Panda", 500);
        Truck truck3 = new Truck("Goose", 1000);
        Truck truck4 = new Truck("Monkey", 2000);

        truckRepository.save(truck1);
        truckRepository.save(truck2);
        truckRepository.save(truck3);
        truckRepository.save(truck4);

//        Warehouse location
        Location buckinghamPalace = new Location("London SW1A 1AA", 51.501596, 0.141290);

        Location location1 = new Location("75 Gloucester Rd, South Kensington, London SW7 4SS", 51.494737, 0.182668);
        Location location2 = new Location("16-17 Wardour St, London W1F 8AT", 51.510953, 0.131792);
        Location location3 = new Location("3 Cranbourn St, London WC2H 7AL", 51.511533, 0.129323);
        Location location4 = new Location("Great Russell St, London WC1B 3DG", 51.518690, 0.126054);
        Location location5 = new Location("Lambeth Rd, London SE1 6HZ", 51.497141, 0.108623);
        Location location6 = new Location("Peninsula Square, London SE10 0DX", 51.501506, 0.004784);
        Location location7 = new Location("Eastmoor St, London SE7 8LX", 51.494423, 0.037935);
        Location location8 = new Location("Exhibition Rd, South Kensington, London SW7 2AZ", 51.498873, 0.174269);
        Location location9 = new Location("Praed St, London W2 1RH", 51.516026, 0.175029);
        Location location10 = new Location("Outer Cir, London NW1 4RY", 51.535597, 0.153254);

        locationRepository.save(buckinghamPalace);
        locationRepository.save(location1);
        locationRepository.save(location2);
        locationRepository.save(location3);
        locationRepository.save(location4);
        locationRepository.save(location5);
        locationRepository.save(location6);
        locationRepository.save(location7);
        locationRepository.save(location8);
        locationRepository.save(location9);
        locationRepository.save(location10);

        Delivery delivery1 = new Delivery(location3);
        Delivery delivery2 = new Delivery(location2);
        Delivery delivery3 = new Delivery(location1);
        Delivery delivery4 = new Delivery(location10);
        Delivery delivery5 = new Delivery(location4);
        Delivery delivery6 = new Delivery(location5);
        Delivery delivery7 = new Delivery(location7);
        Delivery delivery8 = new Delivery(location8);
        Delivery delivery9 = new Delivery(location9);
        Delivery delivery10 = new Delivery(location6);

        deliveryRepository.save(delivery1);
        deliveryRepository.save(delivery2);
        deliveryRepository.save(delivery3);
        deliveryRepository.save(delivery4);
        deliveryRepository.save(delivery5);
        deliveryRepository.save(delivery6);
        deliveryRepository.save(delivery7);
        deliveryRepository.save(delivery8);
        deliveryRepository.save(delivery9);
        deliveryRepository.save(delivery10);

        Route route1 = new Route(truck1, StatusEnum.IN_PROGRESS);
        Route route2 = new Route(truck2, StatusEnum.IN_PROGRESS);
        Route route3 = new Route(truck4, StatusEnum.PENDING);

        routeRepository.save(route1);
        routeRepository.save(route2);
        routeRepository.save(route3);



    }
}
