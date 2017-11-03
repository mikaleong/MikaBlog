<template>
    <div class="about">


        <div class="about_pic">
            <img class="about_pic" src="../../assets/img/FullSizeRender 2.jpg">
        </div>

        <div class="about_detail">

            <h1>Wing Yu Leung</h1>

            <div class="intro">
                <p>一只希冀平衡技术与艺术的少女，处于探索阶段的程序媛</p>
                <p>蜗居广东深圳，现就读世一大软件工程专业，兴趣前端方向</p>
                <p>喜欢摄影、旅行、阅读、设计、插花、烹饪，也喜欢从事新媒体运营</p>
                <p>愿以热情拥抱世界，研习未知的领域</p>
            </div>

            <div class="technique">
                <p>前端：HTML / CSS / JavaScript / Vue.js / Node.js</p>
                <p>设计：Photoshop / Indesign / LightRoom / Illustrator</p>
            </div>


            <div  class="contact">

                <a  href="https://www.zhihu.com/people/mikaleong" target="_blank">
                    <img ref="zhihu" class="zhihu" src="../../assets/img/zhihu-link.png"></a>
                <a href="https://weibo.com/213b" target="_blank"><img class="weibo" src="../../assets/img/weibo-link.png"></a>
                <a href="https://github.com/mikaleong" target="_blank"><img class="github" src="../../assets/img/github-link.png"></a>

            </div>
        </div>

    </div>

</template>

<script>
    
    export default{
        
        data(){
            return{
                
            }
        },
        methods:{


        }
    }
    
</script>


<style>

    .about_pic{
        width: 15em;
        border-radius: 50%;
        position: absolute;
        left: 18%;
        top:30%;
        box-shadow:1px 1px 10px #888888;
    }

    .about{
        background-color:#f7f7f7;
        width: 100%;
        height:45em;
        background-size:100%,45em;
        position: relative;

    }


    .about_detail{
        border-radius: 50%;
        background-color: white;
        width: 35em;
        height: 35em;
        position: absolute;
        top:10%;
        left: 38%;
        opacity: 0.8

    }

    .about_detail h1{
        padding-top: 2em;
        color: #c47d7d;
    }


    .technique{
        margin-top:2em;
    }

    .zhihu,.weibo,.github{
        width: 3em;
        height:auto;
        padding:2em 3em 0 3em;
    }



</style>
