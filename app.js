

const express = require("express")
const mongoose = require("mongoose")
const app = express()

mongoose.connect( "mongodb://localhost:27017/fruitsdb" , 
    {
    useNewUrlParser: true,
   } 
)

const fruitSchema = new mongoose.Schema(
    {
    name:{
        type:String,
        // validations
        // required:[true , "please check your data entry ! no name specified "]
    },
    rating:{
        type:Number,
        // validations
        min: 1, 
        max: 10
    },
    review:String
})


const personSchema = new mongoose.Schema(
    {
    name:String ,
    age:Number ,
    gender:String ,
    favfruit: fruitSchema
})

const Fruit = mongoose.model("Fruit" , fruitSchema )
const Person = mongoose.model("Person" , personSchema )


const apple = new Fruit({
    name:"apple" ,
    rating:7 ,
    review:"wow great fruit"
})

const mango = new Fruit({
    name:"mango" ,
    rating:8 ,
    review:"SWeet ha bhai"
})


const banana = new Fruit({
    name:"banana" ,
    rating:10 ,
    review:"yellow in color"
})


const kiwi = new Fruit({
    name:"kiwi" ,
    rating:9 ,
    review:"healthy"
})

const guava = new Fruit({
    rating: 6 ,
    review:"random"
})




// embedding two schemas 
const rohan = new Person({
    name:"rohan" , 
    age:20 ,
    gender:"male" ,
    favfruit: apple
    // apple is a fruitschema object and is given as value to favfruit of rohan
})


// updating database using mangoose 

// Fruit.updateOne( {name:null} , {name:"guava"} , function(err){
//     if( err ) {
//         console.log("Error hai re baba");
    
//     }
//     else{
//         console.log("succesfully updated ! ");
//     }
// })


// // deleting row in database using mangoose 

// Fruit.deleteOne( {name:"guava"} , function( err ){
//     if( err )
//     {
//         console.log("error hai bhai ! ");
//     }
//     else{
//         console.log("successfully deleted ! ");
//     }
// })

// // printing data from database in nodejs  using mongoose 

// Fruit.find( function( err , fruits)
// {
//     if( err ){
//         console.log(err)
//     }
//     else{

//         var f = fruits
//         for( i =0 ; i<f.length ; i++)
//         {
//             console.log(fruits[i].name)
//         }
//     }
// })



// msg for connection with mongoose

// mongoose.connection.on("error", err => {
//   console.log("err", err)
// })

// mongoose.connection.on("connected", (err, res) => {
//   console.log("mongoose is connected")
// })

// app.listen(3000, () => { 
//   console.log("app is listening to PORT 3000")
// })





