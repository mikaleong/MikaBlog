<template>

    <div class="edit_body">

        <div class="edit">

        <p >Title</p>
        <input class="edit_title" v-model="title" placeholder="Untitled">
        <p >Content</p>
        <textarea class="edit_content" v-model="content" placeholder="just typing something"></textarea>

        <div class="save_button" @click="saveEssay"><span>Save</span></div>

        </div>
    </div>

</template>

<style>
    .edit{
        margin-top: 5em;
    }
    .edit_body{
        height: 52em;
        background-color: #f7f7f7;
    }

    .save_button{

        margin: 2em 0 0 45%;
        font-size: 1em;
        width: 6em;
        height: 2em;
        border-radius: 10%;
        background-color: #eaeaea;
        color: darkgray;

    }



    .save_button span{

        text-align: center;
        margin-top: 0.3em;

    }


    .edit_body p{
        text-align: left;
        padding-left: 25%;

    }
    .edit_title{
        width: 50%;
        height: 2em;
        font-size: 1em;
        overflow: hidden;
        border: none;
        color: #777777;
    }
    .edit_content{
        word-wrap:normal;
        border: none;
        font-size: 1em;
        overflow:scroll;
        width: 50%;
        height: 30em;
        color: #777777;
    }

    @media screen and (max-width: 980px) {

        .edit p{
            padding-left: 10%;
        }
        .edit_title{
            width: 80%;
        }
        .edit_content{
            width: 80%;
        }

    }

</style>

<script>

    export default{
        data(){
            return{
                title:'',
                content:''
            }
        },
        created(){
            if(this.$route.params.id) {
                this.$http.get('api/admin/essay/'+this.$route.params.id).then(
                    (response)=>{
                        this.title=response.body[0].title;
                        this.content=response.body[0].content;
                    }
                )

            }
        },

        methods:{
            // 保存文章
            saveEssay:function () {
                if(this.$route.params.id){
                    //保存编辑后的文章
                    var that=this;
                    var essay={
                        title:that.title,
                        content:that.content
                    };
                    that.$http.post('api/admin/editEssay/'+this.$route.params.id,essay).then(
                        (response)=>{
                            alert("Save essay successfully")
                            console.log(response);
                            this.$router.push('/essay/'+this.$route.params.id)
                        }
                    )
                }else{
                    //保存新建的文章
                var that=this;
                    var essay={
                        title:that.title,
                        content:that.content
                    };
                    that.$http.post('api/admin/save',essay).then(
                        (response)=>{
                            alert("Save essay successfully")
                            console.log(response);
                            this.$router.push('/essay/'+response.body._id)
                        }
                    )
                }
            }

        }
    }

</script>
