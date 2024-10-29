const express = require('express');
const router = express.Router();
const itemController = require('../controller/itemController.js');

router.get('/', itemController.getAllItems);
router.get('/create', itemController.createItem);
router.post('/', itemController.createItem);
router.post('/:id', itemController.deleteItem);

module.exports = router