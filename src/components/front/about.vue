<template>
    <div class="about">


        <div class="about-detail">

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


            <div class="contact">

                <a href="https://www.zhihu.com/people/mikaleong" target="_blank"><img class="zhihu" src="../../assets/img/zhihu-link.png"></a>
                <a href="https://weibo.com/213b" target="_blank"><img class="weibo" src="../../assets/img/weibo-link.png"></a>
                <a href="https://github.com/mikaleong" target="_blank"><img class="github" src="../../assets/img/github-link.png"></a>

            </div>
        </div>

    </div>

</template>


<style>

    .about{
        background-color:#f0f0f0;
        width: 100%;
        height:45em;
        background-size:100%,45em;
        position: relative;

    }


    .about-detail{

        background-color: white;
        width: 50%;
        height: 32em;
        position: absolute;
        top:20%;
        opacity: 0.8

    }

    .about-detail h1{
        padding-top: 1em;
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
