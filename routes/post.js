// Importing Dependencies
const express = require ('express');
const router = express.Router();
const postsCtrl = require('../controllers/posts')

// INDUCES Routes
//Index
router.get("/", postsCtrl.index);
//DELETE
router.delete("/:id", postsCtrl.del);
//UPDATE
router.put('/:id',postsCtrl.update);
//CREATE
router.post("/", postsCtrl.create);
//SHOW
router.get("/:id", postsCtrl.show);


module.exports = router
