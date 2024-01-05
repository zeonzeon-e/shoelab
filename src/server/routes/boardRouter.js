const { Router } = require('express');
const boardRouter = Router();
const mongoose = require('mongoose');
const {User} = require('../model/User');
const {Board} = require('../model/Board');
const {Counter} = require('../model/Counter');
const cors = require('cors')
const multer = require('multer');
const path = require('path');
const boardController = require('../utils/User.jwt');
const fs = require('fs');
// const storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, "./public/image");
//     },
//     filename: function(req, file, cb){
//         cb(null, file.originalname+"날짜"+new Date());
//     },
//     filefilter: function(req, file, cb){
//         var ext = path.extname(file.originalname);
//         if(ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg"){
//             return console.log(new Error("PNG, JPG만 업로드해세요"));
//         }
//     },
//     limits:{
//         fileSize: 1024*1024,
//     }
// })
// try{
//     fs.readFileSync('uploads');
// }catch(err){
//     console.error('uploads 폴더가 없습니다. 폴더를 생성합니다');
//     fs.mkdirSync('uploads');
// }
const upload = multer({
    storage: multer.diskStorage({ // 저장한공간 정보 : 하드디스크에 저장
        destination: function(req, file, done){ // 저장 위치
            console.log(file);
            done(null, 'public/uploads/'); // uploads라는 폴더 안에 저장
        },
        filename: function (req, file, done) { // 파일명을 어떤 이름으로 올릴지
            const ext = path.extname(file.originalname); // 파일의 확장자
            done(null, path.basename(file.originalname, ext) + Date.now() + ext); // 파일이름 + 날짜 + 확장자 이름으로 저장
        }
    }),
});
let ID = '';

boardRouter.use(cors({
    origin: true,
    Credentials: true,
}))

boardRouter.get('/', async(req, res)=> {
    try{
        const Boards = await Board.find();
        console.log(Boards)
        return res.send(Boards);

    }catch(err){
        console.log(err);
        return res.status(500).send({err: err.message});
    }    
})

boardRouter.post('/uploadPhoto', upload.single('uploadImg'),async(req,res)=> {
    console.log("-------------------");
    console.log(req.file, req.body);
    const imagePath = req.file.path.replace('public', '');
    const board = new Board(
        {
            ...req.body,
            imageURL: imagePath
        })
    try{
        await board.save();
        res.redirect('http://localhost:3000/board');
    }catch(err){
        res.status(500).send(err);
    }
})
boardRouter.post('/write', boardController.createNewPost
// async function(req, res, next){
    
    // const count = await mongoose.model.counter.find()
    // console.log(count)
    // await mongoose.model.counter.findOne({name : "idx"}, function(err, result){
    //     var totalPosts = result.totalPosts;
    //     var submitData = {
    //         _id : totalPosts + 1,
    //         title : req.body.title,
    //         content : req.body.content
    //     }

    //     mongoose.model.board.insertOne(submitData, function(err, result){
    //         console.log('게시물 저장 완료');
    //         mongoose.model.counter.updateOne({name : "idx"}, { $inc: {totalPosts: 1}}, function(err,result){
    //             console.log('총 게시물 개수 업데이트 완료')
    //         })
    //     })

    // })
//}
    
);

module.exports = {boardRouter}