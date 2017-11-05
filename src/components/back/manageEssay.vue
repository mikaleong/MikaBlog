<template>
    <div class="content">

            <div class="logoutButton" @click="logout" >click here to LOG OUT</div>
   <div class="essayList">
        <div class="essayBox" v-for="item in essays">
            <div class="essayEdit" @click="editEssay(item._id)"><img class="edit_icon" src="../../assets/img/edit.png"></div>
            <div class="essayDelete" @click="deleteEssay(item._id)"><img class="delete_icon" src="../../assets/img/delete.png"></div>
            <div class="essayTitle">《{{item.title}}》</div>

        </div>
   </div>

    </div>

</template>

<style>

    .essayList{
        margin-top: 5em;
    }

    .edit_icon,.delete_icon{
        width: 1em;
    }

    .logoutButton{
        text-align: left;
        color: darkgray;
        margin:2em 0 0 20em;
        width: 11em;
        border: solid 1px #f7f7f7;
    }

   .content{
       text-align: center;
       margin-bottom: 5em;
   }

    .essayBox{
        margin:0 auto;
        margin-top: 1em;
        width: 50%;
        text-align: left;

    }

    .essayTitle{
        display: inline;
        background-color: #f7f7f7;
        margin-left: 0.5em;
    }

    .essayEdit{
        display: inline;

    }

    .essayDelete{
        display: inline;
        padding-left: 0.5em;
    }
    @media screen and (max-width: 980px) {
        .edit_icon,.delete_icon{
            width: 2em;
        }
        .logoutButton{
            font-size: 2em;
            margin:2em 0 0 2em;

        }

        .essayTitle{
            font-size: 2em;
        }

        .essayBox{
            width: 85%;
            margin-top: 2em;

        }

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
               if(confirm("Are you sure to delete this essay?")) {
                   var that = this;
                   that.$http.post('api/admin/deleteEssay/' + id).then(
                       (response) => {
                           that.refresh();
                       }
                   )
               }

            }

        }
    }

</script>
