"use strict"
/* -------------------------------------------------------
NODEJS EXPRESS | MidnightCoders Team
------------------------------------------------------- */

const Sale = require("../models/sale")
const saleQuantityCalculation = require("../helpers/saleQuantityCalculation")

module.exports = {
    list: async (req, res) => {
      
        const data = await Sale.find()

        res.status(200).send({
            error: false,
            data
        })
    },


    create: async (req, res) => {
      
        const { name, quantity } = req.body
        // const data = await Sale.create(req.body)

        const data = await saleQuantityCalculation(name, quantity)

        res.status(201).send({
            error: false,
            data
        })
    },


    read: async (req, res) => {
      
        const data = await Sale.findOne({ _id: req.params.id})

        res.status(202).send({
            error: false,
            data
        })
    },


    update: async (req, res) => {
      
       const { name, quantity } = req.body
        const data = await saleQuantityCalculation(name,quantity)

        res.status(202).send({
            error: false,
            data
        })
    },


    delete: async (req, res) => {
      

        const data = await Sale.deleteOne({ _id: req.params.saleId})

        res.status(data.deletedCount >= 1 ? 204 : 404).send({
            error: !(!!data.deletedCount),
            data
        })
    }
}