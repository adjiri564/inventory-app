const express = require('express');
const bodyParser = require('body-parser');
const categoryRoutes = require('./routes/categoryRoutes.js');
const itemRoutes = require('./routes/itemRouter.js')
const sequelize = require('./config/config.js');
const Category = require('./models/category.js');
const Item = require('./models/items.js')
const path = require('path')

//Initialize express app
const app = express();
app.set('view engine', 'ejs');

//Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public'))); //For serving static files

//Routes
app.use('/categories', categoryRoutes);
app.use('/items', itemRoutes);

//Sync database and start server
sequelize.sync().then(()=>{
    app.listen(3000, ()=>{
        console.log('Server running');
    })
}).catch(err => console.log(err));
