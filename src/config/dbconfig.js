const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    port:process.env.DATABASE_PORT,
    username:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    host:process.env.DATABASE_HOST,
    database:process.env.DATABASE_NAME,
    dialect:'mysql',
    pool:5
});

module.exports=sequelize;