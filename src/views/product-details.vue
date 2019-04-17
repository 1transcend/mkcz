<template>
    <div id="app">
        <Header/>

        <div class="sp-bj">
            <div class="sp-img">
                <img src="../assets/images/sp.png" alt="图片">
            </div>
            <div class="sp-ms">
                <p class="sp-title">网站建设 制作开发 网站建设 制作开发 网站建设 制作开发 网站建设 制作开发</p>
                <div class="sp-left">
                    <p class="sp-money">￥100.00</p>
                    <p class="sp-gx">已更新20期&nbsp;|&nbsp;124人订阅</p>
                </div>
                <div class="sp-right">
                    <img class="shy" src="../assets/images/shy.png" alt="送好友">
                    <img class="sc" src="../assets/images/sc.png" alt="收藏">
                    <div class="qcfd">
                    <p class="sp-sc">收藏</p>
                    <p class="sp-shy">送好友</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="sp-xq">
            <div class="sp-header">
                <p class="sp-title1">商品详情</p>
                <p class="sp-fgx"></p>
            </div>
            <div class="sp-content">
                <p class="sp-wt">买家常见问题：</p>
                <p class="sp-xg">网站做成以后，可以修改布局和布局以及网页的宽高吗？</p>
                <p class="sp-da">答：模板网站是可以的，网站建设完成以后，进入后台的排版模式就可以可视话的进行调整</p>
            </div>
            <div class="sp-content1">
                <div class="sp-ms">
                    <p class="sp-title1">而我们却认为大错特错</p>
                    <p class="sp-title2">网站是给您客户看的，不是拿来您自己观赏的！网站不只是艺术品！</p>
                </div>
                <div class="sp-img1">
                    <img src="../assets/images/cp1.png" alt="">
                </div>
            </div>
        </div>

        <div class="footer1">
            <div class="footer1-left">
                <img class="sc2" src="../assets/images/sc1.png" alt="收藏">
                <img src="../assets/images/gwc.png" alt="购物车">
                <div class="qcfd">
                    <span class="sc1">收藏</span>
                    <span class="gwc">购物车</span>
                </div>
            </div>
            <div class="footer1-right">
                <div class="gm">立即购买</div>
                <div class="zx">点击咨询</div>
            </div>
        </div>

        <Footer/>
    </div>
</template>

<script>
import Footer from "@/components/Footer";
import Header from "@/components/Header";
export default {
    components:{
        Footer,
        Header
    }
}
</script>

<style scoped>
    #app{
        background:rgba(235, 235, 235, 1);
    }
    header{
    width: 100%;
    background:rgba(242,242,242,1);
    height: 5rem;
    }
    .header-left{
        float: left;
        width: 50%;
        height: 100%;
    }
    .header-left .header-home{
        float: left;
        margin-top: 1.45rem;
        margin-right: 0.4rem;
        margin-left: 1rem;
        width: 1.5rem ;
        height: 1.5rem ;
        background:url(../assets/images/home.png);
        background-size: 100%;
    }
    .header-left .header-title{
        float: left;
        margin-top: 1.68rem;
        font-size: 0.8rem;
    }
    .header-right{
        float: right;
        width: 50%;
        height: 100%;
    }
    .header-right .personal{
        float: right;
        width: 1.5rem ;
        height: 1.5rem ;
        margin-top: 1.45rem;
        margin-right: 1rem;
        background:url(../assets/images/personal.png);
        background-size:100%;
    }
    .header-right .ewm{
        float: right;
        width: 1.5rem;
        height: 1.5rem;
        margin-top:1.45rem;
        margin-right: 1rem;
        background:url(../assets/images/ewm.png);
        background-size:100%;
    }
    .header-right .search{
        float: right;
        width: 1.5rem;
        height: 1.5rem;
        margin-top:1.45rem;
        margin-right: 1rem;
        background:url(../assets/images/search.png);
        background-size:100%;
    }

    .sp-bj{
        width: 100%;
        height: 100%;
        background-color:#fff;
        margin-top:5rem;
    }
    .sp-img img{
        width: 100%;
        height: 15rem;
    }
    .sp-ms{
        width: 100%;
        height: 10rem;
    }
    .sp-ms p{
        margin:0 0 0 1rem;
    }
    .sp-ms .sp-title{
        font-size:1.1rem;
        margin-right:1rem;
        margin-bottom:1rem;
        margin-top:1rem;
    }
    .sp-ms .sp-left{
        float: left;
    }
    .sp-left .sp-money{
        font-size:1.2rem;
        color:rgba(255, 159, 45, 1);
        margin-bottom:1rem;
    }
    .sp-left .sp-gx{
        font-size:0.8rem;
        color:rgba(176,176,176,1);
    }
    .sp-right{
        float: right;
        padding-right:1rem;
    }
    .sp-right .sc{
        float:right;
    }
    .sp-right .shy{
        float:right;
        margin-left:1.5rem;
        margin-right: 0.5rem;
    }
    .sp-right .qcfd{
        clear: both;
    }
    .sp-right .sp-sc{
        display:inline-block;
        margin-right:0.4rem;
        font-size:0.8rem;
        color:rgba(176,176,176,1);
        margin-top:0.5rem;
    }
    .sp-right .sp-shy{
        display:inline-block;
        font-size: 0.8rem;
        color:rgba(176,176,176,1);
        margin-right:0.2rem;
        margin-top:0.5rem;

    }
    .sp-xq{
        width: 100%;
        height: 100%;
        background-color:#fff;
    }
    .sp-xq .sp-header{
        width: 100%;
        height: 4rem;
        border-bottom:1px solid rgba(236,236,236,1);
    }
    .sp-header .sp-title1{
        margin-bottom:0;
        text-align: center;
        line-height: 4rem;
    }
    .sp-header .sp-fgx{
        margin:0 auto;
        height: 4px;
        width: 7rem;
        background:rgba(57,197,56,1);
        margin-top: -0.1rem;
    }
    .sp-xq .sp-content{
        width: 100%;
        height: 100%;
        background-color:#fff;
    }
    .sp-content p{
        margin:0;
        padding:1rem 1rem 0 1rem;
    }
    .sp-content .sp-wt{
        font-weight:700;
    }
    .sp-content .sp-xg{
        color: rgba(255, 136, 1, 1);
        font-size:0.8rem;
        font-weight: bold;
    }
    .sp-content .sp-da{
        font-size:0.8rem;
        padding-bottom:1rem;
    }
    .sp-content1{
        width: 100%;
        height: 100%;
    }
    .sp-content1 .sp-ms{
        height: 6em;
        background:rgba(9,69,18,1);
    }
    .sp-content1 .sp-ms .sp-title1{
        text-align:center;
        color:#fff;
        font-size:1.5rem;
        padding-right:1rem;
        padding-top:0.5rem;
    }
    .sp-content1 .sp-ms .sp-title2{
        text-align:center;
        color:#fff;
        padding-right:1rem;
        padding-bottom:1rem;
    }
    .sp-content1 .sp-img1 img{
        width: 100%;
        height: 30rem;
    }
    .footer1{
        background-color:#fff;
        width: 100%;
        height: 5rem;
        margin-bottom:5rem;
    }
    .footer1 .footer1-left{
        float: left;
        width: 30%;
        height: 100%;
    }
    .footer1 img{
        margin-top:1rem;
        margin-left:1rem;
    }
    .footer1 .sc2{
        margin-right:0.5rem;
    }
    .footer1 span{
        font-size:0.8rem;
        color:rgba(158,158,158,1);
        margin-left:1rem;
    }
    .footer1 .sc1{
        margin-left:0.8rem;
    }
    .footer1-right{
        position: relative;
        float: right;
        width: 70%;
        height: 3rem;
        margin-top: 1rem;
    }
    .footer1-right div{
        font-size:0.8rem;
        float: right;
        width: 40%;
        height: 100%;
        line-height:3rem;
        text-align:center;
    }
    .footer1-right .zx{
        color: #fff;
        border-top-left-radius: 2rem;
        border-bottom-left-radius: 2rem;
        background:rgba(255,189,3,1);
    }
    .footer1-right .gm{
        color: #fff;
        border-top-right-radius: 2rem;
        border-bottom-right-radius: 2rem;
        background:rgba(254,112,0,1);
        margin-right:1rem;
    }
</style>
