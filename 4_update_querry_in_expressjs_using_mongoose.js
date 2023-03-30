const mongoose = require("mongoose");
const { async } = require("rxjs");
mongoose.connect("mongodb://localhost:27017/vidyarthi");

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollno: Number,
  city: String,
});

const model = new mongoose.model("random", studentSchema);

// ---------------------------------------------------------------

async function updateDoc() {

    const random = await model.find()
    console.log( random )



  const up = await model.updateMany(
    { rollno : 12 },
    {
      $set: { name: "krishna", },
    },
    { new: true }  // without writing this line it wont show the updated values 
  );
  console.log(up);


  console.log("After updation ")
  const res = await model.find( );
  console.log(res);


}

updateDoc();
