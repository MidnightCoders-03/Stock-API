"use strict"

const Product = require("../models/product")


module.exports = async (name, category, brand, quantity) => {
    
    // let product = await Product.findOne({ name, brandId: brand, categoryId: category})
    let product = await Product.findOne({ name })

    if(!product){

      return  product = await Product.create({name,quantity, brand, category})
    }else {
        
        // await Product.updateOne({ name, brandId: brand, categoryId: category }, { $inc: { quantity: quantity } });
        await Product.updateOne({ name }, { $inc: { quantity: quantity } });
        product.quantity += quantity
        return product
     }

    // if (!product) {
    //     return await Product.create({ name, brandId: brand, categoryId: category, quantity });
    // } else {
    //     product.quantity += quantity;
    //     return await product.save(); // Save the updated product
    // }

}