const { checkSchema } = require("express-validator");

const shemaBatches = checkSchema({
    sku:{
        in:['body'],
        notEmpty:{
            errorMessage:'Write the ID of product'
        },
        isNumeric:{
            errorMessage:'Write only numeric values'
        },
        escape:true,
        trim:true
    },
    qnt:{
        escape:true,
        trim:true,
        notEmpty:{
            errorMessage:'write a quantity of product',

        },
        isNumeric:{
            errorMessage:'Write only numerics values '
        }
    }
});
module.exports=shemaBatches;