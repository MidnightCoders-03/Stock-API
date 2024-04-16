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

   
     isAdmin: (req, res, next) => {

        const {  userRole } = getUserInfo(req)
       
       console.log(userRole);

       if(userRole == 1) next()
       else throw new Error("No permission")

    },

    // isSaler: (req, res, next) => {

    //     const {  userRole } = getUserInfo(req)
    //     if(userRole == 2) next()
    //     else throw new Error("You must be a Saler to do this operation")
    // },
     //! read => 
    R_AS: (req, res, next) => {
       
        
        const { userRole } = getUserInfo(req);
        if ([1, 2].includes(userRole)) next();
        else
          throw new Error(
            "NoPermission: You must have sufficient role for this operation."
          );
      },

    isPurchaser: (req, res, next) => {
        const {  userRole } = getUserInfo(req)
       if(userRole == 3) next()
       else throw new Error("You must be a Purchaser to do this operation")
    },

   isWarehouseMan: (req, res, next) => {
    const {  userRole } = getUserInfo(req)
    if(userRole == 4) next()
    else throw new Error("You must be a WarehouseMan to do this operation")
    },


}