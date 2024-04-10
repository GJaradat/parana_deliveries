package com.example.demo.models;

import jakarta.persistence.*;

@Entity
@Table(name = "deliveries")
public class Delivery {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private int package;

    @ManyToOne
    @JoinColumn(name = "location_id")
    @Json





    @Column(name = "is_delivered")
    private boolean isDelivered;
}
