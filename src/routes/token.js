"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Midnight Coders Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const token = require("../controllers/token")

router.route("/")
.get(token.list)
.post(token.create)

router.route("/:tokenId")
