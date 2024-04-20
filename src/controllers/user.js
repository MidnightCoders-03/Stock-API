"use strict";
const { firmStatus, userRoles } = require("../constraints/role&status");
/* -------------------------------------------------------
NODEJS EXPRESS | MidnightCoders Team
------------------------------------------------------- */
const User = require("../models/user");

module.exports = {
  list: async (req, res) => {
    // console.log(Object.keys(firmStatus));
  
  const roleStatus = req.user.role
  // roleStatus == 1 ? {} : {role: roleStatus}
  console.log(roleStatus);
  
  // const customFilters = req.user?.role == 1 ? {} : { _id: req.user._id }
    // const data = await User.find(customFilters);
    const data = await User.find(role);

    res.status(200).send({
      error: false,
      data,
    });
  },

  create: async (req, res) => {
    const data = await User.create(req.body);
    res.status(201).send({
      error: false,
      message: "User created :))",
      data,
    });
  },

  read: async (req, res) => {
    const userId = req.params.userId;
    const data = await User.findOne({ _id: userId });

    res.status(202).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
    const userId = req.params.userId;
    // console.log(req.params);
    // console.log(req.body);
    const data = await User.updateOne({ _id: userId }, req.body, {
      runValidators: true,
    });
    // console.log(data);

    res.status(202).send({
      error: false,
      data,
      updatedData: await User.findOne({ _id: userId }),
    });
  },

  delete: async (req, res) => {
    const data = await User.deleteOne({ _id: req.params.userId });
    res.sendStatus(data.deletedCount >= 1 ? 204 : 404);
  },
};
