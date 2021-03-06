# ALTEN-AUTO
[![Build Status](https://travis-ci.com/abdelrahman-mustafa/ALTEN-AUTO.svg?branch=master)](https://travis-ci.com/abdelrahman-mustafa/ALTEN-AUTO)

Smart Vehicles monitoring system tracks the connectivity of all vehicles and displys their status through a web app.
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.




## System Architecure 
The main structure is inspired by "12 Factory app" microservice framework 

![Services Architecture](/structure/Alten-Veh.png)


## The Serverless Architecture 

![Cloud Architecture](/structure/ALten-Serv.png)

## Running the system


```
docker-compose  build 

docker-compose up -d 
```
Then you can open the web page by open the browser with 

```
localhost:80 
```

## Running the tests

The test structure depends on mocha strategy integrated with Travis CI. The built tests are functional test cases. you can find the main test function within "helper" folder. 
The start point is at test folder with index.js 

```
npm i 
node test/index.js
Or 
npm test
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available.

