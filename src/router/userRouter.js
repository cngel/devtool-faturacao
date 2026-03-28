const { Router } = require("express");
const { getallUses, setUser, loginUsers } = require("../controllers/userController");
const { userShema, validationUser } = require("../validators/validatorsUser");
const isStoreMiddellwere = require("../midellwers/isStore");
const userRouter = Router();

userRouter.get("/getAll/users",
    isStoreMiddellwere,
    getallUses
);



userRouter.post("/add/user",
    isStoreMiddellwere,
    userShema,
    validationUser,
    setUser
);
userRouter.post("/login/user",
    isStoreMiddellwere,
    loginUsers
);
module.exports = { userRouter };