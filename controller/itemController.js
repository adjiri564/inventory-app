const Item = require('../models/items.js');
const Category = require('../models/category.js');

exports.getAllItems = async (req,res) =>{
    const items = await Item.findAll({include: Category});
    res.render('items', {items});
}

exports.createItem = async (req, res) =>{
    if(req.method === 'POST'){
        await Item.create(req.body);
        return res.redirect('/items');
    }
    const categories = await Category.findAll()
    // res.render('createItem', {category: categories})
    res.render('createItem', {categories})
}

exports.deleteItem = async (req,res) => {
    const {id} = req.params;
    await Item.destroy({where: {id}});
    res.redirect('/items');
}