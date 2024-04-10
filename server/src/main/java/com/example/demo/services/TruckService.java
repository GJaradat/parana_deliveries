package com.example.demo.services;

import com.example.demo.repositories.TruckRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TruckService {

    @Autowired
    TruckRepository truckRepository;
}
