const JWT = require("jsonwebtoken");
const SECRET = process.env.JWTKEY;

module.exports = async (req, res, next) => {
    const token = req.headers.authorization;
    JWT.verify(token, SECRET, (err, decoded) => {
        if (err) {
            console.log(err)
            return res.status(401).json({ error: "Token inválido" });
        }

         req.store = decoded;
        next();
    });
}