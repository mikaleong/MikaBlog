
const api = require('./api');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser')
const express = require('express');
const session = require('express-session')
const cookieParser=require('cookie-parser')

const app = express();


app.use(session({
    name:'ikey',
    secret: 'mika13',
    saveUninitialized: false,
    resave: false,
    cookie: {maxAge: 60000
    }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(api);


// 监听8088端口
app.listen(8088);
console.log('success listen…………');