# ALTEN-AUTO

Smart Vehicles monitoring system tracks the connectivity of all vehicles and displys their status through a web app.
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.



## System Architecure 
The main structure is inspired by "12 Factory app" microservice framework 

![Image description](https://github.com/abdelrahman-mustafa/ALTEN-AUTO/tree/master/structure/Alten-Veh.png)


The Serverless Architecture 

![Image description](https://github.com/abdelrahman-mustafa/ALTEN-AUTO/tree/master/structure/Alten-Serv.png)

## Running the system


```
docker-compose up -d 
```

## Running the tests

The test structure depends on mocha strategy. The built tests are functional test cases. you can find the main test function within "helper" folder. 
The start point is at test folder with index.js 

```
npm i 
node test/index.js
Or 
npm test
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available.

