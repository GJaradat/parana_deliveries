package com.example.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jdk.jshell.Snippet;

import java.util.List;

@Entity
@Table(name = "routes")
public class Route {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @JsonIgnoreProperties({ "routes" })
    @OneToMany(mappedBy = "route")
    @JoinColumn(name = "delivery_id")
    private List<Delivery> deliveries;

    @JsonIgnoreProperties({ "routes" })
    @OneToOne
    @JoinColumn(name = "truck_id")
    private Truck truck;

    @Column
    private StatusEnum routeStatus;

//    CONSTRUCTOR
    public Route(){}

    public Route(long id, List<Delivery> deliveries, Truck truck, StatusEnum routeStatus) {
        this.id = id;
        this.deliveries = deliveries;
        this.truck = truck;
        this.routeStatus = routeStatus;
    }

//    GETTERS & SETTERS
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Delivery getDeliveries() {
        return deliveries;
    }

    public void setDeliveries(Delivery deliveries) {
        this.deliveries = deliveries;
    }

    public Truck getTruck() {
        return truck;
    }

    public void setTruck(Truck truck) {
        this.truck = truck;
    }

    public StatusEnum getRouteStatus() {
        return routeStatus;
    }

    public void setRouteStatus(StatusEnum routeStatus) {
        this.routeStatus = routeStatus;
    }
}
