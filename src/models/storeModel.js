const { STRING, NUMBER } = require("sequelize");
const sequelize = require("../config/dbconfig");
const STORES = sequelize.define('stores',{
    nome:{
        type:STRING,
        allowNull:false
    },
    nif:{
        type:NUMBER,
        allowNull:false,
    },
    adress:{
        type:STRING,
        allowNull:false,
        unique:false
    },
    email_onwer:{
        type:STRING
    },
    token:{
        type:NUMBER
    },
    password_has:{
        type:STRING
    }
});

module.exports=STORES;