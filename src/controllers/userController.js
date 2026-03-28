const { findallUsers, singinUser, loginServece } = require("../service/user.service.js");
const bcrypt = require("bcrypt");
module.exports = {
    getallUses: async (req, res) => {

        const store_id = req.store.store_id;
        const result = await findallUsers(store_id);
        const responsState = result.errno;
        res.status(responsState ? 500 : 200)
            .json({
                response: {
                    succsess: !responsState ? true : false,
                    result: responsState ? "Internal error try agin" : result
                }
            })

    },
    setUser: async (req, res) => {
        const data = {
            nome: req.body.nome,
            email: req.body.email,
            password_has: await bcrypt.hash(req.body.password, 10),
            tipo: req.body.tipo,
            store_id: req.store.store_id
        }
        const result = await singinUser(data);
        const responsState = result.errors;
        res.status(responsState ? 500 : 201)
            .json({
                response: {
                    succsess: !responsState ? true : false,
                    messages: responsState ? "Internal error try agin" : "User create with success"
                }
            })

    },
    loginUsers: async (req, res) => {
        try {
            const { email, password } = req.body;
            const result = await loginServece(email, password);
            const responsState = result.errors;
            res.status(responsState ? 500 : 201)
                .json({
                    response: {
                        succsess: !responsState ? true : false,
                        messages: responsState ? "Internal error try agin" : { token: result }
                    }
                });

        } catch (error) {
            res.status(500)
            .status({error:'Internal error try agin later'});
            
        }
    }

}