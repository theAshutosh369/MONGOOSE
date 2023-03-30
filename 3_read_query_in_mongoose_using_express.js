const mongoose = require("mongoose");

// connection to the database
mongoose.connect("mongodb://localhost:27017/vidyarthi");

// schema
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollno: Number,
  city: String,
});

// model
const model = new mongoose.model("random", studentSchema);

// reading data from collection name random
async function getdata() 
{

  const result = await model.find( { name:'ash'} ).select( {name:0} )  // returns only ash's informatione except his name
  console.log( result )

  // const random = await model.find();  // returns all the documents
  // console.log( random )

  // console.log("COMPARISON OPERATOR - GREATER THAN")
  // const n1 = await model.find( { rollno: {$gt : 12}})
  // console.log( n1 )

  // console.log("COMPARISON OPERATOR - IN");
  // const n2 = await model.find( { name : {$in : ['ash' , 'rohan']}})
  // console.log( n2 )

  // console.log("LOGICAL OPERATOR - AND ");
  // const n3 = await model.find({ $and : [ {name:"ram"} , {rollno:12 }] });
  // console.log(n3);

  // console.log("LOGICAL OPERATOR - OR ");
  // const n4 = await model.find({ $or : [{ name: "ram" }, { city:"nanded" }] });
  // console.log(n4);

  // console.log("Counting documents  ");
  // const n5 = await model.find({ name: "ram" }).countDocuments();
  // console.log(n5);

  // console.log("Ascending order by name");
  // const n6 = await model.find().sort({name:1});  // name : 1 means ascending order 
  // console.log(n6);

  //  console.log("descending order by name");
  //  const n7 = await model.find().sort({name:-1}); // name : -1 means descending order
  //  console.log(n7);



}

// calling getdata
getdata();
 