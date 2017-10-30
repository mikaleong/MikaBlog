<template>
    <div>

        <p>search result</p>
        <div class='essay' v-for="item in essays">
            <div class="essay_title" @click="read(item._id)">{{item.title}}</div>
        </div>

    </div>
</template>

<script>

    export default{
        data(){
            return{
                essays:[]
            }
        },
        created(){
            let name = this.$route.params.text;
            this.$http.get('/api/search/'+name).then(
                (response)=>this.essays=response.body,
                (response)=>console.log(response)
            )
        },
        methods:{
            read:function (id) {
                this.$router.push('/essay/'+id);
            }

        }

    }
</script>