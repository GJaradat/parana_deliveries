package com.example.demo.repositories;

import com.example.demo.models.Delivery;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DeliveryRepository extends JpaRepository<Delivery, Long> {

    public List<Delivery> findByIsDelivered(boolean bool);
}
