<template>
    <div class="body">
        <div class="essay_intro">
            <p>Search Result*</p>
        </div>

        <div class="essay_list">
            <div class='essay_box' v-for="item in essays" @click="read(item._id)" >
                <div class="essay_title ">{{item.title}}</div>
            </div>
        </div>



    </div>
</template>

<style>

    .essay_intro{
        padding-top: 7em;
        padding-left: 3em;
    }
    .essay_intro p{
        font-size: 3em;
        font-weight: 700;
        text-align: left;
        line-height: 0;
    }
    .essay_list{
        margin-left: 1em;
    }
    .essay_box{
        background-color: white;
        margin-top: 2em;
        margin-left: 2em;
        width: 20%;
        height: 10em;
        float: left;
        border:5px dotted #bfbfbf;
        position: relative;
        overflow: hidden;
        border-radius: 1em
    }

    .essay_title{
        position: absolute;
        letter-spacing: 1em;
        line-height: 2.5em;
        font-weight: 500;
        font-size: 1.3em;
        text-align: left;
        left:10%;

    }

    .body{
        margin-bottom: 10em;
    }

</style>

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