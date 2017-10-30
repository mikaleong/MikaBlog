const db = require('./db');
const express = require('express');
const router = express.Router();
const user=require('./user').items;

//关键字搜索文章

router.get('/api/search/:text',(req,res)=>{

    let index=req.params.text;
    db.Article.find({title:eval('/'+index+'/')},function (err,data) {
        if(err){
            console.error(err);
            res.send(err);
            return
        }else{
            res.send(data);
        }
    })


});

router.get('/api/admin/essay/:id',(req,res)=>{

    db.Article.find({_id:req.params.id},function (err,data) {
        if(err){
            console.error(err)
            res.send(err)
            return
        }else{
            res.send(data)
        }
    })
    }
);

router.get('/api/admin/essays',(req,res)=>{
    db.Article.find({},function (err,data) {
        if (err) {
            console.error(err);
            res.send(err);
            return
        } else {
            res.send(data)
        }
    });
});


router.post('/api/admin/register',(req,res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    let newAccount = new db.Users({
        account: req.body.account,
        password: req.body.password
    });
    // 保存数据newAccount数据进mongoDB
    newAccount.save((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send('create account succeed');
        }
    });
});

//删除文章

router.post('/api/admin/deleteEssay/:id',(req,res)=>{

    db.Article.remove({_id:req.params.id},(err)=>{

        if(err){
        console.error(err);
        res.send(err);
        }else{
            res.send();
        }

    })

});


//保存新文章
router.post('/api/admin/save',(req,res) => {

    let newEssay = new db.Article({
        title: req.body.title,
        content: req.body.content
    });
    newEssay.save((err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.send('create essay succeed');
        }
    });
});

//保存编辑后的文章

router.post('/api/admin/editEssay/:id',(req,res)=>{

    let newEssay=new db.Article({
        title:req.body.title,
        content:req.body.content,
    });

    db.Article.find({_id:req.params.id},(err,data)=>{

        if(err){
            console.error(err);
            res.send(err);
            return
        }else{

            data[0].title=newEssay.title;
            data[0].content=newEssay.content;

           data[0].save((err)=>{

               if(err){
                   console.error(err);
                   res.send(err);
               }else{
                   res.send();
               }

           })

        }

    })


});

const findAccount=function (account,password) {
    return user.find(function (item) {
        return item.account===account && item.password===password;
    })
};

router.post('/api/admin/inspect',(req,res) => {

    var loginAccount=findAccount(req.body.account,req.body.password);

    if(loginAccount){
        req.session.regenerate(function (err) {
            if(err){
                console.error(err);
                res.json({code:2,msg:'fail to login'})
                return;
            }else{
                req.session.account=loginAccount.account;
                res.json({code:0,msg:'successfully!'})

            }
        })
    }else{
        res.json({code:1,msg:'account does not exist or password is wrong!'})
    }



});

router.get('/api/admin/logout',(req,res)=>{
   req.session.account=null;
   res.redirect('/login')
});

router.get('/api/admin',function (req,res) {
    const loginAccount = req.session.account;
    const isLogined = !!loginAccount;
    if (isLogined) {
        console.log('Having logined');
        res.json({code:0,msg:'Having logined!'})

    } else {
        console.log('Having not logined');
        res.json({code:1,msg:'Having not logined!'})
    }
});


module.exports = router;