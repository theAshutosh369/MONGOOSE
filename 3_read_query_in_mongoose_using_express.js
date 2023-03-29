

const mongoose = require('mongoose')

// connection to the database
mongoose.connect( "mongodb://localhost:27017/vidyarthi" )



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
    const result = await model.find( { name:'ash'} ).select( {name:0} )
    console.log( result )
} 



// calling getdata 
getdata()






