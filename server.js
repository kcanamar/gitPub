////////////////////////
// Setup - Import deps and create app object
////////////////////////
require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const drinks = require('./models/drinks.js')
const foods = require('./models/food.js')

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
    res.render('drink_show.ejs', {drink: drinks[req.params.id]})
})
app.get("/foods", (req, res) => {
    res.render('food_index.ejs', {allFood: foods})
})
app.get("/foods/:id", (req, res) => {
    res.render('food_show.ejs', {food: foods[req.params.id]})
})
///////////////////////////
// Server Listener
///////////////////////////
app.listen(PORT, () => {
    console.log("Tuning in to Radio Comos 3000")
})