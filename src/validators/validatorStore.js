const {checkSchema,validationResult, Result} = require("express-validator");
const storeShema = checkSchema({
    nome:{
        in:['body'],
        notEmpty:{
            errorMessage:'O campo de nome não pode estar vazio'
        }
    },
    nif:{
        in:['body'],
        notEmpty:{
            errorMessage:'O campo do nif não pode estar vazio'
        },
        isLength:{
            options:{max:20},
            errorMessage:'O campo nao pode conter mais de 20 números'
        },
        isNumeric:{
            errorMessage:'O digite apenas numeros inteiros'
        },
        isInt:{
            errorMessage:'Digite numeros inteiros'
        },
    
    },
    adress:{
        in:['body'],
        notEmpty:{
            errorMessage:'O campo de endereco nao pode estar vazio'
        }
        /*Add validator to location */
    },
    email:{
        notEmpty:{
            errorMessage:'preencha o campo de email'
        },
        isEmail:{
            errorMessage:'escreva um email valido'
        }
    },
    password:{
        notEmpty:{
            errorMessage:'Preenche o campo de password'
        },
        isLength:{
            options:{ min:7 },
            errorMessage:'Digite uma senha com no minimo 7 caracters'
        }
    }
});

const validacion = function(req,res,next){
    const restult= validationResult(req);
    if(!restult.isEmpty()){
        res.status(500).json({error:restult.array()});
        return 
    }
    next();
    console.log(restult.array());
};

module.exports={
    validacion,
    storeShema
}