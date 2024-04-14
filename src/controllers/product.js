"use strict"
const quantityCalculation = require("../helpers/quantityCalculation")
/* -------------------------------------------------------
NODEJS EXPRESS | MidnightCoders Team
------------------------------------------------------- */

const Product = require("../models/product")

module.exports = {

    list: async (req, res) => {
       const data = await Product.find()

       res.status(200).send({
        error: false,
        data
       })
    },

    create: async (req, res) => {
      
        // const data = await Product.create(req.body)
        const { name, categoryId, brandId, quantity } = req.body;
        const data = await quantityCalculation(name, categoryId, brandId, quantity);

        res.status(201).send({
            error: false,
            message: "New Product added successfully",
            data
        })
    },

    read: async (req, res) => {
      
        const data = await Product.findOne({ _id: req.params.productId })

        res.status(202).send({
            error: false,
            data
        })
    },

    update: async (req, res) => {
      
        const data = await Product.updateOne({ _id: req.params.productId }, req.body)

        res.status(202).send({
            error: false,
            data,
            updatedData: await Product.findOne({ _id: req.params.productId })
        })
    },

    delete: async (req, res) => {
      
        const data = await Product.deleteOne({ _id: req.params.productId})

        res.status(data.deletedCount >= 1 ? 204 : 404).send({
            error: !(!!data.deletedCount),
            data
        })
    },
}