<template>
    <div>
        <div class="button_group">
    <div class="newButton" @click="writeEssay" >Write an article</div>
    <div class="manageButton" @click="manageEssay" >Manage articles</div>
        </div>
    </div>
</template>

<style>
    .button_group{
        margin-left: 5%;
        margin-top: 20em;
    }
    .newButton{
        font-size: 3em;
        background-color: #c47d7d;
        color: white;
        width: 30%;
        text-align: left;
}
    .manageButton{
        font-size: 3em;
        background-color: black;
        color: white;
        width: 50%;
        margin-top: 1em;
        text-align: left;
    }
</style>

<script>
    
    export default{
        
        data(){
            return{
                
            }
        },
        methods:{
            writeEssay:function(){
                //跳转至编辑页面
                this.$router.push('/admin/editEssay')
            },
            manageEssay:function () {
                this.$router.push('/admin/manageEssay')
            }
        }
        
    }
    
</script>