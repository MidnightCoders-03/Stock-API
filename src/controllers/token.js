"use strict"
/* -------------------------------------------------------
NODEJS EXPRESS | MidnightCoders Team
------------------------------------------------------- */

const Token = require("../models/token")

module.exports = {

    list: async (req, res) => {
      const data = await Token.find()

      res.status(200).send({
        error: false,
        data
      })
    },

    create: async (req, res) => {
      const data = await Token.create(req.body)

      res.status(201).send({
        error: false,
        data
      })
    },

    read: async (req, res) => {
      const data = await Token.findOne({ _id: req.params.tokenId})

      res.status(202).send({
        error: false,
        data
      })
    },

    update: async (req, res) => {
      const data = await Token.updateOne({ _id: req.params.id}, req.body)

      res.status(202).send({
        error: false,
        data
      })
    },

    delete: async (req, res) => {
      const data = await Token.deleteOne({ _id: req.params.id })

      res.status(data.deletedCount ? 204 : 404).send({
        error: !(!!data.deletedCount),
        data
      })
    },
}