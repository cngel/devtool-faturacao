const { NUMBER, STRING, DATE } = require("sequelize");
const sequelize = require("../config/dbconfig");
const PRODUCT_BATCHES = sequelize.define("product_batches", {
    product_id: {
        type: NUMBER
    },
    store_id: {
        type: STRING
    },
    quantity: {
        type: NUMBER
    },
    expiraction_date: {
        type: DATE
    }

});

module.exports = PRODUCT_BATCHES;
