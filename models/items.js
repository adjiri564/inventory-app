const {Model,DataTypes} = require('sequelize');
const sequelize = require('../config/config.js');
const Category = require('./category.js')

class Item extends Model{}

Item.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false
    },
    quantity:{
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    price:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,

    },
    category_id:{
        type: DataTypes.INTEGER,
        references:{
            model: Category,
            key: 'id',
        },
        onDelete: 'CASCADE',
    },

},{sequelize, modelName: 'Item'})

Category.hasMany(Item,{foreignKey:'category_id', onDelete: 'CASCADE'})
Item.belongsTo(Category, {foreignKey: 'category_id'})

module.exports = Item