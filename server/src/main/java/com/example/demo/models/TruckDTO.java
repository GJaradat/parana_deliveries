package com.example.demo.models;

public class TruckDTO {

    private String name;
    private String imageURL;
    private int capacity;

    public TruckDTO() {}

    public TruckDTO(String name, String imageURL, int capacity) {
        this.name = name;
        this.imageURL = imageURL;
        this.capacity = capacity;
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

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }
}
