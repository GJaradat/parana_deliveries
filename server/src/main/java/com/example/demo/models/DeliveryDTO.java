package com.example.demo.models;

public class DeliveryDTO {
    private long routeId;
    private long locationId;
    private boolean isDelivered;

    public DeliveryDTO(){}

    public DeliveryDTO(long locationId){
        this.locationId = locationId;
        this.isDelivered = false;
    }

    public long getLocationId() {
        return locationId;
    }

    public void setLocationId(long locationId) {
        this.locationId = locationId;
    }

    public boolean isDelivered() {
        return isDelivered;
    }

    public void setDelivered(boolean delivered) {
        isDelivered = delivered;
    }

    public long getRouteId() {
        return routeId;
    }

    public void setRouteId(long routeId) {
        this.routeId = routeId;
    }
}
