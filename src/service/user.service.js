const bcrypt = require("bcrypt");
const STORES = require("../models/storeModel");
const USER = require("../models/userModel");
const JWT = require("jsonwebtoken");

module.exports = {
    findallUsers: async (store_id) => {
        //limitar os dados retornado  e saber o que retorna qundo da error na query
        try {

            return await USER.findAll({
                where: {
                    store_id
                },
                attributes:['nome','email','tipo']
            });

        } catch (error) {
            return error;
        }
    },
    singinUser: async (data) => {
        try {

            return await USER.create(data);

        } catch (error) {
            console.log(error);
            return error;

        }
    },
    loginServece: async (email, password) => {
        try {
            const user = await USER.findOne({ where: { email } });
            const { password_has } = user;
            const result = await bcrypt.compare(password, password_has);
            if (!result) {

                return new Error('Email e/ou senha incorretos');
            }
            const payload = {
                id: user.id,
                nome: user.nome,
                email: user.email
            }
            const token = await JWT.sign(payload, process.env.USER_JWT, { expiresIn: '24h' }); //Alterar a data de expiracao;

            return token;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}