<template>

    <div class="edit">

        <p >Title</p>
        <input class="edit_title" v-model="title" placeholder="Untitled">

        <p >Content</p>
        <textarea class="edit_content" v-model="content" placeholder="just typing something"></textarea>

        <div class="save_button" @click="saveEssay">Save</div>

    </div>

</template>

<style>

    .edit p{
        text-align: left;
        padding-left: 25%;
    }
    .edit_title{
        width: 50%;
        height: 2em;
    }
    .edit_content{
        width: 50%;
        height: 40em;
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
                            console.log(response);
                            this.$router.push('/essays')
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
                            console.log(response);
                            this.$router.push('/essays')
                        }
                    )
                }
            }

        }
    }

</script>
