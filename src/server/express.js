const express = require('express');
const app = express();
const mongoose = require('mongoose');

const { userRouter } = require('./routes/userRoute');

//로그인 정보 저장하기 위한 것
const session = require('express-session');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    }
}));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
  })

const MONGO_URI = 'mongodb+srv://admin:@atlascluster.pjn68in.mongodb.net/Shoelab?retryWrites=true&w=majority'


const server = async () =>{
    try{
    await mongoose.connect(MONGO_URI, {});
    mongoose.set('debug', true);
    console.log("connect MongoDB");
    
    app.use(express.json());

    app.get('/', function (req, res) {
        console.log('Cookies: ', req.cookies)
        console.log('Signed Cookies: ', req.signedCookies)
        return res.send("hello world");
    })
    app.use('/user', userRouter)
    app.use(express.urlencoded({ extended: true }))
    app.listen(3001, function(){
        console.log('server listening on port 3001');
    })
} catch (err){
    console.log(err);
}
}

server();

