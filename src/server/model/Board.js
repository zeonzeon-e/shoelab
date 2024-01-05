const {mongoose, Schema, model} = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);

const BoardSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    imageURL: {type: String, required: true},
}, {
        timestamps: true
})

const Board = model('board', BoardSchema);
module.exports = {Board};

//unique: true = 중복으로 데이터가 생성되지 않도록 만드는 것
