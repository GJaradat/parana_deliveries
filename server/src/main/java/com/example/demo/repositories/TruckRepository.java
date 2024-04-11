package com.example.demo.repositories;

import com.example.demo.models.AvailabilityEnum;
import com.example.demo.models.StatusEnum;
import com.example.demo.models.Truck;
import org.springframework.boot.availability.AvailabilityState;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;
import java.util.List;

public interface TruckRepository extends JpaRepository<Truck, Long> {
    public ArrayList<Truck> findByAvailability(AvailabilityEnum availability);
}
