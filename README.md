# RESTAPI - USER SERVER APP.

RESTful API for USER Clien APP built with Node.js, Express.js, Mongoose and MongoDB.

## RESTful API endpoints

### GET `/importData`

1.Fetching user data from https://gorest.co.in/public/v1/users
2.Drop old users from DB
3.Updating fetched users in users collection

+ Method: `GET`
+ URL: `/importData`

### GET `/users`

Get all users.

+ Method: `GET`
+ URL: `/users`


### GET `/api/user/:id`

Get user with specific id.

+ Method: `GET`
+ URL: `/user/10`

### PUT `/user/:id`

Update entire user with specific id.

+ Method: `PUT`
+ URL: `/user/10`
+ Body:

```json
{"id":25,"name":"Agneya Mahajan",
"email":"agneya_mahajan@erdman.name",
"gender":"female","status":"inactive"}

```

### PUT `/export`

Export entire user data .

+ Method: `get`
+ URL: `/export`

-------------------------------------
## Installed npm packages
1.express
2.body-parser   
3.cors
4.json2csv
5.mongoose
6.request


## To Install packages

`npm install`

## Run

0. Make sure MongoDB is running
1. `npm start`


## DB Queries used 

0.for getting all user data
   users.find()
1.for update specigic user data
  users.findOne({id:id}) and users.save()
2.To drop yhe collection
  dropCollection() 
3.To insert all user from ttps://gorest.co.in/public/v1/users
  users.insertMany()

