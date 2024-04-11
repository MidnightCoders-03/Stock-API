"use strict";
/* -------------------------------------------------------
NODEJS EXPRESS | MidnightCoders Team
------------------------------------------------------- */
const Product = require("../models/product")
const Sale = require("../models/sale");

module.exports = {
  list: async (req, res) => {
    const data = await Sale.find();

    res.status(200).send({
      error: false,
      data,
    });
  },

  create: async (req, res) => {
    
    const product = await Product.findOne({ _id: req.body.productId });
    if (!product) {
        res.errorStatusCode = 404
        throw new Error("Product not found")};

    if (req.body.quantity > product.quantity) {
        res.errorStatusCode = 400
      throw new Error(
        `The desired sale can not be possible because there is no enough stock,the desired product's quantity in stock is : ${product.quantity}`
      );
    }
    console.log(req.user);
    req.body.userId = req.user._id
    req.body.brandId = product.brandId
    const data = await Sale.create(req.body);
     await Product.updateOne(
      {_id: req.body.productId},
      { $inc: { quantity: -req.body.quantity } }
    );

    res.status(201).send({
      error: false,
      data,
    });
  },

  read: async (req, res) => {
    const data = await Sale.findOne({ _id: req.params.saleId });

    res.status(202).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
    console.log(req.body.quantity);
    if(req.body.quantity){
        const oldSale = await Sale.findOne({ _id: req.params.saleId })
        console.log(oldSale);
        const difference = oldSale.quantity - req.body.quantity
        await Product.updateOne({_id: oldSale.productId}, {$inc : { quantity: difference}})
    }
    await Sale.updateOne({_id: req.params.saleId}, req.body, {runValidators: true})
   

    res.status(202).send({
      error: false,
    //   data,
    updatedData: await Sale.findOne({_id: req.params.saleId})
    });
  },

  delete: async (req, res) => {
    const data = await Sale.deleteOne({ _id: req.params.saleId });

    res.status(data.deletedCount >= 1 ? 204 : 404).send({
      error: !!!data.deletedCount,
      data,
    });
  },
};
