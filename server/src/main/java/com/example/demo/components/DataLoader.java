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

        Truck truck1 = new Truck("Jaguar", "https://image.spreadshirtmedia.net/image-server/v1/products/T1459A839PA4459PT28D197361856W8333H10000/views/1,width=120,height=120,appearanceId=839,backgroundColor=F2F2F2/monster-truck-axolotl-sticker.jpg", 3000);
        Truck truck2 = new Truck("Gorilla","https://image.spreadshirtmedia.net/image-server/v1/products/T1459A839PA4459PT28D197361856W8333H10000/views/1,width=120,height=120,appearanceId=839,backgroundColor=F2F2F2/monster-truck-axolotl-sticker.jpg", 500);
        Truck truck3 = new Truck("Mongoose","https://image.spreadshirtmedia.net/image-server/v1/products/T1459A839PA4459PT28D197361856W8333H10000/views/1,width=120,height=120,appearanceId=839,backgroundColor=F2F2F2/monster-truck-axolotl-sticker.jpg", 1000);
        Truck truck4 = new Truck("Toucan","https://image.spreadshirtmedia.net/image-server/v1/products/T1459A839PA4459PT28D197361856W8333H10000/views/1,width=120,height=120,appearanceId=839,backgroundColor=F2F2F2/monster-truck-axolotl-sticker.jpg", 2000);
        Truck truck5 = new Truck("Capybara","https://image.spreadshirtmedia.net/image-server/v1/products/T1459A839PA4459PT28D197361856W8333H10000/views/1,width=120,height=120,appearanceId=839,backgroundColor=F2F2F2/monster-truck-axolotl-sticker.jpg", 2000);
        Truck truck6 = new Truck("Anaconda","https://image.spreadshirtmedia.net/image-server/v1/products/T1459A839PA4459PT28D197361856W8333H10000/views/1,width=120,height=120,appearanceId=839,backgroundColor=F2F2F2/monster-truck-axolotl-sticker.jpg", 2000);
        Truck truck7 = new Truck("Sloth","https://image.spreadshirtmedia.net/image-server/v1/products/T1459A839PA4459PT28D197361856W8333H10000/views/1,width=120,height=120,appearanceId=839,backgroundColor=F2F2F2/monster-truck-axolotl-sticker.jpg", 2000);

        truckRepository.save(truck1);
        truckRepository.save(truck2);
        truckRepository.save(truck3);
        truckRepository.save(truck4);
        truckRepository.save(truck5);
        truckRepository.save(truck6);
        truckRepository.save(truck7);

//        Warehouse location
        Location location1 = new Location("Buckingham Palace, London SW1A 1AA, UK", 51.501476, -0.140634);

        Location location2 = new Location("The British Museum, Great Russell Street, London WC1B 3DG, UK", 51.519520, -0.126090);
        Location location3 = new Location("The London Eye, County Hall, Westminster Bridge Road, London SE1 7PB, UK", 51.503324, -0.119543);
        Location location4 = new Location("The Shard, 31 London Bridge Street, London SE1 9SG, UK", 51.506686, -0.085309);
        Location location5 = new Location("The Natural History Museum, Cromwell Road, London SW7 5BD, UK", 51.497499, -0.173333);
        Location location6 = new Location("The Science Museum, Exhibition Road, London SW7 2DD, UK", 51.497500, -0.173333);
        Location location7 = new Location("The British Library, 96 Euston Road, London NW1 2DB, UK", 51.524550, -0.133060);
        Location location8 = new Location("The National Gallery, Trafalgar Square, London WC2N 5DN, UK", 51.508229, -0.128040);
        Location location9 = new Location("The Royal Albert Hall, Kensington Gore, London SW7 2AP, UK", 51.495300, -0.172300);
        Location location10 = new Location("The Royal Opera House, Bow Street, London WC2E 9DD, UK", 51.515700, -0.127600);
        Location location11 = new Location("The National Portrait Gallery, Malet Street, London WC1H 0EH, UK", 51.519100, -0.126000);
        Location location12 = new Location("The Tate Modern, Bankside, London SE1 9TG, UK", 51.508500, -0.094000);
        Location location13 = new Location("The National Gallery of British Art, Trafalgar Square, London WC2N 5DN, UK", 51.508229, -0.128040);

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
        locationRepository.save(location11);
        locationRepository.save(location12);
        locationRepository.save(location13);


        Delivery delivery2 = new Delivery(location2);
        Delivery delivery3 = new Delivery(location3);
        Delivery delivery4 = new Delivery(location4);
        Delivery delivery5 = new Delivery(location5);
        Delivery delivery6 = new Delivery(location6);
        Delivery delivery7 = new Delivery(location7);
        Delivery delivery8 = new Delivery(location8);
        Delivery delivery9 = new Delivery(location9);
        Delivery delivery10 = new Delivery(location10);
        Delivery delivery11 = new Delivery(location11);
        Delivery delivery12 = new Delivery(location12);
        Delivery delivery13 = new Delivery(location13);


        deliveryRepository.save(delivery2);
        deliveryRepository.save(delivery3);
        deliveryRepository.save(delivery4);
        deliveryRepository.save(delivery5);
        deliveryRepository.save(delivery6);
        deliveryRepository.save(delivery7);
        deliveryRepository.save(delivery8);
        deliveryRepository.save(delivery9);
        deliveryRepository.save(delivery10);
        deliveryRepository.save(delivery11);
        deliveryRepository.save(delivery12);
        deliveryRepository.save(delivery13);

        Location location14 = new Location("Abbey Road, E15 3NB, UK", 51.531952, 0.003723);
        locationRepository.save(location14);
        Delivery delivery14 = new Delivery(location14);
        deliveryRepository.save(delivery14);

        Location location15 = new Location("Abbey Wood, SE2 9RH, UK", 51.490784, 0.120272);
        locationRepository.save(location15);
        Delivery delivery15 = new Delivery(location15);
        deliveryRepository.save(delivery15);

        Location location16 = new Location("Acton Central, W3 6BH, UK", 51.508757, -0.26343);
        locationRepository.save(location16);
        Delivery delivery16 = new Delivery(location16);
        deliveryRepository.save(delivery16);

        Location location17 = new Location("Acton Main Line, W3 9EH, UK", 51.516886, -0.26769);
        locationRepository.save(location17);
        Delivery delivery17 = new Delivery(location17);
        deliveryRepository.save(delivery17);

        Location location18 = new Location("Acton Town, W3 8HN, UK", 51.503071, -0.280303);
        locationRepository.save(location18);
        Delivery delivery18 = new Delivery(location18);
        deliveryRepository.save(delivery18);

        Location location19 = new Location("Addington Village, CR0 5AR, UK", 51.356239, -0.032665);
        locationRepository.save(location19);
        Delivery delivery19 = new Delivery(location19);
        deliveryRepository.save(delivery19);

        Location location20 = new Location("Addiscombe, CR0 7AA, UK", 51.379808, -0.073213);
        locationRepository.save(location20);
        Delivery delivery20 = new Delivery(location20);
        deliveryRepository.save(delivery20);

        Location location21 = new Location("Albany Park, DA5 3HP, UK", 51.435816, 0.126445);
        locationRepository.save(location21);
        Delivery delivery21 = new Delivery(location21);
        deliveryRepository.save(delivery21);

        Location location22 = new Location("Aldgate, EC3N 1AH, UK", 51.514342, -0.075627);
        locationRepository.save(location22);
        Delivery delivery22 = new Delivery(location22);
        deliveryRepository.save(delivery22);

        Location location23 = new Location("Aldgate East, E1 7PT, UK", 51.515082, -0.073001);
        locationRepository.save(location23);
        Delivery delivery23 = new Delivery(location23);
        deliveryRepository.save(delivery23);

        Location location24 = new Location("Alexandra Palace, N22 7ST, UK", 51.598263, -0.120149);
        locationRepository.save(location24);
        Delivery delivery24 = new Delivery(location24);
        deliveryRepository.save(delivery24);

        Location location25 = new Location("All Saints, E14 0EH, UK", 51.510477, -0.012625);
        locationRepository.save(location25);
        Delivery delivery25 = new Delivery(location25);
        deliveryRepository.save(delivery25);

        Location location26 = new Location("Alperton, HA0 4LL, UK", 51.541209, -0.299516);
        locationRepository.save(location26);
        Delivery delivery26 = new Delivery(location26);
        deliveryRepository.save(delivery26);

        Location location27 = new Location("Amersham, HP6 5AZ, UK", 51.674128, -0.606514);
        locationRepository.save(location27);
        Delivery delivery27 = new Delivery(location27);
        deliveryRepository.save(delivery27);

        Location location28 = new Location("Ampere Way, CR0 3JX, UK", 51.382299, -0.123637);
        locationRepository.save(location28);
        Delivery delivery28 = new Delivery(location28);
        deliveryRepository.save(delivery28);

        Location location29 = new Location("Anerley, SE20 8PY, UK", 51.412517, -0.065137);
        locationRepository.save(location29);
        Delivery delivery29 = new Delivery(location29);
        deliveryRepository.save(delivery29);

        Location location30 = new Location("Angel, N1 8XB, UK", 51.532968, -0.105581);
        locationRepository.save(location30);
        Delivery delivery30 = new Delivery(location30);
        deliveryRepository.save(delivery30);

        Location location31 = new Location("Angel Road, N18 3AY, UK", 51.61242, -0.048733);
        locationRepository.save(location31);
        Delivery delivery31 = new Delivery(location31);
        deliveryRepository.save(delivery31);

        Location location32 = new Location("Archway, N19 5RQ, UK", 51.56549, -0.135122);
        locationRepository.save(location32);
        Delivery delivery32 = new Delivery(location32);
        deliveryRepository.save(delivery32);

        Location location33 = new Location("Arena, SE25 4RY, UK", 51.391523, -0.058319);
        locationRepository.save(location33);
        Delivery delivery33 = new Delivery(location33);
        deliveryRepository.save(delivery33);

        Location location34 = new Location("Arnos Grove, N11 1AN, UK", 51.61623, -0.13427);
        locationRepository.save(location34);
        Delivery delivery34 = new Delivery(location34);
        deliveryRepository.save(delivery34);

        Location location35 = new Location("Arsenal, N5 1LP, UK", 51.558541, -0.1055);
        locationRepository.save(location35);
        Delivery delivery35 = new Delivery(location35);
        deliveryRepository.save(delivery35);

        Location location36 = new Location("Avenue Road, BR3 4NJ, UK", 51.406798, -0.049447);
        locationRepository.save(location36);
        Delivery delivery36 = new Delivery(location36);
        deliveryRepository.save(delivery36);

        Location location37 = new Location("Baker Street, NW1 5LA, UK", 51.523129, -0.156904);
        locationRepository.save(location37);
        Delivery delivery37 = new Delivery(location37);
        deliveryRepository.save(delivery37);

        Location location38 = new Location("Balham, SW12 9SG, UK", 51.443182, -0.152685);
        locationRepository.save(location38);
        Delivery delivery38 = new Delivery(location38);
        deliveryRepository.save(delivery38);

        Location location39 = new Location("Bank, EC3V 3LA, UK", 51.513347, -0.089);
        locationRepository.save(location39);
        Delivery delivery39 = new Delivery(location39);
        deliveryRepository.save(delivery39);

        Location location40 = new Location("Banstead, SM7 1RB, UK", 51.329293, -0.213132);
        locationRepository.save(location40);
        Delivery delivery40 = new Delivery(location40);
        deliveryRepository.save(delivery40);



    }
}
