package com.example.demo.models;

import java.util.ArrayList;

public class ClusterDTO {

    private Double[] centroid;
    private ArrayList<Delivery> deliveries;
    private boolean sizeAllowed;

    public ClusterDTO(){}

    public ClusterDTO(Double[] centroid) {
        this.centroid = centroid;
        this.deliveries = new ArrayList<>();
        this.sizeAllowed = false;
    }

//    GETTERS & SETTERS

    public Double[] getCentroid() {
        return centroid;
    }

    public void setCentroid(Double[] centroid) {
        this.centroid = centroid;
    }

    public ArrayList<Delivery> getDeliveries() {
        return deliveries;
    }

    public void setDeliveries(ArrayList<Delivery> deliveries) {
        this.deliveries = deliveries;
    }

    public boolean isSizeAllowed() {
        return sizeAllowed;
    }

    public void setSizeAllowed(boolean sizeAllowed) {
        this.sizeAllowed = sizeAllowed;
    }

    //    ADDITIONAL METHODS
    public void addDelivery(Delivery delivery) {
        this.deliveries.add(delivery);
        if(this.deliveries.size() < 11){
            this.sizeAllowed = true;
        }
    }

    public double calculateDistance(Location location) {
        return Math.sqrt(Math.pow(centroid[0] - location.getLatitude(), 2)
                        + Math.pow(centroid[1] - location.getLongitude(), 2));
    }

    public Double[] calculateAveragePoint() {
        double latSum = 0, lngSum = 0;
        for(Delivery delivery : this.deliveries){
            latSum += delivery.getLocation().getLatitude();
            lngSum += delivery.getLocation().getLongitude();
        }
        double latAverage = latSum / this.deliveries.size();
        double lngAverage = lngSum / this.deliveries.size();
        return new Double[]{latAverage, lngAverage};
    }

}
