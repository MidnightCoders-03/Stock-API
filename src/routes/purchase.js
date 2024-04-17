"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Midnight Coders Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const purchase = require("../controllers/purchase")

router.route("/")
.get(purchase.list)
.post(purchase.create)

router.route("/:purchaseId")
.get(purchase.read)
.put(purchase.update)
.patch(purchase.update)
.delete(purchase.delete)

module.exports = router