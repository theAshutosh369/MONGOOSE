const mongoose = require("mongoose");
// required mongoose for databases

const express = require("express");
const app = express();
// for server

mongoose
  .connect("mongodb://localhost:27017/random")
  .then(() => console.log("connecteddddddd to the database ")) // success zal ki kay karaych tyastahi then
  .catch((err) => console.log(err)); // fail kinva error ale tr kay karaych tyasathi catch

// to connect the mongoose database named random to localhost:27017
// random is database name. it will create new database if its present then performs operations on it 


app.listen(  9000 , (err, res) => {
  console.log( 'connected to the server ');
  console.log( err )
});
// msg after creating server
