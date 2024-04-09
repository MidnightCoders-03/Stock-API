"use strict"

const Product = require("../models/product")
const Sale = require("../models/sale")

module.exports = async (body) => {
    const product = await (Product.findOne({name})._id)
    if(!product) throw new Error("Please enter the product name")

    if(quantity > product.quantity){
      throw new Error("The desired sale can not be possible because there is no enough stock")
    }
    quantity = await Sale.create({name, quantity})
     quantity = await Product.updateOne({name}, { $inc: {quantity: (- quantity)}})
  return quantity
}