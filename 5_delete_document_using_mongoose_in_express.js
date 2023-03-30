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

async function deleteDocument() {

  console.log("All the data ");
  const n1 = await model.find();
  console.log(n1);


  const del = await model.deleteMany({ name:'ash' } );
  console.log(del);


  console.log(" \n \n \n After deletion ");
  const res = await model.find();
  console.log(res);

}

deleteDocument();
