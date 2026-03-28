const { STRING, ENUM } = require("sequelize");
const sequelize = require("../config/dbconfig");
const STORES= require("./storeModel");
const USERS = sequelize.define('users',{
    store_id:{
        type:STRING,
        allowNull:false
    },
    nome:{
        type:STRING,
        allowNull:false
    },
    email:{
        type:STRING,
        allowNull:false,
    },
    password_has:{
        type:STRING,
        allowNull:false
    },
    tipo:{
        type:ENUM('owner','operador')
    }
});
module.exports=USERS;