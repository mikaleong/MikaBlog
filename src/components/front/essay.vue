<template>

  <div class="essay">
    <div>{{content}}</div>

  </div>

</template>

<script>

  export default{
      data(){
          return{
              content:""
          }
      },
    created(){
        let id = this.$route.params.id;
          this.$http.get('/api/admin/essay/'+id).then(
              (response)=>  this.content=response.body[0].content,
              (response)=>console.log(response)
          )
    }
  }

</script>
