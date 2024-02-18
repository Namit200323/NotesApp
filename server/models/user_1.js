const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passport = require('passport-local-mongoose');

const UserSchema = new Schema({
    email:{
        type: text,
        required: true,
        unique:true
    }
});

UserSchema.plugin(passport);

module.exports = mongoose.model('User_1',UserSchema);