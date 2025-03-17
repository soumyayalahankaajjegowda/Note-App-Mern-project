//importing Modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./router/router");

//Inititating Express
const app = express();

//Environment Variables
require("dotenv").config();

//connecting to Database
mongoose
 .connect(process.env.MONGO_URL)
.then((result) =>
  app.listen(process.env.PORT || 3000, () => {
    console.log("Connection to the Database was established!");
  })
)
 .catch((error) =>{console.log(error)});

 //Middlewares
 app.use(express.json()); //JSON parser
 app.use(express.urlencoded({ extended: true })); //URL Body parser

 //CORS
 app.use(
  cors({
    origin: "*",
    //credentials: true,
  })
 );

 //Routes
 const routes = require("./router/router");
 app.use(routes);