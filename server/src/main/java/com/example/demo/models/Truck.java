package com.example.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "trucks")
public class Truck {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String name;
    @Column
    private int capacity;
    @Column
    private AvailabilityEnum availability;

    @JsonIgnoreProperties({"truck"})
    @OneToMany(mappedBy = "truck")
    private List<Route> routes;

    public Truck(){}

    public Truck(String name, int capacity){
        this.name = name;
        this.capacity = capacity;
        this.availability = AvailabilityEnum.IN_DEPOT;
        this.routes = new ArrayList<>();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public AvailabilityEnum getAvailability() {
        return availability;
    }


    public void setAvailability(AvailabilityEnum availability) {
        this.availability = availability;
    }
    public List<Route> getRoutes() {
        return routes;
    }
    public void setRoutes(List<Route> routes) {
        this.routes = routes;
    }

    public void addRoute(Route route){
        this.routes.add(route);
    }

}
