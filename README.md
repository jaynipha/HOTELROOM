    THIS APP IS CONNECTED TO MONGODB ONLINE
    YOU NEED POSTMAN TO TEST IT OUT

> Simple demonstration of Creating , Reading, Updating and Deleting Api data from MongoDb

## Prerequisites:

npm/nodejs latest version
REST Client Extension for Visual Studio OR POSTMAN

## Technologies used:

### 1. Backend

- Nodejs
- ExpressJs
- MongoDb

### 2. For Api testing

- Rest Client

## Dependency install

```
npm install --save
```

Dependencies are:

> express, cors, nodemon, mongoose, dotenv, helmet

## Run Project

```
npm run start
```

Or

```
nodemon app.js
```

## Rest Client Api testing (POSTMAN)

### Reading API ENDPOINTS

###

// GET all room TYPES
GET http://localhost:4000/api/v1/rooms-types
Content-Type: application/json
//this will show you all rooms in the database. you can copy out an id for testing out subsequent endpoints.

//GET room type by page. I implemented pagination.

GET http://localhost:4000/api/v1/rooms-types?page=1

//you can try between 1-5 to test it out. Note that it will return all room types as there are only
limited rooms(5) in the database, they fit into one page.
Content-Type: application/json

//GET ROOM BY SEARCHQUERY

GET http://localhost:4000/api/v1/rooms?search=Te&roomType=63e7eb04ef206a1625870807&minprice=4000&maxprice=8000000

\*the above link is an example. it can be tweaked and will still produce results

### Creating API ENDPOINTS

```
###
// create roomtype
POST http://localhost:4000/api/v1/rooms-types
Content-Type: application/json

{
    "title": "CRUD",
    "description": "Performing a CRUD operation using Nodejs, ExressJs and MongoDb"
}

###
```

### Updating API ENDPOINTS

// update room
//pick an id from the db to test

###

PATCH http://localhost:4000/api/v1/rooms/id
Content-Type: application/json

### Deleting API ENDPOINTS

//pick an id from the database to test this on postman
// delete room

###

DELETE http://localhost:4000/api/v1/rooms/id
Content-Type: application/json

```

```

# HOTELROOM
