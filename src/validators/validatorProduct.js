const {checkSchema, validationResult } = require("express-validator");
const productSchemaID = checkSchema(
    {
        id:{
            in:["params"],
            isNumeric:{
                errorMessage:'Digite apenas um valor inteiro'
            },
            escape:true,
            trim:true
        }
    }
);
const validatorProduct = checkSchema({
    nome:{
        notEmpty:{
            errorMessage:'Wrrite a name to Product'
        },
        escape:true,
        trim:true
    },
    sku:{
        notEmpty:{
            errorMessage:'Write a id to Product'
        },
        isNumeric:{
            errorMessage:'Write only values numerics'
        },
        escape:true,
        trim: true
    },
    price_per_unit:{
        notEmpty:{
            errorMessage:'Write a price of product'
        },
        isNumeric:{
            errorMessage:'Write only Numercs values'
        },
        escape:true,
        trim:true
    },
    unit_type:{
        notEmpty:{
            errorMessage:'Write a unit type'
        },
        toLowerCase:true,
        trim:true,
        escape:true
    }
})
module.exports={ productSchemaID, validatorProduct };