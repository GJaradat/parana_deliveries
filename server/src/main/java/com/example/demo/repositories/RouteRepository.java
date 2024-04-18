package com.example.demo.repositories;

import com.example.demo.models.Route;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RouteRepository extends JpaRepository<Route, Long> {

    public List<Route> findAllByOrderByIdAsc();
}
