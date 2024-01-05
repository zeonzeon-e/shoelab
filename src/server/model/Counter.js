const {Schema, model} = require('mongoose');


const CounterSchema = new Schema({
    // userName: {type: String, required: true, unique: true},
    // userId: {type: String, required: true, unique: true},
    idx: {type: Number, default:0, required: true},
})

const Counter = model('counter', CounterSchema);
module.exports = {Counter};
