const express = require('express')
const router = express.Router();
const categoryController = require('../controller/categoryController.js')

router.get('/', categoryController.getAllCategories);
router.get('/create', categoryController.createCategory);
router.post('/', categoryController.createCategory);
router.post('/:id', categoryController.deleteCategory);

module.exports = router