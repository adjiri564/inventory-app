const { name } = require('ejs');
const sequelize = require('./config/config.js');
const Category = require('./models/category.js');
const Item = require('./models/items.js');

const seedData = async ()=>{
    await sequelize.sync({force:true});

    const electronics = await Category.create({name: 'Electronics', description: 'Device and gadgets'});
    const furniture = await Category.create({name:'Furniture', description: 'Home decor'});

    await Item.create({name:'Laptop', description:'A powerful laptop', quantity: 10, price: 1400.00, category_id: electronics.id});
    await Item.create({name:'Chair', description:'A comfortable chair', quantity: 20, price: 5000, category_id: furniture.id});

    console.log("Dummy data inserted")
}

seedData();