
![image](https://github.com/GJaradat/parana_deliveries/assets/108727885/a0ffee2c-76f9-4ed6-991d-7bdcb6bdcb1c)

## Table of Contents 
1. [Introduction](#introduction)
2. [Technology](#technology)
3. [Installation instructions](#installation-instructions)
4. [MVP and Extensions](#mvp-and-extensions)
5. [Coming Soon](#coming-soon)
6. [Diagrams](#diagrams)
7. [API Routes Table](#api-routes-table)
8. [Other Deliverables](#other-deliverables)
9. [Credits and Acknowledgements](#credits-and-acknowledgements)

## Introduction
The aim of this project is to create a logistics application for a (fictional) online retailer called Paraná. The main features are managing vehicles and deliveries, and generating routes for distribution of deliveries. Routes are generated dynamically based on the locations of deliveries, with the help of MapBox Optimisation API v1. This was created as a final project for the 13th cohort of the [Bright Network Technology Academy](https://techacademy.brightnetwork.co.uk/).

## Technology
Purpose of Technology usage: The objective is to enhance learning and skill development as an integral component of the bootcamp experience hence why the following technologies were used.
### Tech Stack
- Java
- SpringBoot
- PostgreSQL Database
- JavaScript
- HTML
- CSS
- React

### SpringBoot Configuration:
- Maven Project
- Spring Boot: Ver. 3.2.3
- Spring Boot Dev Tools
- Spring Web
- PostgreSQL Driver
- Spring Data JPA

### React Libraries Used:
- react-router-dom
- react-modal

### External APIs Used
1. [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/api/) to display the maps which can display markers of delivery locations.
2. [Optimization API v1](https://docs.mapbox.com/api/navigation/optimization-v1/#example-request-retrieve-an-optimization) to calculate the shortest distance of a given route.

Please note that to use these APIs you need to create an account on the Mapbox website and create an access token. 
For instructions on generating a token, click [here](https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/).

For a tutorial of the MapBox GL JS API, click [here](https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/).

For a tutorial of the MapBox Optimisation API v1, click [here](https://docs.mapbox.com/help/tutorials/optimization-api/).

## Installation Instructions
- In the terminal, navigate to the directory you want to copy the repository into. 
- Run the command `git clone git@github.com:GJaradat/parana_deliveries.git`
- Run the command `git pull` to ensure you have the latest version.
  
(backend setup)
1. Install Postman, Postico, PostgreSQL, and your preferred IDE.
2. Open the server directory in your preferred IDE (we used IntelliJ).
3. In the terminal, create the linked database by running the command `createdb deliveries_db`.
4. Run the server.

(frontend setup)
1. Download Node.js.
2. Open the client directory in your preferred IDE (we used VSCode).
3. In the client folder, create the file .env
4. In the .env file paste the code `REACT_APP_MAPBOX_KEY = [your mapbox access key here]`.
5. In the terminal, run the command `npm i`.
6. In the terminal, run the command `npm i mapbox-gl`.
7. Run the frontend application by entering the command `npm start` in the termainal.

## MVP and Extensions
### MVP
**(Backend)**
- Display all Trucks
- Display a specified Truck
- Update the availability status of a Truck (```IN_DEPOT```/```OUT_FOR_DELIVERY```/```UNDER_MAINTENANCE```)
- Display all delivery Routes
- Display a specified delivery Route
- Update the status of a Route (```IN_PROGRESS```/```COMPLETE```)
- Add a new Route
- Generate routes via a clustering algorithm
- Display all Delivery locations
- Display a specifed Delivery location

**(Frontend)**
- HomePage: localhost:3000/ OR localhost:3000/home
   - User can navigate to other pages
- Delivery Fleet Page: localhost:3000/fleet
   - User can see all vehicles and their details
   - User can search for vehicles by name
   - User can filter vehicles by availability status
   - User can edit the availability status of a vehicle
- Delivery Routes Page: localhost:3000/routes
   - User can see all routes and their details
   - User can search for routes by the name of their assigned vehicle
   - User can filter routes by status
   - User can edit the status of a route

### Extensions
**(Backend)**
- Update the status of a delivery
- Add a new delivery
- Add vehicles
  
**(Frontend)**
- Delivery Fleet Page: localhost:3000/fleet
  - User can add a new vehicle 
- Delivery Routes Page: localhost:3000/routes
  - Use maps to visualise the individual routes
  - Map points are colour coded based on the status of the delivery
- Delivery Page: localhost:3000/deliveries
  - User can view all deliveries on a map
  - Map points are colour coded based on the status of the delivery
 
  ## COMING SOON
  **(Backend)**
  - Delete vehicles
  - Add/Delete vehicles based on demand
  - Display all packages
  - Display a specified package
  - Display a delivery's packages
  - Route assigning to a vehicle now accounts for the maximum weight capacity of that vehicle
  **(Frontend)**
    - Use external API to dynamically generate the routes instead of the clustering algorithm, allowing for greater accuracy
    - Delivery Page: localhost:3000/deliveries
      - User can filter deliveries by package to enable package tracking

## Diagrams
### Wireframes
![wireframes](https://github.com/GJaradat/parana_deliveries/assets/108727885/37ac3e77-fd05-442a-a07a-bc49b044a633)

### Component Diagram
![component_diagram](https://github.com/GJaradat/parana_deliveries/assets/149251586/cfede41e-5a43-4731-9d06-6a1d0b07a5af)

### UML Diagram
![uml](https://github.com/GJaradat/parana_deliveries/assets/108727885/51a6880b-c9ec-42e0-8d0a-9243f2ceb45d)

### Entity Relationship Diagram
![ERD](https://github.com/GJaradat/parana_deliveries/assets/108727885/93142e12-db5b-47e6-9921-a56c3bb9ecbc)

## API Routes Table

### Trucks
|        | URL                              | Method  | Description                              | Example Request Body                       | Example Response |
|--------|:--------------------------------:|:-------:|:-----------------------------------------|--------------------------------------------|------------------|
| INDEX  | localhost:8080/trucks            | GET     | Returns all Truck entities               | N/A                                        | |
| SHOW   | localhost:8080/trucks/:id        | GET     | Returns Truck entity with matching id    | N/A                                        | | 
| UPDATE | localhost:8080/trucks/:id/status | PATCH   | Changes ```availability``` property of a Truck | ```"OUT_FOR_DELIVERY"```                   | ```{"id": 1, "name": "Sloth", "imageURL":"https://...", "capacity": 2000, "availability": "OUT_FOR_DELIVERY", "routes": [...]}```|
| CREATE | localhost:8080/trucks            | POST    | Creates new Truck                        | ```{"name": "Piranha", "imageURL": "https://exampleImage.jpg", "capacity": 1000}```|  ```{"id": 8, "name": "Piranha", "imageURL":"https://exampleImage.jpg", "capacity": 1000, "availability": "IN_DEPOT", "routes": []}```|

### Routes
|        | URL                              | Method  | Description                                                            | Example Request Body | Example Response |
|--------|:--------------------------------:|:-------:|:-----------------------------------------------------------------------|--------------------------------------------|------------------|
| INDEX  | localhost:8080/routes            | GET     | Returns all Route entities                                             | N/A                  |  |
| SHOW   | localhost:8080/routes/:id        | GET     | Returns Route entity with matching id                                  | N/A                  |  | 
| UPDATE | localhost:8080/routes/:id/status | PATCH   | Changes ```status``` property of a Route                               | ```"COMPLETED"```    | ```{"id": 1, "deliveries": [...], "truck": {...}, "status": "COMPLETED"}``` |
| CREATE | localhost:8080/routes            | POST    | Creates new Route and assigns it to a Truck that had an ```IN_DEPOT``` availability | N/A                  |  ```{"id": 7, "deliveries": [...], "truck": {...}, "status": "IN_PROGRESS"}```|
| generate routes       | localhost:8080/routes/generateRoutes    | POST    | Clusters all undelivered deliveries and assigns them to a newly generated Route entity | N/A | ```[ {"id": 1, "deliveries": [...], "truck": {...}, "status": "IN_PROGRESS"}, ... ]``` |

### Deliveries
|        | URL                           | Method  | Description                                                          | Example Request Body | Example Response |
|--------|:-----------------------------:|:-------:|:---------------------------------------------------------------------|----------------------|------------------|
| INDEX  | localhost:8080/deliveries     | GET     | Returns all Delivery entities                                        | N/A                  |                  |
| SHOW   | localhost:8080/deliveries/:id | GET     | Returns Delivery entity with matching id                             | N/A                  |                  | 
| UPDATE | localhost:8080/deliveries/:id | PATCH   | Toggles ```isDelivered``` property between ```true``` and ```false```| N/A                  | ```{"id": 8, "route": {...}, "location": {...}, "delivered":" true}```|
| CREATE | localhost:8080/deliveries     | POST    | Creates new Delivery and assigns it to the location with the id given in the request body| ```5```|```{"id":50, "route": {}, "location": {"id": 5,...}, "delivered": false```|
| DELETE | localhost:8080/deliveries/:id | DELETE  | Deletes Delivery entity with matching id                             | N/A                  | ```1``` (id of deleted Delivery)|

### Locations
|        | URL                           | Method  | Description                 | Example Request Body                                                               | Example Response |
|--------|:-----------------------------:|:-------:|:----------------------------|------------------------------------------------------------------------------------|------------------|
| POST   | localhost:8080/locations      | POST    | Creates new Location entity | ```{"address": "Hightown Street", "latitude": 51.888808, "longitude": -0.403725}```| ```{"id":40, "address": "Hightown Street", "latitude": 51.888808, "longitude": -0.403725}```|


## Other Deliverables
These can be found in the Project_Deliverables folder and contain the following:
- Business Case
- Risk Register

## Retrospectives
![image](https://github.com/GJaradat/parana_deliveries/assets/108727885/14f2586b-6533-4ffa-8cc7-901d8402ded8)

![image](https://github.com/GJaradat/parana_deliveries/assets/149251586/80683cfd-fa3b-48a0-86ef-abe18d5463a4)

## Credits and Acknowledgements
**Project Team**
- Gabriel Dzharadat (https://github.com/GJaradat))
- Kajanan Lingkeswaran(https://github.com/KajananGit)
- Leila Peltier (https://github.com/L1ly-42)
- Yeabsira Negash (https://github.com/Y-Negash)
- Zarrin Rahman (https://github.com/z-for-zarrin)
