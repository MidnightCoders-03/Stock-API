"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Midnight Coders Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const purchase = require("../controllers/purchase")

const { isLogin, UPU_AP, D_A, RPU_ASP, CPU_ASP } = require("../middlewares/permissions")

router.use(isLogin)

router.route("/")
    .get(RPU_ASP, purchase.list)
    .post(CPU_ASP, purchase.create)

// router.route("/restore/:purchaseId")
// .get(CRUD_A, purchase.restore)

router.route("/:purchaseId")
    .get(RPU_ASP, purchase.read)
    .put(UPU_AP, purchase.update)
    .patch(UPU_AP, purchase.update)
    .delete(D_A, purchase.delete)

module.exports = router