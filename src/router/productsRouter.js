const { Router } = require("express");
const { getAllProducts, getOneProduct,crateProduct,addProduct, buyProduct } = require("../controllers/product.controller.js");
const { productSchemaID,validatorProduct } = require("../validators/validatorProduct.js");
const validatorChema = require("../validators/checkValidator.js");
const isStoreMidellwere = require("../midellwers/isStore.js");
const shemaBatches = require("../validators/batchesValidators.js");
const router = Router();

router.get("/getAll/products",
    isStoreMidellwere,
    getAllProducts
);
router.get("/getOne/product/:id",
    isStoreMidellwere,
    productSchemaID,
    validatorChema,    
    getOneProduct
);
router.post("/create/product",
    isStoreMidellwere,
    validatorProduct,
    validatorChema,
    crateProduct
); 
router.post("/add/products",
    isStoreMidellwere,
    shemaBatches,
    validatorChema,
    addProduct
);
 router.post("/buy/products",
   isStoreMidellwere, 
    buyProduct
);

const routerProducts = router;

module.exports = routerProducts;