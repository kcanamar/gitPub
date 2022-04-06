////////////////////////
// Setup - Import deps and create app object
////////////////////////
require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const drinks = require('./models/drinks.js')

//////////////////////
// Declare Middleware
//////////////////////

///////////////////////
// Declare Routes and Routers 
///////////////////////
app.get("/", (req, res) => {
    res.send('Welcome to the Gitpub App!')
})
app.get("/drinks", (req, res) => {
    res.render('drinks_index.ejs', {allDrinks: drinks})
})
app.get("/drinks/:id", (req, res) => {
    res.render('drinks_index.ejs', {allDrinks: drinks[req.params.id]})
})
///////////////////////////
// Server Listener
///////////////////////////
app.listen(PORT, () => {
    console.log("Tuning in to Radio Comos 3000")
})