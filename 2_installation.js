
// WORKING WITH MONGODB


// to check the version of mongodb enter following command in terminal
// mongo --version
// mongod --version

// to start working with mongodb enter in terminal
// mongo
// show dbs ( to show the databases )
// use dbName ( to use the existing database or creating new database )
// db   ( to check currently working database )



// adding collections into database
db.collectionName.insertOne({
  name: "ashutosh",
  rollno: 33306,
  city: "solapur",
});

db.collectionName.insertMany([
  {
    name: "ashutosh",
    rollno: 33306,
    city: "solapur",
  },
  {
    name: "rohan",
    rollno: 33389,
    city: "nashik",
  },
]);

// to show the all collections in database
// show collections

// to show the data in collections
// db.collectionName.find()             ( ekach line madhe dakhvel )
// db.collectionName.find().pretty()    ( object form madhe dakhvel )












// in terminal you can add documents like this
// inserting only one document
db.collectionName.insertOne({
  name: "ashutosh",
  rollno: 33306,
  city: "solapur",
});

// inserting more than one document
db.collectionName.insertMany([
  {
    name: "ashutosh",
    rollno: 33306,
    city: "solapur",
  },
  {
    name: "rohan",
    rollno: 33389,
    city: "nashik",
  },
]);











// reading data from the collections
// read all the documents
db.collectionName.find().pretty();

// selecting particular document using query
db.collectionName.find({ name: "ashutosh" }).pretty();

// projection
db.collectionName.find({ name: "ashutosh" }, { city: 0 }).pretty(); // sirf id name aur rollno dikhayega city nahi kyunki city ko 0 mark kiya h
db.collectionName.find({ name: "ashutosh" }, { name: 1 }).pretty(); // sirf id aur name dikhayega . by default id dikhata hi hai
db.collectionName.find({ name: "ashutosh" }, { _id: 0, name: 1 }).pretty(); // sirf name dikhayega

// limit function
db.collectionName.find({ class: "te11" }).pretty().limit(3); // jitne bhi result ayenge jinke class te11 honge unme se bs 3 hi dikhayega













// updating in collections using mongodb
// updating only one document
db.collectionName.updateOne(
  { name: "ashutosh" },                        // filter query
  { $set: { rollno: 33310, city: "nanded" } }  // updating fields 
);

// updating many elements
db.collectionName.updateMany(
  { name: "ashutosh" },                         // filter query
  { $set: { rollno: 33310, city: "nanded" } }   // updating fields
);








// Deleting documents from the collections

db.collectionName.deleteMany( { rollno:33310 } )  // deletes the document containing rollno=33310 

db.collectionName.deleteMany( {} )  // deletes all the documents from the collections



