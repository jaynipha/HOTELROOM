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

// GET http://localhost:4000/api/v1/rooms-types
The above link can be used to get all room types

//GET room type by page. I implemented pagination as well

GET http://localhost:4000/api/v1/rooms-types?page=1

//you can try between 1-5 to test it out. Note that it will return all room types as there are only
limited rooms(5) in the database, they fit into one page.
Content-Type: application/json

//GET ROOM BY SEARCH
this is an example of the request body to find a roomtype and name
//{

"name":"SouthAmerica",
"type": "penthouse",
"minimum": 3000,
"maximum":150000
}

GET http://localhost:4000/api/v1/rooms

\*the above link is an example. it can be tweaked and will still produce results...

### Creating API ENDPOINTS

```
###
```

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
```

PATCH http://localhost:4000/api/v1/rooms/id
Content-Type: application/json

### Deleting API ENDPOINTS

//pick an id from the database to test this on postman
// delete room

###

```

DELETE http://localhost:4000/api/v1/rooms/id
Content-Type: application/json

```

```

# HOTELROOM

# HOTELROOM

```
