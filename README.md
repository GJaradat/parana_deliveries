
![image](https://github.com/GJaradat/parana_deliveries/assets/108727885/a0ffee2c-76f9-4ed6-991d-7bdcb6bdcb1c)

## Table of Contents 
1. [Introduction](#introduction)
2. [Technology](#technology)
3. [Installation instructions](#installation-instructions)
4. [MVP and Extensions](#mvp-and-extensions)
5. [Diagrams](#diagrams)
6. [API Routes Table](#api-routes-table)
7. [Other Deliverables](#other-deliverables)
8. [Credits and Acknowledgements](#credits-and-acknowledgements)

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
- *react-modal(?)*

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
- Update the availability status of a Truck (In Depot/Out For Delivery/Under Maintenance)
- Display all delivery Routes
- Display a specified delivery Route
- Update the status of a Route (```PENDING```/```IN_PROGRESS```/```COMPLETE```)
- Add a new Route
- Display all Delivery locations
- Display a specifed Delivery location

**(Frontend)**
- HomePage: localhost:3000/ OR localhost:3000/home
   - User can navigate to other pages
- Delivery Fleet Page: localhost:3000/fleet
   - User can see all vehicles and their details
   - User can search for vehicles by name
   - User can filter vehicles by availability status
   - User can edit the availability ststus of a vehicle (COMING SOON)
- Delivery Routes Page: localhost:3000/routes
   - User can see all routes and their details
   - User can search for routes by the name of their assigned vehicle
   - User can filter routes by status
   - User can edit the status of a route (COMING SOON)
- Add Basic CSS Styling to the webpages
  
(use external API to dynamically generate routes and display them on a map) - COMING SOON

### Extensions
**(Backend)**
- Add/Delete vehicles based on demand
- Display all packages
- Display a specified package
- Update the status of a delivery
- Display a delivery's packages
- Add a new delivery
- Route assigning to a vehicle now accounts for the maximum weight capacity of that vehicle

**(Frontend)**
- Delivery Fleet Page: localhost:3000/fleet
  - Display the page as a series of dropdown menus that will open up to show more information about the selected vehicle
- Delivery Routes Page: localhost:3000/routes
  - Use maps to visualise the individual routes
- Delivery Page: localhost:3000/deliveries
  - User can view all deliveries 
  - User can filter deliveries by package to enable package tracking
  - User can view past deliveries via status filtering

## Diagrams
*(Preliminary)*
*(TODO: Wireframes and Component Diagram)*
### Wireframes
### Component Diagram
### UML Diagram
![image](https://github.com/GJaradat/parana_deliveries/assets/108727885/a5d06a99-7969-4b34-bdad-7321dbe691bb)

### Entity Relationship Diagram
![image](https://github.com/GJaradat/parana_deliveries/assets/108727885/49960a12-3adf-4967-a71c-1985b945ab5b)

## API Routes Table

### Trucks
|        | URL                              | Method  | Description                              | Example Request Body                       | Example Response |
|--------|:--------------------------------:|:-------:|:-----------------------------------------|--------------------------------------------|------------------|
| INDEX  | localhost:8080/trucks            | GET     | Returns all Truck entities               | N/A                                        | |
| SHOW   | localhost:8080/trucks/:id        | GET     | Returns Truck entity with matching id    | N/A                                        | | 
| UPDATE | localhost:8080/trucks/:id/status | PATCH   | Changes ```availability``` property of a Truck | ```"OUT_FOR_DELIVERY"```                   | ```{"id": 1, "name": "Sloth", "imageURL":"https://...", "capacity": 2000, "availability": "OUT_FOR_DELIVERY", "routes": [...]}```|
| CREATE | localhost:8080/trucks            | POST    | Creates new Truck                        | ```{"name": "Piranha", "capacity": 1000}```|  ```{"id": 8, "name": "Piranha", "imageURL":"https://...", "capacity": 1000, "availability": "IN_DEPOT", "routes": []}```|

### Routes
|        | URL                              | Method  | Description                                                            | Example Request Body                       | Example Response |
|--------|:--------------------------------:|:-------:|:-----------------------------------------------------------------------|--------------------------------------------|------------------|
| INDEX  | localhost:8080/routes            | GET     | Returns all Route entities                                             | N/A                                        |  |
| SHOW   | localhost:8080/routes/:id        | GET     | Returns Route entity with matching id                                  | N/A                                        |  | 
| UPDATE | localhost:8080/trucks/:id/status | PATCH   | Changes ```status``` property of a Route                                     | ```"COMPLETED"```                          | ```{"id": 1, "deliveries": [...], "truck": {...}, "status": "COMPLETED"}``` |
| CREATE | localhost:8080/trucks            | POST    | Creates new Route and assigns a Truck with ```IN_DEPOT``` availability | N/A                                        |  ```{"id": 7, "deliveries": [], "truck": {...}, "status": "PENDING}```|
|        | localhost:8080/generateRoutes    | POST    | Clusters all undelivered deliveries and assigns them to a newly generated Route entity | N/A | ```[ {"id": 1, "deliveries": [...], "truck": {...}, "status": "IN_PROGRESS"}, ... ]``` |

### Deliveries
|        | URL                           | Method  | Description                                   | Example Request Body | Example Response |
|--------|:-----------------------------:|:-------:|:----------------------------------------------|----------------------|------------------|
| INDEX  | localhost:8080/deliveries     | GET     | Returns all Delivery entities                 | N/A                  | |
| SHOW   | localhost:8080/deliveries/:id | GET     | Returns Delivery entity with matching id      | N/A                  | | 
| UPDATE | localhost:8080/deliveries/:id | PATCH   | Sets ```isDelivered``` property to ```true``` | N/A                  | ```{"id": 8, "route": {...}, "location": {...}, "delivered":" true}```|
| CREATE | localhost:8080/trucks         | POST    | Creates new Delivery                          | ```5```              |  ```{"id":50, "route": {}, "location": {"id": 5,...}, "delivered": false```|
| DELETE | localhost:8080/deliveries/:id | DELETE  | Deletes Delivery entity with matching id      | N/A                  | ```1``` (id of deleted Delivery)|

### Locations
|        | URL                           | Method  | Description                 | Example Request Body                                                               | Example Response |
|--------|:-----------------------------:|:-------:|:----------------------------|------------------------------------------------------------------------------------|------------------|
| POST   | localhost:8080/locations      | POST    | Creates new Location entity | ```{"address": "Hightown Street", "latitude": 51.888808, "longitude": -0.403725}```| ```{"id":40, "address": "Hightown Street", "latitude": 51.888808, "longitude": -0.403725}```|


## Other Deliverables
These can be found in the projectDeliverables folder and contain the following:
- Business Case
- Risk Register
- Retrospectives

## Credits and Acknowledgements
**Project Team**
- Gabriel Dzharadat (https://github.com/GJaradat))
- Kajanan Lingkeswaran(https://github.com/KajananGit)
- Leila Peltier (https://github.com/L1ly-42)
- Yeabsira Negash (https://github.com/Y-Negash)
- Zarrin Rahman (https://github.com/z-for-zarrin)
