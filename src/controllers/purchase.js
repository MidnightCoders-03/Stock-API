"use strict";
/* -------------------------------------------------------
NODEJS EXPRESS | MidnightCoders Team
------------------------------------------------------- */
const Purchase = require("../models/purchase")
const Product = require("../models/product")

module.exports = {
  list: async (req, res) => {
    const data = await Purchase.find({ isDeleted: false});

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

  
    
    req.body.userId = req.user._id
    req.body.brandId = product.brandId
    const data = await Purchase.create(req.body);
     await Product.updateOne(
      {_id: req.body.productId},
      { $inc: { quantity: req.body.quantity } }
    );

    res.status(201).send({
      error: false,
      data,
    });
  },

  read: async (req, res) => {
    const data = await Purchase.findOne({ _id: req.params.purchaseId, isDeleted: false });

    res.status(202).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
    console.log(req.body.quantity);
    if(req.body.quantity){
        const oldPurchase = await Purchase.findOne({ _id: req.params.purchaseId })
        console.log(oldPurchase);
        const difference = oldPurchase.quantity - req.body.quantity
        await Product.updateOne({_id: oldPurchase.productId}, {$inc : { quantity: - difference}})
    }
    await Purchase.updateOne({_id: req.params.purchaseId}, req.body, {runValidators: true})
   

    res.status(202).send({
      error: false,
    //   data,
    updatedData: await Purchase.findOne({_id: req.params.purchaseId})
    });
  },

  delete: async (req, res) => {

    const purchaseId = req.params.purchaseId

    const purchase = await Purchase.findOne({ _id: purchaseId })

    if(!purchase) {
      res.status(404).send({
        error: true,
        message: "Required Purchase couldn't be found"
      })
    }

    purchase.isDeleted = true
    
    const data = await Purchase.updateOne({ _id: req.params.purchaseId }, {isDeleted: true});

    res.status(data.deletedCount >= 1 ? 204 : 404).send({
      error: !(!!data.deletedCount),
      data,
    });
  },
};
