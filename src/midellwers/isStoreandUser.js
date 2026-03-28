const JWT = require("jsonwebtoken");
module.exports = (req,res,next)=>{
    const store_token = req.headers.authorization;
    const user_token = req.headers.store;
    JWT.verify(store_token,process.env.JWTKEY,function(error,decode){
        if(error){
            res.status(401)
            .json({error:'Token expirado'});
        }
        JWT.verify(user_token,process.env.USER_JWT,function(error,decoded){
            if(error){
                res.status(401)
                .json({error:'token expirado'});
            }
            req.store=decode;
            req.user=decoded;
            next();
        })
    });
    
}