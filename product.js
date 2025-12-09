const mongoose = require('mongoose');

main().catch(err => console.log("Connection error:", err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/shopApp');
  console.log("Database connected successfully!")};

  // up here was how we set up mongoose, ony done once  

  // creating schema now 
  
  const productSchema = new mongoose.Schema({
    name : {
        type : String, 
        required : true
    },  
    price : {
        type : Number, 
        required : true 
    } , 
    onSale : {
        type : Boolean, 
        default : false
    }
  })

  const Product = mongoose.model("Product", productSchema)

  const bike = new Product({
  name: "Bike",
  price: 15000
})
bike.save().then( data => { 
    console.log( "it worked ")
    // console.log(data); 
}  ).catch( err => {
    console.log("some error occured")
    console.log( err)
})