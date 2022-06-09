////////////////////////
// Setup - Import deps and create app object
////////////////////////
const express = require("express")
require("dotenv").config()
const app = express()
const {PORT = 4200} = process.env
//////////////////////
// Declare Middleware
//////////////////////

///////////////////////
// Declare Routes and Routers 
///////////////////////
// INDUCES - Index, New, Delete, Update, Create, Edit, Show
app.get("/", (req,res) => {
    res.send("Hello World")
})
///////////////////////////
// Server Listener
///////////////////////////
app.listen(PORT, () => console.log(`Listening on port ----> ${PORT}`))