package com.example.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity
@Table(name = "deliveries")
public class Delivery {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @JsonIgnoreProperties("deliveries")
    @ManyToOne
    @JoinColumn(name = "route_id")
    private Route route;

    @JsonIgnoreProperties("delivery_id")
    @ManyToOne
    @JoinColumn(name = "location_id")
    private Location location;

    @Column(name = "delivered")
    private boolean isDelivered;

//    CONSTRUCTOR
    public Delivery(){}

    public Delivery(Location location) {
        this.location = location;
        this.isDelivered = false;
    }

//    GETTERS & SETTERS

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Location getLocation() {
        return location;
    }

    public void setLocation(Location location) {
        this.location = location;
    }

    public boolean isDelivered() {
        return isDelivered;
    }

    public void setDelivered(boolean delivered) {
        isDelivered = delivered;
    }

    public Route getRoute() {
        return route;
    }

    public void setRoute(Route route) {
        this.route = route;
    }
}
