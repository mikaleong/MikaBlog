<template>

    <div class="edit">

        <span class="edit_title">Title:</span>
        <input v-model="title" placeholder="Untitled">

        <span class="edit_content">Content:</span>
        <input v-model="content" placeholder="just typing something">

        <button class="save_button" @click="saveEssay">Save</button>

    </div>

</template>

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
