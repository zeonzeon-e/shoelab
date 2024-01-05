const { Router } = require('express');
const userRouter = Router();
const mongoose = require('mongoose');
const {User} = require('../model/User');
const userController = require('../utils/User.jwt');
const express_session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(express_session);
const MONGO_URI = 'mongodb+srv://admin:NsAwHH5VRuu1BZ47@atlascluster.pjn68in.mongodb.net/Shoelab?retryWrites=true&w=majority'
const store = new MongoDBStore({
    uri: MONGO_URI,
    collection: 'sessions'
})
const cors = require('cors')
const ObjectId = require("mongoose").Types.ObjectId;

let ID = '';
// const SECRET_KEY = process.env;
// const issuebombomCookie = require('jsonwebtoken');

// const bodyParser = require('body-parser');
// const session = require('express-session');
// const cookieParser = require('cookie-parser');
// userRouter.use(cookieParser());
// userRouter.use(bodyParser.json())

// userRouter.use(cookieParser());
userRouter.use(express_session({
    //요청이 왔을 때 다시 저장할지?
    cookie: {maxAge:(3.6e+6)*24},
    resave: false,
    //초기화되지 않은 세션을 저장할지?
    saveUninitialized: false,
    secret: 'secret',
    store : store,
    // cookie: {
    //     httpOnly: true,
    //     secure: false,
    //     sameSite: 'none', 
    // }
    
}));
userRouter.use(cors({
    origin: true,
    Credentials: true,
}))

// userRouter.use(session({
//     secret: 'MySeCrEtKeY',
//     resave: false,
//     saveUninitialized: false,
//     store: new (require('connect-mongo')(session))({
//         clientPromise: MongoClient.connect(),
//         dbName: 'Shoelab',
//         collecationName: 'sessions',
//     })
// }));

userRouter.get('/', async(req, res)=> {
    try{
        const users = await User.find({});
        return res.send({users});
    }catch(err){
        console.log(err);
        return res.status(500).send({err: err.message});
    }    
})
    
userRouter.post('/', async(req, res) => {
    console.log(req.body);
    try{
        const user = new User(req.body);
        await user.save();
        console.log("user send goood");
        return res.send({user});
    }catch(err){
        console.log(err);
        return res.status(500).send({err:err.message})
    }
})

userRouter.get('/sessionLogin', async(req, res) => {
    try{
        const user = await mongoose.models.user.findOne({ _id: ID});
        console.log(user);
        if(ID){
            console.log("반갑습니다. " + user.userId +"님");
            res.json({
                userId: user.userId,
                userName: user.userName,
                email : user.email
            });
        }
        
    }catch(err){
        console.log(err);
    }
    
    
})

userRouter.post('/sessionLogin', async(req,res) => {
    const body = req.body;

    const user = await mongoose.models.user.findOne({
        userId : body.userId,
        password : body.password,
    });


    if(!user){
        console.log('없는 아이디입니다');
    }else{
        if(ID){
            return;
        }else{
            req.session.user = user;
            req.session.isLogin = true;
            res.json(req.session);
            // res.json({ status:'ok', data: user})
            console.log(req.session);
            ID = user._id;
            console.log("user ObjectID : "+ID);
            
        }

    }
    // console.log("로그인 함수가 실행됩니다");
    
    // if(!req.session.user){
    //     req.session.user = {
    //         id : userId,
    //         password : password,
    //         authorized : true
    //     }
    //     console.log(req.session.user);
    // }else{
    //     console.log("이미 로그인중입니다");
    // }
    
    // console.log(user);
    // req.session.user = user;
    // req.session.user = user;
    // const paramId = req.body.id;
    // const paramPw = req.body.password;
    // if(req.session.user){
    //     console.log("이미 로그인 중입니다");
    // }else{
    //     req.session.user = {
    //         userId : paramId,
    //         password : paramPw,
    //     }
    // }
})

userRouter.get('/sessionLogout', async function (req, res, next) {
    // var session = req.session;
    // try{
    //     if(session.user){
    //         await req.session.destroy(function(err){
    //             if(err)
    //                 console.log(err)
    //             else{
    //                 ID = "";
    //                 console.log("정상 로그아웃");
    //             }
    //         })
    //     }
    // }catch(e){
    //     console.log(e)
    // }
    if(ID){
        ID = "";
        console.log("정상 로그아웃")
    }

})



userRouter.post('/login', 
async function(req, res, next){
    let body = req.body;
    let user = await mongoose.models.user.findOne({
        id : body.userId,
        password : body.password
    });
    // req.session.userId = userId;
    // res.send('로그인 성공');
    res.cookie("user", body.userId, {
        expires: new Date(Date.now() + 900000),
        httpOnly: true
    })
}

// userController.createToken
// async(req, res) => {
//     const { userId, password } = req.body;
//     const user = await User.findOne({userId});
//     if(!user) {
//         return res.status(401).send("userId가 존재하지 않습니다.")
//     }
//     if(user.password !== password){
//         return res.status(401).send("비밀번호가 틀렸습니다.");
//     }

//     res.status(200).send(
//         console.log(user),
//     )

//}
)
// userRouter.get('/login', function(req,res,next){
//     const username = req.session.username;
//     if(username){
//         console.log(username);
//     }
// })
userRouter.post('/join', userController.createNewUser);
    
userRouter.get('/:userId', async (req, res) => {
    console.log(req.params);
    try {
        const {userId} = req.params;
        if(!mongoose.isValidObjectId(userId))
            return res.status(400).send({err: "invalid username"});
        const users = await User.findOne({_id: userId});
        return res.send({users});
    }catch(err){
        console.log(err);
        return res.status(500).send({err: err.message});
    }
})

userRouter.delete('/:userId', async (req, res) => {
    try{
        const {userId} = req.params;
        if(!mongoose.isValidObjectId(userId)) 
            return res.status(400).send({err: "invalid username"})
        const user = await User.findOneAndDelete({_id: userId});
        return res.send({user});
    }catch(err){
        console.log(err);
        return res.status(500).send({err: err.message});
    }
})

userRouter.put('/:userId', async (req, res) => {
    try{
        const {userId} = req.params;
        if(!mongoose.isValidObjectId(userId))
            return res.status(400).send({err: "invalid username"})
        const { userName, password } = req.body;
        if(!userName && !password) return res.status(400).send({ err:"userName is required"});
            // if(typeof userName !== 'string') return res.status(400).send({ err: "userName must be a string"});
        let updateBody = {};
        if (userName) updateBody.userName = userName;
        if (password) updateBody.password = password;
        const user = await User.findOneAndUpdate({_id: userId}, updateBody, {new: true});
        return res.send({user});
    } catch(err){
        console.log(err);
        return res.status(500).send({err: err.message})
    }
})


module.exports = {userRouter}