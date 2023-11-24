const { Router } = require('express');
const userRouter = Router();
const mongoose = require('mongoose');
const {User} = require('../model/User');
    
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
userRouter.post('/login', async(req, res) => {
    const { userId, password } = req.body;
    const user = await User.findOne({userId});
    if(!user) {
        return res.status(401).send("userId가 존재하지 않습니다.")
    }
    if(user.password !== password){
        return res.status(401).send("비밀번호가 틀렸습니다.");
    }
    
    const data= {
        userId :user.userId,
        userName : user.userName,
        email : user.email,
    }
    res.status(200).send( data,
        console.log("로그인에 성공했습니다"),
    )
    req.session.User = user;
    res.redirect("/mypage");
})
    
userRouter.get('/mypage', async (req, res) => {
    const user = req.session.User;
    res.render("mypage", {
        user,
    })
})
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
            // if(typeof password !== 'string') return res.status(400).send({ err: "userName must be a string"});
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