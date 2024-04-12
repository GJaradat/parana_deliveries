package com.example.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jdk.jshell.Snippet;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "routes")
public class Route {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @JsonIgnoreProperties({ "route" })
    @OneToMany(mappedBy = "route")
    private List<Delivery> deliveries;

    @JsonIgnoreProperties({ "routes" })
    @ManyToOne
    @JoinColumn(name = "truck_id")
    private Truck truck;

    @Column
    private StatusEnum routeStatus;

//    CONSTRUCTOR
    public Route(){}

    public Route(Truck truck, StatusEnum routeStatus) {
        this.deliveries = new ArrayList<>();
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

    public List<Delivery> getDeliveries() {
        return deliveries;
    }

    public void setDeliveries(List<Delivery> deliveries) {
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

    public void addDelivery(Delivery delivery){
        this.deliveries.add(delivery);
        delivery.setRoute(this);
    }

    public void removeDelivery(Delivery delivery){
        this.deliveries.remove(delivery);
    }

}
