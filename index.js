const express = require("express")
const app = express() 
const path = require('path')

app.set( "view engine" , "ejs")
app.set("views" , path.join(__dirname, "/views"))

app.get( '/' , (req, res)=> { res.render("home.ejs")

})
app.get( "/random", (req, res) => {
    const num = Math.floor( Math.random()*6)+1; 
    res.render('random', {rand : num})
} )

app.get( "/cats" , (req, res ) => {
    const cats = ['one' , 'two' , 'seven', ]
    res.render( "cats" , {cats})
})

// get and post requests in express 
app.get("/tacos", (req , res )=>{ 
    res.send("GET/ tacos response ")
})

app.post("/tacos", (req , res )=>{ 
    res.send("POST/ tacos response ")
})




app.listen( 3000 , ()=>{ console.log("Listening to port 30000 , Yes!")})