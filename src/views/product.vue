<template>
    <div id="app">
        <Header/>

        <div class="head-hz">
            <div class="search">
                <input class="search-k" type="text" placeholder="搜索你要的商品">
                <div class="search-right">
                    <i class="search-xx"></i>
                </div>
            </div>
            <div class="head-img">
                <img src="../assets/images/head-img.png" alt="">
            </div>
        </div>

        <div class="gzh">
            <span class="gzh-zx">最新活动关联的公众号</span>
            <div class="gzh-ms">
                <img class="gzh-img" src="../assets/images/gzh-img.png" alt="图片">
                <p class="gzh-title">无锡明科财致网络</p>
                <p class="gzh-hd">近期活动，买二送一了</p>
                <a class="gzh-gz" href="">关注</a>
            </div>
        </div>

        <div class="conter">
            <div class="conter-nav">
                <ul>
                    <li><a :class="{active:shows==1}" @click="fwshow()" href="#">服务项目</a></li>
                    <li><a :class="{active:shows==2}" @click="webshow()" href="#">Web定制业务</a></li>
                    <li><a :class="{active:shows==3}" @click="xcxshow()" href="#">小程序</a></li>
                    <li><a :class="{active:shows==4}" @click="appshow()" href="#">APP定制</a></li>
                    <li class="conter-zh"><a :class="{active:shows==5}" @click="qyshow()" href="#">企业系统</a></li>
                </ul>
            </div>

            <div class="content">
                <div class="content-left" v-for="(v,k) in info" :key="k">
                    <router-link :to="{path:'/product-details/',query:{id:v.id}}">
                        <img :src="v.image_url" alt="图片">
                        <div class="content-bottom">
                            <p>{{v.brief}}</p>
                            <p>￥{{v.price}}</p>
                            <a href=""></a>
                        </div>
                    </router-link>
                </div>
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
    },
    data(){
        return{
            info:[],
            shows:1
        }
    },
    methods:{
        fwshow:function(){
            this.shows = 1;
        },
        webshow:function(){
            this.shows = 2;
        },
        xcxshow:function(){
            this.shows = 3;
        },
        appshow:function(){
            this.shows = 4;
        },
        qyshow:function(){
            this.shows = 5;
        }
    },
    created(){
        this.axios.get("wxmkczgw/phone.php?app=goods&act=index",{
        })
        .then((res)=>{
            console.log(res['data']['info']);
            console.log(res);
            this.info = res['data']['info']
        })
    }
}
</script>

<style>
    #app{
        background:rgba(245,245,245,1);
    }
    
    .head-hz{
        width: 100%;
        height: 15rem;
        margin-top:5rem;
    }
    .search{
        width: 100%;
        height: 3rem;
    }
    .search .search-k{
        float: left;
        width: 55%;
        height: 3rem;
        margin-left:1rem;
        border:0;
        font-size:1.1rem;
        border-radius:2rem;
        line-height: 3rem;
        padding-left:3rem;
        background:url(../assets/images/search1.png) 0.8rem 0.8rem no-repeat;
        background-size:1.5rem 1.5rem;
        background-color:#fff;
        outline: none;
    }
    .search-right{
        float:right;
        width: 3.5rem;
        height: 3rem;
        background:rgba(105,105,105,1);
        border-radius:100%;
        margin-right:1rem;
        
    }
    .search-right .search-xx{
        display: inline-block;
        width: 2rem;
        height: 2rem;
        margin-top:0.5rem;
        margin-left:0.7rem;
        background:url(../assets/images/xx.png) no-repeat;
        background-size:100%;
    }
    .head-img{
        margin:1rem;
        height: 10rem;
    }
    .head-img img{
        width: 100%;
        height: 100%;
    }
    .gzh{
        height: 8rem;
        background-color:#fff;
        margin:0 1rem 1rem 1rem;
        border-radius:1rem;
    }
    .gzh .gzh-zx{
        display:inline-block;
        margin-left: 0.5rem;
        margin-top: 0.5rem;
        color:rgba(189,192,202,1);
    }
    .gzh .gzh-ms{
        margin:1rem;
    }
    .gzh .gzh-ms .gzh-img{
        float: left;
    }
    .gzh .gzh-ms p{
        margin: 0;
        margin-left:4rem;
    }
    .gzh .gzh-ms .gzh-title{
        margin-bottom:0.5rem;
    }
    .gzh .gzh-ms .gzh-hd{
        width: 7.5rem;
        font-size:0.8rem;
        color:rgba(189,192,202,1);
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap
    }
    .gzh .gzh-ms .gzh-gz{
        float:right;
        width: 3.5rem;
        height: 2rem;
        border-radius:8px;
        border:1px solid rgba(163,224,180);
        margin-top:-2.5rem;
        text-align: center;
        line-height:2rem;
        color:rgba(1,112,80,1);
    }
    .conter{
        width: 100%;
        height: 100%;
        background-color:#fff;
        margin-bottom:5rem;
    }
    .conter .conter-nav{
        height: 2rem;
        padding: 1rem;
    }
    .conter-nav ul{
        margin:0;
        padding:0;
    }
    .conter-nav ul li{
        float: left;
        margin-right:1rem;
    }
    .conter-nav ul .conter-zh{
        margin-right:0;
    }
    .conter-nav ul li a{
        color:rgba(189,192,202,1);
        font-size:0.5rem;
    }
    .conter-nav ul li .active{
        font-size:1rem;
        color:rgba(58,58,58,1);
    }
    .conter-nav ul li .active::after{
        display:block;
        content:"";
        width: 1.5rem;
        height: 0.3rem;
        border-radius:5px;
        margin-left:30%;
        margin-top:0.3rem;
        background:rgba(179,94,248,1);
    }
    .content{
        display: inline-block;
        width: 100%;
        height: 100%;
        background-color:#fff;
    }
    .content .content-left{
        float: left;
        width: 44%;
        margin-left:1rem;
    }
    .content .content-left img{
        width: 100%;
        height: 100%;
    }
    .content .content-bottom{
        width: 98.5%;
        height: 5rem;
        box-shadow:0.5px 0.5px 1px rgba(189,192,202,1);
        border:1px solid rgba(189,192,202,1);
        margin-top:-0.4rem;
        margin-bottom:1rem;
    }
    .content .content-bottom p{
        margin: 0;
        margin-top:0.5rem;
        margin-left:0.5rem;
        font-size:0.8rem;
    }
    .content .content-bottom a{
        float: right;
        width: 1rem;
        height: 1rem;
        background:url(../assets/images/jia.png) no-repeat;
        background-size:1rem;
        margin-top:-1rem;
        margin-right:1rem;
    }

</style>
