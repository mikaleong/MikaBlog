<template>
<div>
  <div class="detail_body">
    <div class="detail">
    <div class="detail_title">《{{title}}》</div>
      <div class="detail_content">{{content}}</div>
    </div>

    <div class="comment">

      <div class="comment_box">
        <input class="comment_input" type="text" placeholder="Nickname" v-model="nickname">
      <input class="comment_input" type="email" placeholder="Email" v-model="email">
        <input class="code_input" type="text"  v-model="captcha">
        <div class="code_box" @click="createCode" v-model="code" >{{code}}</div>
        <div class="comment_button" @click="submitComment">submit</div>
       <textarea  ref="comment_box"  placeholder="write your comment here...." v-model="comment" ></textarea>

        <div class="code_box">

        </div>

      </div>



      <div class="comment_list">
      <div class="comment_item" v-for="item in comments">
        <div class="comment_name">
          <span>{{item.nickname}}</span>
          <span  class="comment_reply" @click="reply_comment(item.nickname)"> >> REPLY</span>
          <div class="comment_delete" @click="delete_comment(item._id)">X</div>
        </div>

        <p>{{item.comment}}</p>
      </div>
      </div>
    </div>
  </div>
</div>

</template>


<style>


  .comment_delete {
    display: inline;
  color: #eaeaea;
    font-size: 0.7em;
    position: absolute;
    left: 90%;
  }
  .comment_reply{
    font-weight: normal;
    font-size: 0.7em;
    color: #c47d7d;

  }

  .comment_button{
    display: inline;
    margin-left: 3em;
    background-color: #ffeded;
    color: dimgray;
    border-radius: 50%;

  }
  .code_box{
    display: inline;
    margin-left: 0.5em;
    background-color: #f7f7f7;


  }

  .code_input{
    display: inline;
    font-size: 1em;
    color:#777777;
    width: 4em;
  }

  .comment_list{

  }
  .comment_item {
    margin: 1em 0 2em 25%;
    background-color: white;
    box-shadow: 1px 1px 3px #eaeaea;
    width: 48%;
    height: 6em;
    position: relative;
  }

  .comment_name{
    position: absolute;
    text-align: left;
    top:1em;
    left: 1.2em;
    font-weight: bold;
    width: 100%;
  }

  .comment_item p{
    position: absolute;
    text-align: left;
    left:1em;
    top:2em;
    color: #777777 ;
    line-height: 2;
    letter-spacing: 0.1em;
    text-align: left;
    white-space:pre-wrap;
  }



  .comment_input{
    color:#777777;
    font-size: 1em;
    margin:1em 1em 0 0;
    border: none;
    border-bottom: dashed 1px #eaeaea;
    width: 7em;
  }

  .comment_box textarea{
    border: none;
    overflow: scroll;
    height: 60%;
    width: 95%;
    margin-top: 1em;
    margin-left: 0.5em;
    color:#777777;
    font-size: 1em;
  }

  .comment{
    background-color:#f7f7f7 ;
    width: 100%;
    padding:0.5em 0 0.5em 0;
    position: relative;
  }

  .comment_box{
    margin: 2em 0 3em 25%;
    background-color: white;
    box-shadow: 1px 1px 3px #eaeaea;
    width: 48%;
    height: 12em;

  }


  .detail_title{
    margin-top: 2em;
    font-size: 3em;
    font-weight: 900;

  }

  .detail_content {
    color: #777777;
    width: 50%;
    margin-top: 5em;
    margin-left: 25%;
    margin-bottom: 5em;
    line-height: 2;
    letter-spacing: 0.1em;
    text-align: left;
    white-space:pre-wrap;
  }



  @media screen and (max-width: 980px) {


    .detail_content{
      margin-left: 15%;
      width: 75%;
    }

    .comment_item {
      width: 80%;
      margin: 2em 0 3em 6em;
    }

    .comment_box{
      width: 80%;
      margin: 2em 0 3em 6em;


    }

  }

</style>


<script>

    export default{
        data(){
            return{
                content:"",
                title:"",
                comments:[],
                comment:"",
                nickname:'',
                email:'',
                captcha:'',
                code:'captcha'
            }
        },
        created(){
            let id = this.$route.params.id;
            this.$http.get('/api/admin/essay/'+id).then(
                (response)=> {this.content=response.body[0].content,
                    this.title=response.body[0].title,
                    console.log(response)
                }
            );

            this.$http.get( '/api/comment/'+id).then(
                (response)=> {this.comments=response.body,
                    console.log(response)
                }
            )


        },
        methods:{
            getUserDetails(transition)
            {
                let id = this.$route.params.id;
                this.$http.get('/api/admin/essay/'+id).then(
                    (response)=> {this.content=response.body[0].content,
                        this.title=response.body[0].title,
                        console.log(response)
                    }
                );

                this.$http.get( '/api/comment/'+id).then(
                    (response)=> {this.comments=response.body,
                        console.log(response)
                    }
                )

            },

            delete_comment:function (id) {
                this.$http.post('/api/deleteComment/'+id).then(
                    (response)=>{
                        if(response.body.code===0){
                        alert('Delete this comment successfully')
                        this.refresh();
                        }else{
                            alert('Fail to delete this comment! Maybe you don\'t have the authority to do this!' )
                        }
                    }
                )
            },

            reply_comment:function (name) {
                this.comment="@"+name+':';
                this.$refs.comment_box.focus();

            },

            createCode:function () {
                let captcha='';
                let Length = 4;//验证码的长度
                let random=[];
                random= [ 0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
                    'S','T','U','V','W','X','Y','Z'];
                for(let i = 0; i < Length; i++) {
                    let index = Math.floor(Math.random()*36);//
                    captcha += random[index];//
                }
                this.code = captcha;//
            },
            cleanText:function () {
                this.comment='';
                this.captcha='';
                this.email='';
                this.nickname='';
                this.code='captcha';

            },

            refresh:function () {
                this.$http.get( '/api/comment/'+this.$route.params.id).then(
                    (response)=> {this.comments=response.body,
                        console.log(response);
                        this.cleanText()
                    }
                )

            },

            submitComment:function () {

                let that=this;
                let message={
                    nickname:this.nickname,
                    email:this.email,
                    comment:this.comment
                };

                if(message.nickname===''){
                    alert("The nickname can't be empty!")
                }else if(message.email===''){
                    alert("The email can't be empty!")
                }else if(message.comment===''){
                    alert("The comment can't be empty!")
                }else if(this.captcha===''){
                    alert("The captcha can't be empty!")
                }else if(this.captcha.toUpperCase()!==this.code){
                    alert("The captcha is wrong!")
                }else{

                this.$http.post('/api/saveComment/'+this.$route.params.id,message).then(
                    (response)=>{
                        alert("Submit comment successfully!")
                        console.log(response);
                        that.refresh();
                    }
                )

                }

            }
        }
    }

</script>

