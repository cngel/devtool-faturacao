const {checkSchema,validationResult} = require("express-validator");
const userShema = checkSchema({
    nome:{
        in:['body'],
        notEmpty:{
            errorMessage:'Please write a username'
        }
    },
    email:{
        in:['body'],
        notEmpty:{
            errorMessage:'Please write a email'
        },
        isEmail:{
            errorMessage:'Please check your email'
        }
    },
    password:{
        in:['body'],
        notEmpty:{
            errorMessage:'Please write a passorwd'
        },
        isLength:{
            options:{min:9},
            errorMessage:'Write a password with 10 char'
        }
  },
  tipo:{
    in:['body'],
    notEmpty:{
        errorMessage:'Selec your user type, owner or operador'
    },
    toLowerCase:true,
    default:{
        options:['operador']
    }
  }
});
const validationUser=function(req,res,next){
    const result = validationResult(req);
    if(!result.isEmpty()){
        res.status(500)
        .json({error:result.array()});
        return
    }
    next()
    
}

module.exports={
    userShema,
    validationUser
}