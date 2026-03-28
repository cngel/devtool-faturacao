const bcrypt = require("bcrypt");
module.exports={
    isAtutorizatded:async (data)=>{
        const {secret_key} = data;
        if(secret_key==undefined || secret_key=="" || secret_key==null){
            return false;
        }else{
            const valueKey = await bcrypt.compare(secret_key,process.env.API_KEY);
            if(valueKey){
                return true;
            }else{
                return false;
            }
        } 
    }
}