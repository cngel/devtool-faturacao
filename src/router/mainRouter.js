const {Router } = require("express");
const {storeRouter} = require("./routerStore");
const {userRouter}= require("./userRouter");
const routerProducts = require("./productsRouter");

const router = Router();
router.get("/",(req,res)=>{
    res.json({pong:true});
})

router.use("/user",userRouter);
router.use("/store",storeRouter);
router.use("/products",routerProducts);



module.exports= router;