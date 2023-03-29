const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose
  .connect("mongodb://localhost:27017/vidyarthi") // it will create Vidyarthi named database jo bhi 27017/ ke age name hoga wohi database ka name hoga 
  .then(() => console.log("connected to the database vidyarthi "))
  .catch((err) => console.log(err));



// Mongoose schema defines the structure of documents in collections
// it can contain default values , validations etc

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true, // means name field to enter krna hi padega
  },
  rollno: Number,
  city: String,
});
// created the schema






// mongoose models provides an interface to the database for creating , updating and deleting records etc
// model create krna means collection create krna
const model = new mongoose.model("random", studentSchema);
// collection ka nam random hoga ( mongoose apne aap plural kr dega means randoms krdega )






// inserting multiple Documents in the collection
async function insertDocuments() {
  try {
    const ash = new model({
      name: "ash",
      rollno: 10,
      city: "solapur",
    });

    const rohan = new model({
      name: "rohan",
      rollno: 11,
      city: "nanded",
    });

    const ram = new model({
      name: "ram",
      rollno: 12,
      city: "bid",
    });

    const raju = new model({
      name: "raju",
      rollno: 13,
      city: "mumbai",
    });

    const data = await model.insertMany( [ash , rohan , ram , raju ])   // jitne instances banaye h unka array pass krdo 
    console.log( data )



  } catch (err) {
    console.log(err);
  }
}


insertDocuments();
// call for inserting documents









mongoose.connection.on("error", (err) => {
  console.log("err", err);
});

mongoose.connection.on("connected", (res) => {
  console.log("mongoose is connected");
});
app.listen(3000, (err) => {
  console.log("connected to the server ");
  console.log(err);
});





// Mongodb compass use kriye databases handle krne ke liye thapa technical ka mongodb compass vdo hai refer kriye