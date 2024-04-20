"use strict"
/* -------------------------------------------------------
NODEJS EXPRESS | MidnightCoders Team
------------------------------------------------------- */
// Middleware: permissions
function getUserInfo(req) {
    let user = req.user;
    let isActive = req.user?.isActive;
    let userId = req.user?.id;
    let userRole = req.user?.role;
    return { user, isActive, userId, userRole };
  }

module.exports = {

    isLogin: (req, res, next) => {

     const { user, isActive } = getUserInfo(req)
     if(user && isActive) next()
     else throw new Error("You must log in to continue")
    },


  //! CREATE

  // ! create => Brand (Admin & Purchaser)
  CB_AP: (req, res, next) => {
        
    const { userRole } = getUserInfo(req);
    if ([1, 3].includes(userRole)) next();
    else
      throw new Error(
        "NoPermission: You must have sufficient role for this operation."
      );
  },

// ! create => Category Admin 
  CC_A: (req, res, next) => {
        
    const { userRole } = getUserInfo(req);
    if ([1].includes(userRole)) next();
    else
      throw new Error(
        "NoPermission: You must have sufficient role for this operation."
      );
  },

// ! create =>Firm (Admin & Saler & Purchaser)
  CF_ASP: (req, res, next) => {
        
    const { userRole } = getUserInfo(req);
    if ([1, 2, 3].includes(userRole)) next();
    else
      throw new Error(
        "NoPermission: You must have sufficient role for this operation."
      );
  },

// ! create =>Product (Admin & Purchaser)
  CP_AP: (req, res, next) => {
        
    const { userRole } = getUserInfo(req);
    if ([1, 3].includes(userRole)) next();
    else
      throw new Error(
        "NoPermission: You must have sufficient role for this operation."
      );
  },

// ! create =>Purchase (Admin  & Purchaser)
  CPU_ASP: (req, res, next) => {
        
    const { userRole } = getUserInfo(req);
    if ([1, 3].includes(userRole)) next();
    else
      throw new Error(
        "NoPermission: You must have sufficient role for this operation."
      );
  },

// ! create =>Sale (Admin & Saler )
  CS_AS: (req, res, next) => {
        
    const { userRole } = getUserInfo(req);
    if ([1, 2, 3].includes(userRole)) next();
    else
      throw new Error(
        "NoPermission: You must have sufficient role for this operation."
      );
  },

  // * ==================================================


  // ! READ 

    // ! read => Brand (Admin & Saler & Purchaser & WarehouseMan)
    RB_ASPW: (req, res, next) => {
        
      const { userRole } = getUserInfo(req);
      if ([1, 2, 3, 4].includes(userRole)) next();
      else
        throw new Error(
          "NoPermission: You must have sufficient role for this operation."
        );
    },
  
  // ! read => Category(Admin & Saler & Purchaser & WarehouseMan)
    RC_ASPW: (req, res, next) => {
        
      const { userRole } = getUserInfo(req);
      if ([1, 2, 3, 4].includes(userRole)) next();
      else
        throw new Error(
          "NoPermission: You must have sufficient role for this operation."
        );
    },
  
  // ! read =>Firm (Admin & Saler & Purchaser & WarehouseMan)
    RF_ASPW: (req, res, next) => {
          
      const { userRole } = getUserInfo(req);
      if ([1, 2, 3, 4].includes(userRole)) next();
      else
        throw new Error(
          "NoPermission: You must have sufficient role for this operation."
        );
    },
  
  // ! read =>Product (Admin & Saler & Purchaser & WarehouseMan)
    RP_ASPW: (req, res, next) => {
          
      const { userRole } = getUserInfo(req);
      if ([1, 2, 3, 4].includes(userRole)) next();
      else
        throw new Error(
          "NoPermission: You must have sufficient role for this operation."
        );
    },
  
  // ! read =>Purchase (Admin  & Purchaser)
    RPU_ASP: (req, res, next) => {
          
      const { userRole } = getUserInfo(req);
      if ([1, 3].includes(userRole)) next();
      else
        throw new Error(
          "NoPermission: You must have sufficient role for this operation."
        );
    },
  
  // ! read =>Sale (Admin & Saler )
    RS_AS: (req, res, next) => {
          
      const { userRole } = getUserInfo(req);
      if ([1, 2].includes(userRole)) next();
      else
        throw new Error(
          "NoPermission: You must have sufficient role for this operation."
        );
    },
// *=======================================================



    // ! UPDATE

     // ! UPDATE => Brand (Admin & Purchaser)
     UB_AP: (req, res, next) => {
        
      const { userRole } = getUserInfo(req);
      if ([1, 3].includes(userRole)) next();
      else
        throw new Error(
          "NoPermission: You must have sufficient role for this operation."
        );
    },
  
  // ! UPDATE => Category (Admin )
    UC_A: (req, res, next) => {
        
      const { userRole } = getUserInfo(req);
      if ([1].includes(userRole)) next();
      else
        throw new Error(
          "NoPermission: You must have sufficient role for this operation."
        );
    },
  
  // ! UPDATE =>Firm (Admin & Saler & Purchaser)
    UF_ASP: (req, res, next) => {
          
      const { userRole } = getUserInfo(req);
      if ([1, 2, 3].includes(userRole)) next();
      else
        throw new Error(
          "NoPermission: You must have sufficient role for this operation."
        );
    },
  
  // ! UPDATE =>Product (Admin & Purchaser)
    UP_AP: (req, res, next) => {
          
      const { userRole } = getUserInfo(req);
      if ([1, 3].includes(userRole)) next();
      else
        throw new Error(
          "NoPermission: You must have sufficient role for this operation."
        );
    },
  
  // ! UPDATE =>Purchase (Admin  & Purchaser)
    UPU_AP: (req, res, next) => {
          
      const { userRole } = getUserInfo(req);
      if ([1, 3].includes(userRole)) next();
      else
        throw new Error(
          "NoPermission: You must have sufficient role for this operation."
        );
    },
  
  // ! UPDATE =>Sale (Admin & Saler )
    US_AS: (req, res, next) => {
          
      const { userRole } = getUserInfo(req);
      if ([1, 2].includes(userRole)) next();
      else
        throw new Error(
          "NoPermission: You must have sufficient role for this operation."
        );
    },


    // ! DELETE

    D_A :(req, res, next) => {
          
      const { userRole } = getUserInfo(req);
      if ([1].includes(userRole)) next();
      else
        throw new Error(
          "NoPermission: You must have sufficient role for this operation."
        );
    },
  
}
