"use strict";
const { firmStatus, userRoles } = require("../constraints/role&status");
const Token = require("../models/token");
/* -------------------------------------------------------
NODEJS EXPRESS | MidnightCoders Team
------------------------------------------------------- */
const User = require("../models/user");

module.exports = {
  list: async (req, res) => {
    // console.log(Object.keys(firmStatus));
  
  const userRole = req.user.role
  const status = userRole == 1 ? {} : {role: userRole, isDeleted: false}
  // console.log(roleStatus);
  
  // const customFilters = req.user?.role == 1 ? {} : { _id: req.user._id }
  //   const data = await User.find(customFilters);
    // const data = await User.find({role: roleStatus});
    // const data = await User.find({...status, isDeleted: false});

    const data = await User.find({...status});

    res.status(200).send({
      error: false,
      data
    });
  },

  create: async (req, res) => {

     req.body.role == 1 ? delete req.body.role : req.body.role
    const data = await User.create(req.body);
    res.status(201).send({
      error: false,
      message: "User created :))",
      data,
    });
  },

  read: async (req, res) => {
    const userId = req.params.userId;
    const customFilters = req.user.role == 1 ? {} : {isDeleted : false }
    // const data = await User.findOne({ _id: userId , isDeleted: false});
    const data = await User.findOne({ _id: userId , ...customFilters});

    res.status(202).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
    const userId = req.params.userId;
    // console.log(req.params);
    // console.log(req.body);
    const user = await User.findOne({_id: userId}, { isDeleted: false })

    if (req.user?.role!=1) {
      delete req.body.role 
      delete req.body.isActive 
      delete req.body.isDeleted
    }        

    const data = await User.updateOne({ _id: userId }, req.body, {
         runValidators: true,
       })

    res.status(202).send({
      error: false,
      data,
      updatedData: await User.findOne({ _id: userId }),
    });
  },

  delete: async (req, res) => {
   

    const data = await User.updateOne({ _id: req.params.userId }, {isDeleted: true});

    // res.sendStatus(data.deletedCount >= 1 ? 204 : 404);

    //? kullanıcı zaten silinmiş ise 404 hatası verilir. 
    // const isAlreadyDeletedUser = (await User.findOne({ _id: req.params.userId })).isDeleted;
    // if (isAlreadyDeletedUser) {
    //   return res.status(404).send({ error: true, message: "User not found" });
    // }
 await Token.deleteOne({ userId: req.params.userId})
    // const data = await User.updateOne(
    //   { _id: req.params.id },
    //   {  isDeleted: true  }
    // );

    // console.log(data);
    res.status(204).send({
      error: false,
      data,
    });
    //? soft delete işlemi yapıldı.
  },
};
