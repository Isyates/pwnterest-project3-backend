// Importing Dependencies
const express = require ('express');
const router = express.Router();
const postCtrl = require('../controllers/posts')

// INDUCES Routes
//Index
router.get("/", postsCtrl.index);
//DELETE
router.delete("/:id", postsCtrl.del);
//UPDATE
router.options('/:id',postsCtrl.update);
//CREATE
router.post("/", postsCtrl.create);
//SHOW
router.get("/:id", postsCtrl.show);


module.exports = router
