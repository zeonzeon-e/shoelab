const {mongoose, Schema, model} = require('mongoose');


const ImageSchema = new Schema({
    name: {type: String, required: true},
    desc: {type: String, required: true},
    image:{
        data:Buffer,
        contentType:String,
    }
}, {
        timestamps: true
})

const Image = model('image', ImageSchema);
module.exports = {Image};

//unique: true = 중복으로 데이터가 생성되지 않도록 만드는 것
