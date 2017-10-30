/**
 * Created by mika13 on 10/23/17.
 */

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test');

const userSchema = new mongoose.Schema({
    account : String,
    password : String
});

var articleSchema =new mongoose.Schema({
    title:String,
    content:String,
});


const Models = {
    Users : mongoose.model('Users',userSchema),
    Article:mongoose.model('Article',articleSchema)
};

module.exports = Models;