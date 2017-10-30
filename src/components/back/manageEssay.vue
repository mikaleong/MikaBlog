<template>
    <div id="content">
        <div class="essayBar">
        <button @click="writeEssay" >新建文章</button>
            <button @click="logout" >退出登录</button>
        </div>
        <div class="essayList" v-for="item in essays">
            <div class="essayTitle">{{item.title}}</div>
            <div class="essayEdit" @click="editEssay(item._id)">Edit</div>
            <div class="essayDelete" @click="deleteEssay(item._id)">delete</div>
        </div>

    </div>

</template>

<style>

    .essayList{
        padding-top: 1rem;
    }

    .essayTitle{
        display: inline;
    }

    .essayEdit{
        display: inline;
    }

    .essayDelete{
        display: inline;
    }


</style>

<script>

    export default{
        data(){
            return {
                essays: []
            }
        },
        created(){
            this.$http.get("api/admin/essays").then(
                (response)=>this.essays=response.body,
                (response)=>console.log(response)
            )
        },
        methods:{

            logout:function () {

                this.$http.get('/api/admin/logout');
            },

            //更新文章列表
            refresh:function () {
                this.$http.get('api/admin/essays').then(
                    (response)=>this.essays=response.body,
                    (response)=>console.log(response)
                )
            },
            //写文章
            writeEssay:function(id){
                //跳转至编辑页面
                this.$router.push('/admin/editEssay')
            },

            //编辑文章
            editEssay:function(id){
                //跳转至编辑页面
                this.$router.push('/admin/editEssay/'+id)
            },

            //删除文章

            deleteEssay:function (id) {
                var that=this;
                that.$http.post('api/admin/deleteEssay/'+id).then(
                    (response)=>{
                        that.refresh();
                    }
                )

            }

        }
    }

</script>
