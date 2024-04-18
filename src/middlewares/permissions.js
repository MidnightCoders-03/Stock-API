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

  // ! create => Admin & Saler
  C_AS: (req, res, next) => {
        
    const { userRole } = getUserInfo(req);
    if ([1, 2].includes(userRole)) next();
    else
      throw new Error(
        "NoPermission: You must have sufficient role for this operation."
      );
  },

// ! create => Admin & Purchaser
  C_AP: (req, res, next) => {
        
    const { userRole } = getUserInfo(req);
    if ([1, 3].includes(userRole)) next();
    else
      throw new Error(
        "NoPermission: You must have sufficient role for this operation."
      );
  },

// ! create => Admin & Saler & Purchaser
  C_ASP: (req, res, next) => {
        
    const { userRole } = getUserInfo(req);
    if ([1, 2, 3].includes(userRole)) next();
    else
      throw new Error(
        "NoPermission: You must have sufficient role for this operation."
      );
  },

  
// // ! create => Admin & WarehouseMan
//   C_AW: (req, res, next) => {
        
//     const { userRole } = getUserInfo(req);
//     if ([1, 4].includes(userRole)) next();
//     else
//       throw new Error(
//         "NoPermission: You must have sufficient role for this operation."
//       );
//   },



    // ! READ
    
    //! read => Admin & Saler
     R_AS: (req, res, next) => {
        
        const { userRole } = getUserInfo(req);
        if ([1, 2].includes(userRole)) next();
        else
          throw new Error(
            "NoPermission: You must have sufficient role for this operation."
          );
      },

    //! read => Admin & Purchaser
     R_AP: (req, res, next) => {
       
        const { userRole } = getUserInfo(req);
        if ([1, 3].includes(userRole)) next();
        else
          throw new Error(
            "NoPermission: You must have sufficient role for this operation."
          );
      },

    //! read => Admin & Saler & Purchaser
     R_ASP: (req, res, next) => {
       
        const { userRole } = getUserInfo(req);
        if ([1, 2, 3].includes(userRole)) next();
        else
          throw new Error(
            "NoPermission: You must have sufficient role for this operation."
          );
      },


   //! read => Admin & WarehouseMan   
  R_AW: (req, res, next) => {
       
    const { userRole } = getUserInfo(req);
    if ([1, 4].includes(userRole)) next();
    else
      throw new Error(
        "NoPermission: You must have sufficient role for this operation."
      );
  },

  // ! UPDATE

   //! update => Admin & Saler 
  U_AS: (req, res, next) => {
       
    const { userRole } = getUserInfo(req);
    if ([1, 2].includes(userRole)) next();
    else
      throw new Error(
        "NoPermission: You must have sufficient role for this operation."
      );
  },

   //! update => Admin & Purchaser 
  U_AP: (req, res, next) => {
       
    const { userRole } = getUserInfo(req);
    if ([1, 3].includes(userRole)) next();
    else
      throw new Error(
        "NoPermission: You must have sufficient role for this operation."
      );
  },

   //! update => Admin & Saler & Purchaser 
  U_ASP: (req, res, next) => {
       
    const { userRole } = getUserInfo(req);
    if ([1, 2, 3].includes(userRole)) next();
    else
      throw new Error(
        "NoPermission: You must have sufficient role for this operation."
      );
  },



  //! => CREATE, READ, UPDATE, DELETE
     CRUD_A: (req, res, next) => {
      const { userRole } = getUserInfo(req)
      if([1].includes(userRole)) next()
      throw new Error("You must be Admin")
     }

}





 //  isAdmin: (req, res, next) => {

    //     const {  userRole } = getUserInfo(req)
       
    //    console.log(userRole);

    //    if(userRole == 1) next()
    //    else throw new Error("No permission")

    // },

    // isSaler: (req, res, next) => {

    //     const {  userRole } = getUserInfo(req)
    //     if(userRole == 2) next()
    //     else throw new Error("You must be a Saler to do this operation")
    // },

      //   isPurchaser: (req, res, next) => {
  //       const {  userRole } = getUserInfo(req)
  //      if(userRole == 3) next()
  //      else throw new Error("You must be a Purchaser to do this operation")
  //   },

  //  isWarehouseMan: (req, res, next) => {
  //   const {  userRole } = getUserInfo(req)
  //   if(userRole == 4) next()
  //   else throw new Error("You must be a WarehouseMan to do this operation")
  //   },