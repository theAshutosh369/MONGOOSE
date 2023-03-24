const mongoose = require("mongoose");
const express = require("express");
const { async } = require("rxjs");
const app = express();

mongoose
  .connect("mongodb://localhost:27017/vidyarthi") // it will create Vidyarthi named database
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
//   active: Boolean,
//   dateJoined: { type: Date, default: Date.now() }, // default value
//   div: {
//     type: Number,
//     default: 0,
//     min: 1,
//     max: 11,
//   }, // validations
});
// created the schema







// mongoose models provides an interface to the database for creating , updating and deleting records etc
// model create krna means collection create krna
// model name should always start with capital
const Students = new mongoose.model("bacche", studentSchema);
// collection ka nam bacches hoga ( mongoose apne aap plural kr dega means bacches krdega )







// inserting Document in the collection
function insertDocuments() {


    const ash = new Students({
      name: "ash",
      rollno: 33344,
      city: "delhi",
    //   active: true,
    //   dateJoined: Date.now(),
    //   div: 11,
    });

    // const arjun = new Students({
    //   name: "Arjun",
    //   rollno: 33340,
    //   city: "indraprasth",
    //   active: true,
    //   dateJoined: Date.now(),
    //   div: 8,
    // });

    // const bheem = new Students({
    //   name: "Bheem",
    //   rollno: 33320,
    //   city: "hastinapur",
    //   active: false,
    //   dateJoined: Date.now(),
    //   div: 10,
    // });

    // const yudhi = new Students({
    //   name: "Yudhishthir",
    //   rollno: 33310,
    //   city: "aryavart",
    //   active: true,
    //   dateJoined: Date.now(),
    //   div: 1,
    // });
    
    ash.save( (err , data)=>{
        console.log( err)
        console.log( data )
    } ); // waits till the document data gets added into database

}

insertDocuments();
// inserting documents








mongoose.connection.on("error", err => {
  console.log("err", err)
})

mongoose.connection.on("connected", ( res) => {
  console.log("mongoose is connected")
})
app.listen(9000, (err) => {
  console.log("connected to the server ");
  console.log(err);
});
