//import mongoose so we can use schema
const mongoose = require('mongoose');

//create a new schema, uses mongoose.Schema
const postSchema = new mongoose.Schema({
    img: {type: String, required: true},
    title: {type: String, required: true},
    likes: {type: Number, default: 0},
    owner: {type: String, default: ""}
});

module.exports = mongoose.model('Post', postSchema);