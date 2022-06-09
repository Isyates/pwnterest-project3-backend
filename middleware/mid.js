////////////////////////
// Setup - Import deps
////////////////////////
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
///////////////////////
// Exports
///////////////////////

module.exports = function(app) {
    app.use(morgan("dev"))
    app.use(express.json())
    app.use(cors())
}