<template>
  <div id="app">

    <div class="navbar">
      <ul class="nav_list">
        <li></li>
        <li class="search_box" > <input type="search" v-model="text" > <button @click="search(text)">SEARCH</button></li>
        <li> <router-link to="/homepage">HOMEPAGE</router-link></li>
        <li>  <router-link to="/essays">ESSAYS</router-link></li>
        <li>  <router-link to="/about">ABOUT</router-link></li>
        <li><router-link to="/login">LOGIN</router-link></li>
      </ul>
    </div>



    <router-view class="view" id="view"></router-view>


    </div>

</template>

<script>
export default {
  name: 'app',
    data(){
      return{
      text:''
      }
    },
    methods:{
        search:function (text) {
            this.$router.push('/search/'+text)
        }
    }
}
</script>

<style>

  .nav_list li img{
    width: 5em;
  }
  .navbar{
   position: relative;
    display: block;
    width: 100%;
    height: 4em;
    background-color: white;
    border-bottom: solid #ededed 0.05em;
  }

  .search_box{
    margin-right: 7em;
  }

  .search_box button{
    color: darkgrey;
  }

  .nav_list{
    width: 100%;
    position: absolute;

  }

.nav_list li{
  list-style: none;
  float: left;
  text-align: center;
  padding:0 0 0 9%;
}

.nav_list li a{
  text-decoration: none;
}

  .nav_list li a:link{
    color: #bfbfbf;
  }

  .nav_list li a:visited{
    color: #bfbfbf;
  }

  .nav_list li a:hover{
    color:#ce7b79;
  }

  .nav_list li a:active{
    color:#ce7b79;
  }

  .nav_list li a.router-link-active::before{
    content:"[";
    height:100%;
    font-size:1em;
    color:#ce7b79;
  }

  .nav_list li a.router-link-active::after{
    content:"]";
    height:100%;
    font-size:1em;
    color:#ce7b79;
  }


.view{
  width:100%;
  overflow-y: scroll;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
