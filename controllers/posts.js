////////////////////////
// Setup - Import deps
////////////////////////
const Post = require('../models/PostModel')

const index = async(req,res)=> {
    try {
        res.json(await Post.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
}

const del = async (req,res) => {
    try {
        res.json(await Post.findByIdAndDelete(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
}

const update = async (req,res) => {
    try {
        res.json(await Post.findByIdAndUpdate(req.params.id,req.body,{new:true}))
    } catch (error) {
        res.status(400).json(error)
    }
}

const create = async(req,res) => {
    try {
        res.json(await Post.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
}

const show = async (req,res) => {
    try {
        res.json(await Post.findById(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
}
///////////////////////
// Exports
///////////////////////

module.exports = {
    index,
    del,
    update,
    create,
    show
}