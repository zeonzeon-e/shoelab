const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongoose = require("mongoose");
//ES6 Promise 사용

mongoose.connect("mongodb+srv://admin:0713@atlascluster.pjn68in.mongodb.net/Shoelab?retryWrites=true&w=majority",{
}).then(
    (response) => {
        console.log("Successfully connected to mongodb");
    }
).catch(e => {
    console.error(e);
})

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post('/login', (req, res) => {
    const user = new User(req.body);
    user.save((err, userInfo) => {
        if(err) return res.json({success: false, err});
        return res.status(200).json({
            success: true,
        })
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxLength: 50,
    },
    password: {
        type: String,
        minLength: 5,
    },
    role: {
        //관리자와 일반 유저 구분
        type: Number,
        default: 0,
    }
})

const User = mongoose.model('User', userSchema)

module.exports = {User}