const Cart = require('./Cart')
const Category = require('./Category')
const Product = require('./Prduct')
const User = require('./User')

require('./User')
require('./Category')
require('./Prduct')
require('./Cart')

Product.belongsTo(Category) //-> Product -> categoryId 
Category.hasMany(Product)

Cart.belongsTo(User)
User.hasMany(Cart)

Cart.belongsTo(Product)
Product.hasMany(Cart)
