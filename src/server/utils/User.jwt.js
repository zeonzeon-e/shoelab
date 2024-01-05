
const { Board } = require('../model/Board');
const {User} = require('../model/User');
const {Image} = require('../model/Image')
const jwt = require('jsonwebtoken');
const fs = require('fs');
require('dotenv').config();

const YOUR_SECRET_KEY = process.env.SECRET_KEY;

exports.createToken = async function (req, res, next){
    try{
        const user = await User.find(req.body);
        if(user.length){
            const token = jwt.sign({
                userId: user[0].userId
            }, YOUR_SECRET_KEY, {
                expiresIn: '1h'
            });
            
            res.cookie('user', token);
            res.status(201).json({
                result: 'ok',
                token
            });
        }else{
            res.status(400).json({ error: 'invalid user'});
        } 
    }catch(err){
        console.error(err);
        next(err);
    }
};

exports.createNewUser = async function(req, res, next){
    try{
        const user = await new User(req.body).save();
        res.status(201).json({
            result:'ok',
            user:user
        })
    } catch(err){
        console.error(err);
        next(err);
    }
}

exports.createNewPost = async function(req, res, next){
    try{

        const board = await new Board(req.body).save();
        res.status(201).json({
            result:'ok',
            board:board,
        })
        
    } catch(err){
        console.error(err);
        next(err);
    }
}