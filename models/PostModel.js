//import mongoose so we can use schema
const mongoose = require('mongoose');

//create a new schema, uses mongoose.Schema
const postSchema = new mongoose.Schema({

    //image url
    img: {
        type: String, 
        required: true
    },

    //title, required, min is 1, max is 35
    title: {
        type: String, 
        required: true, 
        minlength: 1, 
        maxlength: 35},

    //this is for if we decide to add likes, it can simply toggle between 0 and 1 at first
    //later it can increment depending on users liking the post
    likes: {
        type: Number, 
        default: 0
    },
    
    //for if we add auth later, defaults to blank string
    owner: {
        type: String, 
        default: ""
    }

});

//export
module.exports = mongoose.model('Post', postSchema);