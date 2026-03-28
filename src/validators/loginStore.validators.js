const { validationResult, checkSchema } = require("express-validator");
const loginStoreShema = checkSchema({
    nif: {

        notEmpty: {
            errorMessage: 'Preeencha o campo vazio'
        },
        isInt: {
            errorMessage: 'Degite apenas valores inteiros'
        },
        isLength: {
            options: { min: 7 }, //alterar par um nif valido,
            errorMessage: 'Digite um nif valido'
        },
        trim: true,
        escape: true

    },
    password: {
        notEmpty: {
            errorMessage: 'Prench o campo de password'
        },
        trim: true,
        escape: true
    }
});
const validacionlogin = (req,res,next)=>{
    const resutl = validationResult(req);
    if(!resutl.isEmpty()){
        res.status(303)
        .json({error:resutl.array()});
    }
    next();

}

module.exports={
    validacionlogin,
    loginStoreShema,
}