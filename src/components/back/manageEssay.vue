<template>
    <div class="content">

            <div class="logoutButton" @click="logout" >click to LOG OUT</div>
   <div class="essayList">
        <div class="essayBox" v-for="item in essays">
            <div class="essayTitle">《{{item.title}}》</div>
            <div class="essayEdit" @click="editEssay(item._id)">Edit</div>
            <div class="essayDelete" @click="deleteEssay(item._id)">delete</div>
        </div>
   </div>

    </div>

</template>

<style>

    .logoutButton{
        text-align: left;
        color: darkgray;
        padding:1em  0 0 1em;

    }

   .content{
       text-align: center;
   }

    .essayBox{
        margin:0 auto;
        margin-top: 1em;
        width: 50%;

    }

    .essayTitle{
        display: inline;
        background-color: #fceaea;
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
