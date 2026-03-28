const { error } = require("console");
const { postStore, findStores, loginService } = require("../service/store.service");
const JWT = require("jsonwebtoken");
module.exports = {
    addStores: (req, res) => {
        try {
            const resut = postStore(req.body);
            if (resut) {
                res.json({ response: 'Store crreate with sucshss' });
            } else {
                res.status(500)
                    .json({ error: 'internal error' });
            }
        } catch (error) {
            //console.log(error);
            res.status(500).json({ error: error })
        }
    },
    getallStores: async (req, res) => {
        try {
            const resut = await findStores();
            console.log(resut);
            res.json({ response: resut });
        } catch (error) {
            res.status(500).json({ error: 'enternal error o server' + error });
        }
    },
    loginStore: async (req, res) => {
        try {
            const { nif, password } = req.body;
            const result = await loginService(nif, password);
            res.json({ response: { token: result } });
        } catch (error) {
            res.json({ error: 'internal error' });
            console.log(error);
        }
    }

}