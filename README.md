# [CAPSTONE PROJECT NAME HERE]
![image](https://github.com/GJaradat/parana_deliveries/assets/108727885/a0ffee2c-76f9-4ed6-991d-7bdcb6bdcb1c)



## Table of Contents 
1. [Introduction](#introduction)
2. [Technology](#technology)
3. [Installation instructions](#installation-instructions)
4. [Diagrams](#diagrams)
5. [MVP and Extensions](#mvp-and-extensions)
6. [API Routes Table](#api-routes-table)
7. [Credits and Acknowledgements](#credits-and-acknowledgements)

## Introduction

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
- Open the server directory in your preferred IDE (we used IntelliJ).
- In the terminal, create the linked database by running the command `createdb deliveries_db`.
- Run the server.

(frontend setup)
- Open the client directory in your preferred IDE (we used VSCode).
- In the client folder, create the file .env
- In the .env file paste the code `REACT_APP_MAPBOX_KEY = [your mapbox access key here]`.
- In the terminal, run the command `npm i`.
- In the terminal, run the command `npm i mapbox-gl`.
- Run the frontend application by entering the command `npm start` in the termainal.

## Diagrams
### Wireframes
### UML Diagram
### Entity Relationship Diagram

## MVP and Extensions
### MVP
**(Backend)**
- Display all vehicles
- Display a specified vehicle
- Update the availability status of a vehicle (In Depot/Out For Delivery/Under Maintenance)
- Display all delivery routes
- Display a specified delivery route
- Update the status of a route (Pending/In Progress/Complete)
- Add a new route
- Display all Delivery locations
- Display a specifed delivery location

**(Frontend)**
- HomePage: localhost:3000/ OR localhost:3000/home
   - User can navigate to other pages
- Delivery Fleet Page: localhost:3000/fleet
   - User can see all vehicles and their details
   - User can search for vehicles by name
   - User can filter vehivles by availability status
- Delivery Routes Page: localhost:3000/fleet
   - User can see all routes and their details
   - User can search for routes by the name of their assigned vehicle
   - User can filter routes by status
- Add Basic CSS Styling to the webpages
  
(use external API to dynamically generate routes and display them on a map) - COMING SOON

### Extensions

## API Routes Table

## Credits and Acknowledgements
**Project Team**
- Gabriel Dzharadat (https://github.com/GJaradat))
- Kajanan Lingkeswaran(https://github.com/KajananGit)
- Leila Peltier (https://github.com/L1ly-42)
- Yeabsira Negash (https://github.com/Y-Negash)
- Zarrin Rahman (https://github.com/z-for-zarrin)
