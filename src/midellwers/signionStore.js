const {isAtutorizatded} = require("../auth/store.auth");
module.exports=async (req,res,next) => {
    const data = req.body;
    const resul = await isAtutorizatded(data);
    if(resul){
        next();
    }else{
        res.json({error:'not autorizated, verify your key'});
    }
}