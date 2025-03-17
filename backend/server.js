//importing Modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//Inititating Express
const app = express();

//Environment Variables
requirw("dotenv").config();

//connecting to Database
mongoose
 .connect(process.env.dbURL, {
  useNewUrIParser: true,
  useUnifiedTopology: true,
 })
.then((result) =>
  app.listen(process.env.PORT || 3000, () => {
    console.log("Connection to the Database was wstablished!");
  })
)
 .catch((error) => console.log(error));

 //Middlewares
 app.use(expree.json()); //JSON parser
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