"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const Brand = require("../models/brand")

module.exports = {

    list: async (req, res) => {
      
        const data = await Brand.find()

        res.status(200).send({
            error: false,
            data
        })
    },

    create: async (req, res) => {
      
        const data = await Brand.create(req.body)

        res.status(201).send({
            error: false,
            message: "New brand added successfully",
            data
        })
    },

    read: async (req, res) => {
      
        const data = await Brand.findOne({ _id: req.params.brandId})

        res.status(202).send({
            error: false,
            data
        })
    },

    update: async (req, res) => {
      
        const data = await Brand.findOne({ _id: req.params.brandId }, req.body)

        res.status(202).send({
            error: false,
            data,
            updatedData: await Brand.findOne({ _id: req.params.brandId})
        })
    },

    delete: async (req, res) => {
      
        const data = await Brand.deleteOne({ _id: req.params.brandId})

        res.status(data.deletedCount >= 1 ? 204: 404).send({
            error: !data.deletedCount,
            data
        })
    }
}