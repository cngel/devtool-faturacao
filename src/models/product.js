const { NUMBER, STRING, ENUM } = require("sequelize");
const sequelize = require("../config/dbconfig");

const PRODUCT = sequelize.define("products", {
    store_id: {
        type:STRING,
    },    
    nome: {
        type:STRING
    },
    sku: {
        type:NUMBER,
        unique:true,
    }, 
    price_per_unit: {
        type:NUMBER
    },
    unit_type: {
        type:STRING
    },

});
module.exports=PRODUCT;