<template>

 <div class="login">
  <div class="login-box">

    <h1>Web management system</h1>
  <div>
    <span>userID：</span>
    <input type="text" name="userID" v-model="account">
  </div>

  <div>
    <span>password：</span>
    <input type="password" name="password" v-model="password">
  </div>
      <input type="submit" class="button" value="REGISTER" @click="register">
      <input type="submit" class="button" value="LOGIN" @click="login">

  </div>
 </div>
</template>


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
                        this.$router.push('/admin/manageEssay')
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
                            that.$router.push('/admin/manageEssay')
                        }
                    })

            }
        }
    }

</script>

<style>

  h1{
    padding-top: 1em;
  }
  .login{
    width: 100%;
    height: 45em;
    background-color: #f2f2f2;
    position: relative;
  }

  span{
    display: inline-block;
    width: 5em;
  }

  .login-box{
    border-radius: 20px;
    box-shadow: 0 0 10px  darkgrey;
    background-color: white;
    width: 50%;
    height: 40%;
    position: absolute;
    margin:8em auto auto auto;
    top: 0;left: 0;right: 0;bottom: 0;

  }

</style>
