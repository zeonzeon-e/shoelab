const jwt = require('jsonwebtoken');
const YOUR_SECRET_KEY = process.env.SECRET_KEY;
require('dotenv').config();

const verifyToken = (req, res, next)=> {
    try{
        const clientToken = req.cookies.user;
        const decoded = jwt.verify(clientToken, YOUR_SECRET_KEY);
        if(decoded){
            res.locals.userId = decoded.userId;
            next();
        }else{
            res.status(401).json({ error: 'unauthorized'});
        }
    }catch(err){
        res.status(401).json({error: 'token expired'});
    }
}

exports.verifyToken = verifyToken;