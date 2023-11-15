
const mongoose = require("mongoose");
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

const bcrypt = require("bcrypt"); // 비밀번호를 암호화 시키기 위해
const saltRounds = 10; // salt를 몇 글자로 할지

// save하기 전에 비밀번호를 암호화 시킨다.
userSchema.pre("save", function (next) {
  const user = this;
  // 비밀번호를 바꿀 때만 암호화 시킨다.
  if (user.isModified("password")) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});