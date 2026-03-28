const STORES = require("../models/storeModel");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const JWT = require("jsonwebtoken");
module.exports = {
    postStore: async (data) => {
        try {
            let dataPost = {
                id: uuid.v7(),
                nome: data.nome,
                nif: data.nif,
                adress: data.adress,
                email_onwer: data.email,
                password_has: await bcrypt.hash(data.password, 10)
            }
            return await STORES.create(dataPost);
        } catch (error) {
            console.log(error);
            return false;
        }

    },
    findStores: async () => {
        const result = await STORES.findAll({attributes:['nome','nif','adress']});
        return result;
    },
    loginService: async (nif, password) => {
        try {
            const store = await STORES.findOne({ where: { nif: nif } });
            const { password_has } = store;
            const result = await bcrypt.compare(password, password_has);
            if (!result) {
                return false;
            } else {
                const payload = {
                    store_id: store.id,
                    nome: store.nome,
                    nif: store.nif,
                    adress: store.adress,
                }
                const token = JWT.sign(payload, process.env.JWTKEY, { expiresIn: '24h' });
                return token;
            }

        } catch (error) {
            console.log(error);
            return 0;
        }
    }
}