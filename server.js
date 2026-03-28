require("dotenv").config();
const express = require("express");
const cors = require("cors");
const file_upload = require("express-fileupload");
const http = require("http");
const router = require("./src/router/mainRouter");
const app = express();
const corsConfig = {
    method:["GET","POST","PUT","DELETE"],
    origin:'*' //adidicionar a url da origem
}

app.use(cors(corsConfig));
app.use(file_upload());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api",router);
app.use(function(req,res){
    res.status(404).json({error:'notfound'})
})
const server = http.createServer(app);

server.listen(process.env.PORT,function(){
    console.log(`server runing on ${process.env.BASE}`);
})