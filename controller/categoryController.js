const Category = require('../models/category.js');
const Item = require('../models/items.js');

exports.getAllCategories = async (req,res) =>{
    const categories = await Category.findAll();
    res.render('categories', {categories})
    
}

exports.createCategory = async (req,res) =>{
    if(req.method === 'POST'){
        await Category.create(req.body);
        return res.redirect('/categories')
    }
    res.render('createCategory');
}

exports.deleteCategory = async (req,res) =>{
    const {id} = req.params;
    const items = await Item.findAll({where: {category_id: id}});
    if(items.length > 0){
        await Item.destroy({where: {category_id: id}});
        // return res.status(400).json({ message: 'Cannot delete category with existing items.' });
    }
    await Category.destroy({where: {id}});
    res.redirect('/categories');
}