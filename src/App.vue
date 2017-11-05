<template>
  <div id="app">

    <div class="navbar">
      <ul class="nav_list">
        <li class="search_box" > <input type="search" v-model="text" >
          <div class="search_icon" @click="search(text)">
            <img src="../static/search.png"> </div>
        </li>
        <li > <router-link to="/homepage">HOMEPAGE</router-link></li>
        <li>  <router-link to="/essays">ESSAYS</router-link></li>
        <li>  <router-link to="/about">ABOUT</router-link></li>
        <li><router-link to="/login">LOGIN</router-link></li>
      </ul>
    </div>


<transtion :name="transitionName">
    <router-view class="view" id="view"></router-view>
</transtion>

    </div>

</template>


<script>
export default {
  name: 'app',
    data(){
      return{
      text:'',
      transitionName: 'slide-right'
      }
    },
    watch: {
        '$route' (to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
    }
    ,
    methods:{
        search:function (text) {
            this.$router.push('/search/'+text)
        }
    }
}
</script>

<style>



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

  .search_box input{
    height: 2em;
    width: 9em;
  }

  .search_icon{
    display: inline;
  }
  .search_icon img{
    height: 1.2em;
    width: 1.2em;
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



  @media screen and (max-width: 980px) {


    .search_box{
      margin-right: -100em;
}

    .navbar{
      height: 5em;
    }
    .nav_list li{
      font-size: 2em;
    }

    .search_box input{
      width: 5em;
      border: solid 0.2em darkgray;
      margin-left: -100em;
    }
  }

</style>
