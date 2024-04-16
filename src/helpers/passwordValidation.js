"use strict";

module.exports = (password) =>{
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if(passwordRegex.test(password)){
        return password
    }else{
        throw new Error("Password must be at least 8 characters, one uppercase, one lowercase, one number and one special character")
    }

}

