var express = require('express');
var router = express.Router();

var TodoCollection = require("./todo.js");

router.get('/todo', TodoCollection.getAll);
router.get('/todo/:id', TodoCollection.getOne);
router.post('/todo', TodoCollection.createOne);
router.delete('/todo/:id', TodoCollection.deleteOne);

module.exports = router;
