<template>

 <div class="login">



  <div class="login_box">

      <div class="login_component">
    <p>ACCOUNT</p>
    <input type="text" name="userID" v-model="account">

    <p>PASSWORD</p>
    <input type="password" name="password" v-model="password">

      <div class="login_button" @click="login">LOGIN</div>

  </div>

  </div>
 </div>
</template>

<style>

    .login_component{
        padding-top: 2.5em;
    }

    .login_button{
        background-color: #c47d7d;
        color: white;
        width: 8em;
        margin-left: 40%;
        margin-top: 2em;

    }


    .login_box input{
        border: none;
        border-bottom: 1px solid darkgray;
        background-color: white;
    }

    .login_box p{
        font-size: 0.8em;
        text-align: left;
        padding-left: 50%;

    }

    h1{
        padding-top: 1em;
    }
    .login{
        width: 100%;
        height: 40em;
        background-color: #f7f7f7;
        position: relative;
    }

    span{
        display: inline-block;
        width: 5em;
    }

    .login_box{
        border-radius: 20px;
        box-shadow: 0 0 10px  darkgrey;
        background-color: white;
        width: 50%;
        height: 40%;
        position: absolute;
        margin:8em auto auto auto;
        top: 0;left: 0;right: 0;bottom: 0;
        opacity: 0.95;

    }

</style>


<script>
    export default {
        data() {
            return {
                account: '',
                password: ''
            }
        },
        created(){
            this.$http.get('/api/admin').then(
                (response)=>{
                    if(response.body.code===0){
                        this.$router.push('/admin/back')
                    }
                }
            )

        },
        methods: {
            register(){
                var that=this;
                let newaccount={
                    account:that.account,
                    password:that.password
                };
                this.$http.post('/api/admin/register',newaccount).then(
                    (response) =>{
                        console.log(response);
                    })

            },

            login() {
                let that=this;
                let newaccount={
                    account:that.account,
                    password:that.password
                };
                this.$http.post('/api/admin/inspect',newaccount).then(
                    (response) => {
                        console.log(response);
                        if (response.body.code===0) {
                            that.$router.push('/admin/back')
                        }else{
                            alert("Fail to login!")
                        }
                    })

            }
        }
    }

</script>
