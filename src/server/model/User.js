const {Schema, model} = require('mongoose');

const UsreSchema = new Schema({
    userName: {type: String, required: true, unique: true},
    userId: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},}, {
        timestamps: true
})

const User = model('user', UsreSchema);
module.exports = {User};

//unique: true = 중복으로 데이터가 생성되지 않도록 만드는 것
