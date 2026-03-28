const { Router } = require("express");
const { addStores, getallStores } = require("../controllers/storeController");
const { validacion, storeShema } = require("../validators/validatorStore");
const storeMiddelwere = require("../midellwers/signionStore");
const { loginStore } = require('../controllers/storeController');
const { loginStoreShema, validacionlogin } = require("../validators/loginStore.validators");
const router = Router();


router.post("/login/store",
    loginStoreShema,
    validacionlogin,
    loginStore
);
//proteger esta rota
router.get("/getall/store", getallStores);
//reouter adim
router.post("/add/store",
    storeMiddelwere,
    storeShema,
    validacion,
    addStores
);





const storeRouter = router;

module.exports = { storeRouter }