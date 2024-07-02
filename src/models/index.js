const Cart = require('./Cart')
const Category = require('./Category')
const Product = require('./Product')
const Purchase = require('./Purchase')
const User = require('./User')

require('./User')
require('./Category')
require('./Product')
require('./Cart')

Product.belongsTo(Category) //-> Product -> categoryId 
Category.hasMany(Product)

Cart.belongsTo(User)
User.hasMany(Cart)

Cart.belongsTo(Product)
Product.hasMany(Cart)

Purchase.belongsTo(User)
User.hasMany(Purchase)

Purchase.belongsTo(Product)
Product.hasMany(Purchase)